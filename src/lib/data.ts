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
    "Aprendo mejor cuando enfrento problemas nuevos al desarrollar una idea. Después de titularme, tomé proyectos freelance que me ayudaron a crecer, pero ahora busco un empleo estable donde pueda aplicar lo que sé: desarrollo web, automatización y administración de servidores, tanto locales como en la nube.",
    "Soy Alejandro Muñoz, Ingeniero Civil en Informática de la Universidad Adventista de Chile (2024). Me enfoco en construir sistemas completos, desde el backend hasta el despliegue, priorizando código claro y bien estructurado.",
    "Trabajo con TypeScript, Node.js, React y PostgreSQL. He desarrollado sistemas SaaS multi-tenant, plataformas IoT, APIs containerizadas y herramientas CLI. En todos mis proyectos integro Docker, CI/CD, testing y monitoreo como parte del flujo de trabajo.",
  ],
}

export const experience = [
  {
    role: "Desarrollador Full Stack — Proyectos Autónomos",
    company: "Clinic-Backend · TallerPro · TypeForge · AgroBot-Alert",
    period: "2024 - Presente",
    description: "Desarrollé sistemas completos para mi portafolio, aplicando buenas prácticas de arquitectura, testing, DevOps y seguridad. El más completo es un sistema de gestión clínica SaaS con 16 módulos, multi-tenancy y más de 1100 tests automatizados.",
    highlights: [
      "Clinic-Backend: sistema SaaS con 16 módulos (agenda, EHR, facturación, laboratorio, analítica), 1122 tests automatizados (89% cobertura), autenticación 2FA y soporte multilenguaje.",
      "TallerPro: sistema multi-tenant con arquitectura hexagonal, monitoreo con Prometheus y Grafana, CI/CD automatizado en 5 etapas.",
      "TypeForge: CLI publicado en npm que genera APIs TypeScript listas para producción en segundos.",
      "Stack principal: TypeScript, Node.js, React, PostgreSQL, Docker, GitHub Actions.",
    ],
    demoUrl: "https://github.com/bentlyy",
  },
  {
    role: "Desarrollador Full-Stack — Plataforma IoT",
    company: "Geotrace (Proyecto INIA)",
    period: "Jun 2024 - Nov 2024",
    description: "Mi trabajo de título. Construí una plataforma IoT con monitoreo en tiempo real para sensores agrícolas, integrando sensores, backend, dashboards y alertas automatizadas.",
    highlights: [
      "Backend en Node.js/TypeScript con MySQL y dashboards en Grafana y Power BI.",
      "Alertas automáticas por WhatsApp y Email que redujeron el tiempo de respuesta en un 20-25%.",
      "Plataforma containerizada con Docker, integrando APIs de Wialon y OpenAI para enriquecer las alertas.",
    ],
  },
  {
    role: "Práctica en Ingeniería de Software — Infraestructura",
    company: "Depto. de Informática, Universidad Adventista de Chile",
    period: "Jul 2020 - Oct 2020",
    description: "Automaticé tareas de infraestructura y operaciones TI en un entorno académico con servidores en producción.",
    highlights: [
      "Automaticé el aprovisionamiento de servidores con Ansible y pipelines CI/CD, acortando los tiempos de despliegue.",
      "Administré servidores Linux aplicando hardening de seguridad, parches y monitoreo constante.",
      "Creé runbooks y documentación operativa para estandarizar la respuesta ante incidentes.",
    ],
  },
]

export const projects = [
  {
    title: "Clinic-Backend",
    description: "Sistema SaaS para gestión clínica con 16 módulos: agenda médica, historias clínicas, facturación, laboratorio, analítica y panel de administración. Incluye más de 1100 tests automatizados.",
    tech: ["TypeScript", "Express 5", "React 19", "PostgreSQL 15", "Docker", "JWT + 2FA", "i18n", "GitHub Actions"],
    github: "https://github.com/bentlyy/Clinica-Salud-Vital",
    demo: "https://clinica-salud-vital.onrender.com",
    images: ["/images/clinic02.png", "/images/clinic03.png"],
    features: [
      "16 módulos con arquitectura modular monolith",
      "1122 tests, ~89% cobertura (Vitest + Supertest)",
      "JWT + TOTP 2FA, RBAC granular, auditoría HMAC-SHA256",
      "Multi-tenencia SaaS, i18n 4 idiomas, notificaciones email/SMS/WhatsApp",
    ],
  },
  {
    title: "TallerPro",
    description: "Sistema para talleres mecánicos con arquitectura hexagonal. Gestiona clientes, vehículos, órdenes de reparación, inventario y facturación, con monitoreo integrado.",
    tech: ["Node.js", "Express 5", "Prisma 6", "React 18", "PostgreSQL 15", "Docker", "Prometheus", "Grafana"],
    github: "https://github.com/bentlyy/TallerMecanico",
    demo: "https://taller.amgdeveloper.cl",
    images: ["/images/tallerpro.png"],
    features: [
      "Arquitectura hexagonal con separación domain/application/infra",
      "Multi-tenencia con aislamiento por empresa (10 tablas)",
      "RBAC 3 roles, bloqueo por intentos, JWT + bcrypt",
      "Stack de monitoreo: Prometheus + Grafana + Pino logging",
    ],
  },
  {
    title: "TypeForge",
    description: "CLI publicado en npm que genera APIs TypeScript listas para usar en segundos. Incluye Express, Prisma, autenticación JWT, Docker y CI/CD listos para usar.",
    tech: ["Node.js", "TypeScript", "Commander", "Inquirer", "Handlebars", "npm"],
    github: "https://github.com/bentlyy/typeforge",
    demo: "https://www.npmjs.com/package/typeforge",
    images: ["/images/typeforge.png"],
    features: [
      "CLI interactivo con Commander + Inquirer",
      "Templates con Handlebars para personalización",
      "Genera proyectos con Docker multi-stage + CI/CD",
      "Autenticación JWT opcional, tests incluidos",
    ],
  },
  {
    title: "AgroBot-Alert",
    description: "Plataforma IoT para monitoreo agrícola con alertas automáticas, notificaciones por WhatsApp y Email, mapas interactivos y gráficos en tiempo real.",
    tech: ["React 18", "Node.js", "Express 4", "MySQL 8", "Docker", "Leaflet", "Twilio", "Recharts"],
    github: "https://github.com/bentlyy/agrobot-alert",
    demo: "https://agrobot.amgdeveloper.cl",
    images: ["/images/agrobot.png"],
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
  DevOps: ["Docker", "GitHub Actions", "Oracle Cloud", "Nginx", "Linux"],
  "Bases de Datos": ["PostgreSQL", "MySQL", "Prisma ORM", "SQL Avanzado"],
  Testing: ["Jest", "Vitest", "Supertest", "Cobertura de tests"],
  Seguridad: ["JWT + Refresh Tokens", "Helmet / CORS", "TOTP 2FA", "RBAC", "Auditoría"],
}
