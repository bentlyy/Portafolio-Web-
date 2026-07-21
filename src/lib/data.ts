export const personalInfo = {
  name: "Alejandro Muñoz Garay",
  title: "Ingeniero Civil en Informática",
  tagline: "Full Stack Developer · TypeScript · Node.js · React",
  email: "munozgarayalejandro@gmail.com",
  phone: "+56 9 5381 8617",
  location: "San Pablo, Santiago, Chile",
  linkedin: "https://linkedin.com/in/alejandro-munoz-garay-668324347",
  github: "https://github.com/bentlyy",
  about: [
    "Ingeniero Civil en Informática de la Universidad Adventista de Chile (2024). Apasionado por construir sistemas completos — desde el backend hasta el despliegue en la nube — con código limpio, escalable y bien documentado y testeado.",
    "Especializado en TypeScript, Node.js, React y PostgreSQL. He construido sistemas SaaS multi-tenant, plataformas IoT, APIs containerizadas y herramientas CLI para otros desarrolladores. Cada proyecto incluye Docker, CI/CD, testing y monitoreo.",
    "Me motiva resolver problemas reales con tecnología bien hecha. Busco mi primera oportunidad laboral en un equipo donde pueda aportar desde el día uno y seguir creciendo.",
  ],
}

export const experience = [
  {
    role: "Desarrollador Full Stack — Proyectos Autónomos",
    company: "Clinic-Backend · TallerPro · TypeForge · AgroBot-Alert",
    period: "2024 - Presente",
    description: "Construcción de sistemas complejos como portafolio personal para demostrar competencias en arquitectura de software, testing, DevOps y seguridad. Proyecto insignia: sistema de gestión clínica SaaS con 16 módulos, multi-tenancy y 1122 tests.",
    highlights: [
      "Clinic-Backend: 16 módulos (EHR, booking, facturación Stripe, laboratorio, analítica), 1122 tests (89% cobertura), JWT + 2FA, i18n 4 idiomas, auditoría HMAC-SHA256",
      "TallerPro: Sistema multi-tenant con arquitectura hexagonal, Prisma 6, Prometheus/Grafana, CI/CD completo con 5 etapas",
      "TypeForge: CLI npm que genera APIs TypeScript listas para producción con Express, Prisma, JWT, Docker y CI/CD en segundos",
      "Stack: TypeScript, Node.js, React, PostgreSQL, Docker, GitHub Actions, AWS EC2, Cloudflare Pages, Render",
    ],
    demoUrl: "https://github.com/bentlyy",
  },
  {
    role: "Desarrollador Full-Stack — Plataforma IoT",
    company: "Geotrace (Proyecto INIA)",
    period: "Jun 2024 - Nov 2024",
    description: "Trabajo Final de Carrera. Construcción de plataforma IoT full-stack con monitoreo en tiempo real para 20-50 sensores agrícolas.",
    highlights: [
      "Backend en Node.js/TypeScript con MySQL, dashboards en Grafana y Power BI",
      "Alertas automatizadas vía WhatsApp (Twilio) y Email (Nodemailer), reduciendo tiempo de respuesta ~20-25%",
      "Plataforma containerizada con Docker + integración APIs de Wialon y OpenAI",
      "Integración de APIs de OpenAI y WhatsApp para enriquecimiento inteligente de alertas",
    ],
  },
  {
    role: "Práctica en Ingeniería de Software — Infraestructura",
    company: "Depto. de Informática, Universidad Adventista de Chile",
    period: "Jul 2020 - Oct 2020",
    description: "Automatización de infraestructura y operaciones TI en entorno académico de producción.",
    highlights: [
      "Automaticé aprovisionamiento de servidores con Ansible y pipelines CI/CD, reduciendo tiempo de despliegue ~20-30%",
      "Administré servidores Linux (Ubuntu/CentOS) con hardening de seguridad, parches y monitoreo proactivo",
      "Creé runbooks estandarizados y documentación operativa mejorando consistencia en respuesta a incidentes",
    ],
  },
]

