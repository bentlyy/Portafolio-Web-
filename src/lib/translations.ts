export type Lang = "es" | "en"

export type TranslationSet = {
  nav: { home: string; about: string; experience: string; projects: string; skills: string; infra: string; contact: string }
  hero: { available: string; downloadCv: string; role: string; focus: string; status: string }
  about: { system: string; title: string; titleAccent: string; education: string; degree: string; location: string; available: string }
  experience: { subtitle: string; title: string; active: string }
  projects: { subtitle: string; title: string; description: string; activeDeployment: string; live: string; site: string; code: string }
  skills: { subtitle: string; titleStart: string; titleEnd: string }
  contact: { subtitle: string; titleStart: string; titleEnd: string; description: string; email: string; location: string; downloadCv: string; cvDesc: string; download: string; portfolio: string; allSystems: string }
  footer: { portfolio: string; allSystems: string; home: string; about: string; projects: string; contact: string }
  infra: { subtitle: string; title: string; description: string; provider: string }
  page: { prev: string; next: string; menu: string }
  aboutText: string[]
  experienceData: Array<{ role: string; company: string; period: string; description: string; highlights: string[] }>
  projectDescriptions: string[]
  projectFeatures: string[][]
  skillCategories: Record<string, string>
  skillNames: Record<string, string>
}

