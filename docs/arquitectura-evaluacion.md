# Análisis y Evaluación de Arquitectura — Portafolio Alejandro Muñoz

---

## Estado Actual — Diagnóstico (2 Junio 2026)

### Problema original
Cloudflare Pages no reflejaba los últimos commits. Causa:
- Commits nuevos en rama `master`, Cloudflare Pages apuntaba a `main`
- El auto-build de `master` fallaba (deployment 404)
- Token de wrangler expirado

### Fix aplicado
- Re-autenticación de wrangler
- Build local + deploy manual con `wrangler pages deploy`
- Fix a componentes: `id="hero"` faltante en Hero.tsx, navbar sin link a INFRAESTRUCTURA

---

## Arquitectura Actual

```
amgdeveloper.cl
   │
   ├── Cloudflare Pages ─── Portfolio (Next.js SSG)    ← gratis
   │
   ├── AWS EC2 ─── Nginx Gateway ─── Docker Compose
   │                (1 instancia, todo junto)
   │                  ├── AgroBot (Node + MySQL)
   │                  ├── TallerPro (Node + PostgreSQL)
   │                  └── ML-Portafolio (FastAPI + React + Python)
   │
   └── Render ─── Clínica Salud Vital                  ← gratis
```

### Problemas identificados
- Todo en 1 sola EC2 (cuello de botella, sin redundancia)
- Mezcla de proveedores sin beneficio real
- Sin SSL/HTTPS en EC2 (nginx en puerto 80, configuración comentada)
- Sin auto-scaling, sin health checks, sin rollback
- ML-service (Python) compite recursos con los Node apps
- Si la EC2 se cae, se cae todo

---

## Opciones Evaluadas

### Opción A — AWS todo-en-uno (ECS Fargate)

```
Cloudflare DNS (solo DNS, gratis)
      │
      ├── Cloudflare Pages ─── Portfolio (se queda)
      │
      ├── AWS ECS Fargate (serverless containers)
      │    ├── Service: AgroBot API          → 0.25 vCPU / 0.5GB
      │    ├── Service: TallerPro API        → 0.25 vCPU / 0.5GB
      │    ├── Service: ML-Service (Python)  → 0.5 vCPU  / 1GB
      │    ├── Service: AgroBot Frontend     → 0.25 vCPU / 0.5GB
      │    ├── Service: TallerPro Frontend   → 0.25 vCPU / 0.5GB
      │    └── Service: ML Frontend          → 0.25 vCPU / 0.5GB
      │
      ├── AWS ALB (distribuye tráfico)
      │
      ├── AWS RDS PostgreSQL (db.t4g.micro, 20GB SSD, free tier 12 meses)
      │
      └── AWS ECR (container registry, 500MB gratis)

CI/CD: GitHub Actions → build → ECR → ECS Fargate
```

**Costo estimado:** ~$14-20/mes
- ECS Fargate (6 servicios, spot): ~$8-12
- ALB: ~$6-8
- RDS (free 12m, luego ~$15): $0 / $15
- ECR: $0

**Pros:** Serverless, auto-scaling, SSL automático, health checks, rollbacks, aislado
**Contras:** Complejo, ALB cuesta aunque no haya tráfico

---

### Opción B — AWS Lightsail (simple, precio fijo)

```
Cloudflare DNS
    ├── Cloudflare Pages ─── Portfolio (gratis)
    └── AWS Lightsail ($5-10/mes)
         └── Docker Compose (como ahora)
              ├── AgroBot
              ├── TallerPro
              └── ML-Portafolio
```

**Costo:** $5-10/mes fijo

**Pros:** Misma arquitectura, IP fija, ancho de banda incluido
**Contras:** Todo en 1 instancia, sin HA, mismo problema de recursos

---

### Opción C — Render + Railway (PaaS)

```
Cloudflare DNS
    ├── Cloudflare Pages ─── Portfolio (gratis)
    ├── Render ─── AgroBot API + DB (free tier)
    ├── Render ─── TallerPro API + DB (free tier)
    ├── Render ─── ML Service (7$/mes)
    └── Render / Netlify ─── Frontends (gratis)
```

**Costo:** ~$7/mes

**Pros:** Simple, deploys automáticos desde GitHub, SSL gratis
**Contras:** ML-service en free tier se duerme a los 15min, límite 512MB RAM

---

### Opción D — Híbrida optimizada (RECOMENDADA)

```
Cloudflare DNS
    ├── Cloudflare Pages ─── Portfolio (gratis) ✅
    │
    ├── AWS ECS Fargate (servicios principales)
    │    ├── TallerPro API     → 0.25 vCPU / 0.5GB
    │    └── AgroBot API       → 0.25 vCPU / 0.5GB
    │       ↕ RDS PostgreSQL (free tier)
    │
    ├── Render ─── Clínica Salud Vital (se queda) ✅
    │
    └── ML Service → Cloudflare Workers AI o Hugging Face Inference
                      (costo cero o casi cero)
```

**Costo:** ~$8-12/mes

**Pros:**
- Separación real de servicios
- ML serverless (sin servidor que mantener)
- ECS Fargate sin servidores que administrar
- RDS PostgreSQL gratis 12 meses
- Cloudflare Pages (CDN global, gratis)
- SSL automático en todos lados

---

## Propuesta de Infraestructura como Código + CI/CD (Opción D + control total)

### Estructura de archivos

```
infra/
├── terraform/
│   ├── main.tf           ─── provider AWS + Cloudflare
│   ├── ecs.tf            ─── cluster + servicios Fargate
│   ├── rds.tf            ─── PostgreSQL
│   ├── ecr.tf            ─── container registries
│   ├── alb.tf            ─── ALB + SSL
│   └── cloudflare.tf     ─── DNS records
│
├── scripts/
│   ├── up.sh             ─── escala servicios a 1
│   ├── down.sh           ─── escala servicios a 0 (costo $0)
│   └── status.sh         ─── estado actual
│
├── Makefile              ─── comandos centralizados
│
└── .github/workflows/
    ├── deploy-agrobot.yml   ─── build + push ECR + deploy ECS
    ├── deploy-taller.yml    ─── build + push ECR + deploy ECS
    ├── control.yml          ─── scale up/down manual desde GitHub UI
    └── destroy.yml          ─── destroy con confirmación
```

### Comandos vía Makefile

| Comando | Qué hace |
|---|---|
| `make deploy s=taller` | Build + push + deploy TallerPro |
| `make deploy s=agro` | Build + push + deploy AgroBot |
| `make up` | Escala todos los servicios a 1 |
| `make down` | Escala todos a 0 (costo $0) |
| `make status` | Muestra qué está corriendo + costos aprox |
| `make logs s=agro` | Tail logs de un servicio |
| `make destroy` | Terraform destroy (baja TODO) |

### Costos con scale-to-zero

| Servicio | 24/7 | Solo hábil 8h | Bajo demanda |
|---|---|---|---|
| ECS Fargate (3 servicios) | ~$28 | ~$5-8 | ~$2-3 |
| ALB | $16 | $16 | $16 |
| RDS (free tier) | $0 | $0 | $0 |
| **Total** | **~$44/mes** | **~$22/mes** | **~$18/mes** |

*ALB se puede reemplazar con Cloudflare Tunnel (gratis) para eliminar su costo fijo.*

---

## Decisiones pendientes

1. ¿RDS PostgreSQL free tier o mantener MySQL para AgroBot?
2. ¿ML service → Cloudflare Workers AI (gratis) o HuggingFace Inference?
3. ¿Deploy automático al hacer push, o solo manual desde GitHub Actions?

---

*Conversación guardada el 2 de Junio 2026*