export const projects = [
  {
    title: "Clinic-Backend",
    description: "Sistema SaaS de gestión clínica multi-tenant con 16 módulos: agenda médica, historia clínica electrónica (SOAP + CIE-10), facturación Stripe, laboratorio, analítica con forecast, y panel super-admin. 1122 tests automatizados.",
    tech: ["TypeScript", "Express 5", "React 19", "PostgreSQL 15", "Docker", "JWT + 2FA", "i18n", "GitHub Actions"],
    github: "https://github.com/bentlyy/Clinica-Salud-Vital",
    demo: "https://clinica-salud-vital.onrender.com",
    image: "/images/clinic.png",
    features: [
      "16 módulos con arquitectura modular monolith",
      "1122 tests, ~89% cobertura (Vitest + Supertest)",
      "JWT + TOTP 2FA, RBAC granular, auditoría HMAC-SHA256",
      "Multi-tenencia SaaS, i18n 4 idiomas, notificaciones email/SMS/WhatsApp",
    ],
  },
  {
    title: "TallerPro",
    description: "Sistema multi-tenant para talleres mecánicos con arquitectura hexagonal. Clientes, vehículos, órdenes de reparación, inventario, facturación y monitoreo Prometheus/Grafana.",
    tech: ["Node.js", "Express 5", "Prisma 6", "React 18", "PostgreSQL 15", "Docker", "Prometheus", "Grafana"],
    github: "https://github.com/bentlyy/TallerMecanico",
    demo: "https://taller.amgdeveloper.cl",
    image: "/images/tallerpro.png",
    features: [
      "Arquitectura hexagonal con separación domain/application/infra",
      "Multi-tenencia con aislamiento por empresa (10 tablas)",
      "RBAC 3 roles, bloqueo por intentos, JWT + bcrypt",
      "Stack de monitoreo: Prometheus + Grafana + Pino logging",
    ],
  },
  {
    title: "TypeForge",
    description: "CLI publicado en npm que genera APIs TypeScript listas para producción. Express, Prisma, autenticación JWT, Docker multi-stage, CI/CD y tests — todo en segundos.",
    tech: ["Node.js", "TypeScript", "Commander", "Inquirer", "Handlebars", "npm"],
    github: "https://github.com/bentlyy/typeforge",
    demo: "https://www.npmjs.com/package/typeforge",
    image: "/images/typeforge.png",
    features: [
      "CLI interactivo con Commander + Inquirer",
      "Templates con Handlebars para personalización",
      "Genera proyectos con Docker multi-stage + CI/CD",
      "Autenticación JWT opcional, tests incluidos",
    ],
  },
  {
    title: "AgroBot-Alert",
    description: "Plataforma IoT de monitoreo agrícola con motor de alertas automatizadas, notificaciones multicanal (WhatsApp/Email), mapa interactivo Leaflet y dashboards Recharts en tiempo real.",
    tech: ["React 18", "Node.js", "Express 4", "MySQL 8", "Docker", "Leaflet", "Twilio", "Recharts"],
    github: "https://github.com/bentlyy/agrobot-alert",
    demo: "https://agrobot.amgdeveloper.cl",
    image: "/images/agrobot.png",
    features: [
      "Dashboard en tiempo real con mapa Leaflet y gráficos Recharts",
      "Motor de alertas automáticas con prevención de duplicados (15 min)",
      "Notificaciones multicanal: Email (Nodemailer) + WhatsApp (Twilio)",
      "Roles admin/usuario, JWT, rate limiting, mock API para desarrollo",
    ],
  },
]

export const skills = {
  Lenguajes: ["TypeScript", "JavaScript", "Python", "SQL"],
  Backend: ["Node.js", "Express", "Prisma ORM", "REST API", "JWT"],
  Frontend: ["React", "Next.js", "Tailwind CSS", "MUI"],
  DevOps: ["Docker", "GitHub Actions", "AWS EC2", "Nginx", "Linux"],
  "Bases de Datos": ["PostgreSQL", "MySQL", "Prisma ORM", "SQL Avanzado"],
  Testing: ["Jest", "Vitest", "Supertest", "Cobertura 89%"],
  Seguridad: ["JWT + Refresh Tokens", "Helmet / CORS", "TOTP 2FA", "RBAC", "Auditoría"],
}