export const translations: Record<Lang, TranslationSet> = {
  es: {
    nav: { home: "INICIO", about: "SOBRE MÍ", experience: "EXPERIENCIA", projects: "PROYECTOS", skills: "STACK", infra: "INFRAESTRUCTURA", contact: "CONTACTO" },
    hero: { available: "DISPONIBLE", downloadCv: "DESCARGAR CV", role: "01 / ROL", focus: "02 / ENFOQUE", status: "03 / ESTADO" },
    about: { system: "SISTEMA v2.0", title: "SOBRE", titleAccent: "MÍ", education: "Formación", degree: "Ingeniería Civil en Informática", location: "Ubicación", available: "DISPONIBLE" },
    experience: { subtitle: "EXPERIENCIA v1.0", title: "EXPERIENCIA", active: "EXPERIENCIA ACTIVA" },
    projects: { subtitle: "PROYECTOS v4.0", title: "PROYECTOS", description: "Monitoreo en tiempo real de proyectos activos. Cada entrada representa un entorno desplegado con recursos dedicados.", activeDeployment: "DESPLIEGUE ACTIVO", live: "EN VIVO", site: "SITIO", code: "CÓDIGO" },
    skills: { subtitle: "RECURSOS DEL SISTEMA", titleStart: "STACK", titleEnd: "TECNOLÓGICO" },
    contact: { subtitle: "CONTACTO", titleStart: "ENVÍA UN", titleEnd: "MENSAJE", description: "Estoy en búsqueda activa de nuevas oportunidades profesionales. Si tienes un proyecto, una idea o simplemente quieres conversar — estaré encantado de escucharte.", email: "Correo", location: "Ubicación", downloadCv: "Descargar CV", cvDesc: "Registro completo con experiencia, proyectos y formación.", download: "Descargar", portfolio: "PORTAFOLIO", allSystems: "TODOS LOS SISTEMAS OPERATIVOS" },
    footer: { portfolio: "PORTAFOLIO", allSystems: "TODOS LOS SISTEMAS OPERATIVOS", home: "INICIO", about: "SOBRE MÍ", projects: "PROYECTOS", contact: "CONTACTO" },
    infra: { subtitle: "ARQUITECTURA v1.0", title: "INFRAESTRUCTURA", description: "Distribución de los servicios en producción. Cada plataforma corre en un entorno aislado con recursos y estrategia de deploy independientes.", provider: "PROVEEDOR" },
    page: { prev: "Anterior", next: "Siguiente", menu: "Menú" },
    aboutText: [
      "Ingeniero Civil en Informática de la Universidad Adventista de Chile (2024). Apasionado por construir sistemas completos — desde el backend hasta el despliegue en la nube — con código limpio, escalable y bien documentado y testeado.",
      "Especializado en TypeScript, Node.js, React y PostgreSQL. He construido sistemas SaaS multi-tenant, plataformas IoT, APIs containerizadas y herramientas CLI para otros desarrolladores. Cada proyecto incluye Docker, CI/CD, testing y monitoreo.",
      "Me motiva resolver problemas reales con tecnología bien hecha. Busco mi primera oportunidad laboral en un equipo donde pueda aportar desde el día uno y seguir creciendo.",
    ],
    experienceData: [
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
    ],
    projectDescriptions: [
      "Sistema SaaS de gestión clínica multi-tenant con 16 módulos: agenda médica, historia clínica electrónica (SOAP + CIE-10), facturación Stripe, laboratorio, analítica con forecast, y panel super-admin. 1122 tests automatizados.",
      "Sistema multi-tenant para talleres mecánicos con arquitectura hexagonal. Clientes, vehículos, órdenes de reparación, inventario, facturación y monitoreo Prometheus/Grafana.",
      "CLI publicado en npm que genera APIs TypeScript listas para producción. Express, Prisma, autenticación JWT, Docker multi-stage, CI/CD y tests — todo en segundos.",
      "Plataforma IoT de monitoreo agrícola con motor de alertas automatizadas, notificaciones multicanal (WhatsApp/Email), mapa interactivo Leaflet y dashboards Recharts en tiempo real.",
    ],
    projectFeatures: [
      ["16 módulos con arquitectura modular monolith", "1122 tests, ~89% cobertura (Vitest + Supertest)", "JWT + TOTP 2FA, RBAC granular, auditoría HMAC-SHA256", "Multi-tenencia SaaS, i18n 4 idiomas, notificaciones email/SMS/WhatsApp"],
      ["Arquitectura hexagonal con separación domain/application/infra", "Multi-tenencia con aislamiento por empresa (10 tablas)", "RBAC 3 roles, bloqueo por intentos, JWT + bcrypt", "Stack de monitoreo: Prometheus + Grafana + Pino logging"],
      ["CLI interactivo con Commander + Inquirer", "Templates con Handlebars para personalización", "Genera proyectos con Docker multi-stage + CI/CD", "Autenticación JWT opcional, tests incluidos"],
      ["Dashboard en tiempo real con mapa Leaflet y gráficos Recharts", "Motor de alertas automáticas con prevención de duplicados (15 min)", "Notificaciones multicanal: Email (Nodemailer) + WhatsApp (Twilio)", "Roles admin/usuario, JWT, rate limiting, mock API para desarrollo"],
    ],
    skillCategories: { Lenguajes: "Lenguajes", Backend: "Backend", Frontend: "Frontend", DevOps: "DevOps", "Bases de Datos": "Bases de Datos", Testing: "Testing", Seguridad: "Seguridad" },
    skillNames: {},
  },

  en: {
    nav: { home: "HOME", about: "ABOUT ME", experience: "EXPERIENCE", projects: "PROJECTS", skills: "STACK", infra: "INFRASTRUCTURE", contact: "CONTACT" },
    hero: { available: "AVAILABLE", downloadCv: "DOWNLOAD CV", role: "01 / ROLE", focus: "02 / FOCUS", status: "03 / STATUS" },
    about: { system: "SYSTEM v2.0", title: "ABOUT", titleAccent: "ME", education: "Education", degree: "Computer Science Engineering", location: "Location", available: "AVAILABLE" },
    experience: { subtitle: "EXPERIENCE v1.0", title: "EXPERIENCE", active: "ACTIVE EXPERIENCE" },
    projects: { subtitle: "PROJECTS v4.0", title: "PROJECTS", description: "Real-time monitoring of active projects. Each entry represents a deployed environment with dedicated resources.", activeDeployment: "ACTIVE DEPLOYMENT", live: "LIVE", site: "SITE", code: "CODE" },
    skills: { subtitle: "SYSTEM RESOURCES", titleStart: "TECH", titleEnd: "STACK" },
    contact: { subtitle: "CONTACT", titleStart: "SEND A", titleEnd: "MESSAGE", description: "I am actively looking for new professional opportunities. If you have a project, an idea or just want to chat — I would love to hear from you.", email: "Email", location: "Location", downloadCv: "Download CV", cvDesc: "Complete record with experience, projects and education.", download: "Download", portfolio: "PORTFOLIO", allSystems: "ALL SYSTEMS OPERATIONAL" },
    footer: { portfolio: "PORTFOLIO", allSystems: "ALL SYSTEMS OPERATIONAL", home: "HOME", about: "ABOUT ME", projects: "PROJECTS", contact: "CONTACT" },
    infra: { subtitle: "ARCHITECTURE v1.0", title: "INFRASTRUCTURE", description: "Production service distribution. Each platform runs in an isolated environment with independent resources and deploy strategy.", provider: "PROVIDER" },
    page: { prev: "Previous", next: "Next", menu: "Menu" },
    aboutText: [
      "Computer Science Engineer from Universidad Adventista de Chile (2024). Passionate about building complete systems — from backend to cloud deployment — with clean, scalable, well-documented and tested code.",
      "Specialized in TypeScript, Node.js, React and PostgreSQL. I have built multi-tenant SaaS systems, IoT platforms, containerized APIs and CLI tools for other developers. Every project includes Docker, CI/CD, testing and monitoring.",
      "I am motivated by solving real problems with well-crafted technology. I am looking for my first professional opportunity in a team where I can contribute from day one and keep growing.",
    ],
    experienceData: [
      {
        role: "Full Stack Developer — Independent Projects",
        company: "Clinic-Backend · TallerPro · TypeForge · AgroBot-Alert",
        period: "2024 - Present",
        description: "Built complex systems as a personal portfolio to demonstrate skills in software architecture, testing, DevOps and security. Flagship project: SaaS clinical management system with 16 modules, multi-tenancy and 1122 tests.",
        highlights: [
          "Clinic-Backend: 16 modules (EHR, booking, Stripe billing, laboratory, analytics), 1122 tests (89% coverage), JWT + 2FA, i18n 4 languages, HMAC-SHA256 audit",
          "TallerPro: Multi-tenant system with hexagonal architecture, Prisma 6, Prometheus/Grafana, full CI/CD with 5 stages",
          "TypeForge: npm CLI that generates production-ready TypeScript APIs with Express, Prisma, JWT, Docker and CI/CD in seconds",
          "Stack: TypeScript, Node.js, React, PostgreSQL, Docker, GitHub Actions, AWS EC2, Cloudflare Pages, Render",
        ],
      },
      {
        role: "Full-Stack Developer — IoT Platform",
        company: "Geotrace (INIA Project)",
        period: "Jun 2024 - Nov 2024",
        description: "Undergraduate Thesis. Built a full-stack IoT platform with real-time monitoring for 20-50 agricultural sensors.",
        highlights: [
          "Backend in Node.js/TypeScript with MySQL, dashboards in Grafana and Power BI",
          "Automated alerts via WhatsApp (Twilio) and Email (Nodemailer), reducing response time ~20-25%",
          "Containerized platform with Docker + Wialon and OpenAI API integration",
          "Integration of OpenAI and WhatsApp APIs for smart alert enrichment",
        ],
      },
      {
        role: "Software Engineering Intern — Infrastructure",
        company: "IT Dept., Universidad Adventista de Chile",
        period: "Jul 2020 - Oct 2020",
        description: "Infrastructure automation and IT operations in a production academic environment.",
        highlights: [
          "Automated server provisioning with Ansible and CI/CD pipelines, reducing deployment time ~20-30%",
          "Managed Linux servers (Ubuntu/CentOS) with security hardening, patches and proactive monitoring",
          "Created standardized runbooks and operational documentation improving incident response consistency",
        ],
      },
    ],
    projectDescriptions: [
      "Multi-tenant SaaS clinical management system with 16 modules: medical scheduling, electronic health records (SOAP + ICD-10), Stripe billing, laboratory, analytics with forecasting, and super-admin panel. 1122 automated tests.",
      "Multi-tenant system for mechanic workshops with hexagonal architecture. Clients, vehicles, repair orders, inventory, invoicing and Prometheus/Grafana monitoring.",
      "CLI published on npm that generates production-ready TypeScript APIs. Express, Prisma, JWT authentication, multi-stage Docker, CI/CD and tests — all in seconds.",
      "IoT agricultural monitoring platform with automated alert engine, multi-channel notifications (WhatsApp/Email), interactive Leaflet map and real-time Recharts dashboards.",
    ],
    projectFeatures: [
      ["16 modules with modular monolith architecture", "1122 tests, ~89% coverage (Vitest + Supertest)", "JWT + TOTP 2FA, granular RBAC, HMAC-SHA256 audit", "Multi-tenant SaaS, i18n 4 languages, email/SMS/WhatsApp notifications"],
      ["Hexagonal architecture with domain/application/infra separation", "Multi-tenancy with per-company isolation (10 tables)", "RBAC 3 roles, lockout on failed attempts, JWT + bcrypt", "Monitoring stack: Prometheus + Grafana + Pino logging"],
      ["Interactive CLI with Commander + Inquirer", "Handlebars templates for customization", "Generates projects with multi-stage Docker + CI/CD", "Optional JWT authentication, tests included"],
      ["Real-time dashboard with Leaflet map and Recharts charts", "Automatic alert engine with duplicate prevention (15 min)", "Multi-channel notifications: Email (Nodemailer) + WhatsApp (Twilio)", "Admin/user roles, JWT, rate limiting, mock API for development"],
    ],
    skillCategories: { Lenguajes: "Languages", Backend: "Backend", Frontend: "Frontend", DevOps: "DevOps", "Bases de Datos": "Databases", Testing: "Testing", Seguridad: "Security" },
    skillNames: {},
  },
}
