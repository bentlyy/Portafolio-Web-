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
  infra: { subtitle: string; title: string; description: string; provider: string; statusOnline: string; statusMaintenance: string; statusUpdating: string; statusError: string; topology: string; providers: string; cloudflare: { name: string; tag: string; desc: string }; oracle: { name: string; tag: string; desc: string }; render: { name: string; tag: string; desc: string }; legend: { focal: string; gateway: string; edge: string; external: string; https: string; pgsql: string; docker: string } }
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
    contact: { subtitle: "CONTACTO", titleStart: "ENVÍA UN", titleEnd: "MENSAJE", description: "Estoy buscando mi primera oportunidad profesional. Si tienes un proyecto, una idea o simplemente quieres conversar, me gustaría escucharte.", email: "Correo", location: "Ubicación", downloadCv: "Descargar CV", cvDesc: "Registro completo con experiencia, proyectos y formación.", download: "Descargar", portfolio: "PORTAFOLIO", allSystems: "TODOS LOS SISTEMAS OPERATIVOS" },
    footer: { portfolio: "PORTAFOLIO", allSystems: "TODOS LOS SISTEMAS OPERATIVOS", home: "INICIO", about: "SOBRE MÍ", projects: "PROYECTOS", contact: "CONTACTO" },
    infra: { subtitle: "ARQUITECTURA v1.0", title: "INFRAESTRUCTURA", description: "Así están distribuidos los servicios en producción. Cada plataforma corre en su propio entorno, con recursos y estrategias de despliegue independientes.", provider: "PROVEEDOR", statusOnline: "EN LÍNEA", statusMaintenance: "EN PAUSA", statusUpdating: "ACTUALIZANDO", statusError: "CAÍDO", topology: "TOPOLOGÍA DE PRODUCCIÓN", providers: "DISTRIBUCIÓN POR PROVEEDOR", cloudflare: { name: "Cloudflare", tag: "EDGE · DNS · WAF", desc: "Punto de entrada global. Proxea los tres dominios hacia el origen en Oracle Cloud y termina SSL." }, oracle: { name: "Oracle Cloud", tag: "COMPUTE · SA-SANTIAGO-1", desc: "VPS con Nginx como gateway y stacks en Docker Compose. Hostea los proyectos con sus bases de datos internas." }, render: { name: "Render", tag: "PAAS · IP FIJA", desc: "Servicio gestionado para la clínica. La app conecta al Postgres de Oracle por :5432 con SSL." }, legend: { focal: "Focal · datos", gateway: "Gateway · backend", edge: "Cloud · edge", external: "External · tráfico", https: "HTTPS · 443", pgsql: "PGSQL · 5432", docker: "Docker · interno" } },
    page: { prev: "Anterior", next: "Siguiente", menu: "Menú" },
    aboutText: [
      "Aprendo mejor cuando enfrento problemas nuevos al desarrollar una idea. Después de titularme, tomé proyectos freelance que me ayudaron a crecer, pero ahora busco un empleo estable donde pueda aplicar lo que sé: desarrollo web, automatización y administración de servidores, tanto locales como en la nube.",
      "Soy Alejandro Muñoz, Ingeniero Civil en Informática de la Universidad Adventista de Chile (2024). Me enfoco en construir sistemas completos, desde el backend hasta el despliegue, priorizando código claro y bien estructurado.",
      "Trabajo con TypeScript, Node.js, React y PostgreSQL. He desarrollado sistemas SaaS multi-tenant, plataformas IoT, APIs containerizadas y herramientas CLI. En todos mis proyectos integro Docker, CI/CD, testing y monitoreo como parte del flujo de trabajo.",
    ],
    experienceData: [
      {
        role: "Desarrollador Full Stack — Proyectos Autónomos",
        company: "Vitaria · AgroBot-Alert · TallerPro · Transporte · TypeForge",
        period: "2024 - Presente",
        description: "Desarrollé sistemas completos para mi portafolio, aplicando buenas prácticas de arquitectura, testing, DevOps y seguridad. El más completo es un sistema de gestión clínica SaaS con 16 módulos, multi-tenancy y más de 1100 tests automatizados.",
        highlights: [
          "Vitaria: sistema SaaS con 16 módulos (agenda, EHR, facturación, laboratorio, analítica), 1122 tests automatizados (89% cobertura), autenticación 2FA y soporte multilenguaje.",
          "AgroBot-Alert: plataforma IoT con monitoreo agrícola en tiempo real, alertas por WhatsApp y Email, y dashboards con mapa Leaflet.",
          "TallerPro: sistema multi-tenant con arquitectura hexagonal, monitoreo con Prometheus y Grafana, CI/CD automatizado en 5 etapas.",
          "Transporte: TMS para flota de carga internacional con tracking GPS en tiempo real, geocercas y facturación.",
          "TypeForge: CLI publicado en npm que genera APIs TypeScript listas para producción en segundos.",
          "Stack principal: TypeScript, Node.js, React, PostgreSQL, Docker, GitHub Actions.",
        ],
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
    ],
    projectDescriptions: [
      "Sistema SaaS para gestión clínica con 16 módulos: agenda médica, historias clínicas, facturación, laboratorio, analítica y panel de administración. Incluye más de 1100 tests automatizados.",
      "Plataforma IoT para monitoreo agrícola con alertas automáticas, notificaciones por WhatsApp y Email, mapas interactivos y gráficos en tiempo real.",
      "Sistema para talleres mecánicos con arquitectura hexagonal. Gestiona clientes, vehículos, órdenes de reparación, inventario y facturación, con monitoreo integrado.",
      "Transport Management System (TMS) en tiempo real para flota de carga internacional: clientes, conductores, camiones, viajes, geocercas y facturación, con tracking GPS en vivo.",
      "CLI publicado en npm que genera APIs TypeScript listas para usar en segundos. Incluye Express, Prisma, autenticación JWT, Docker y CI/CD listos para usar.",
    ],
    projectFeatures: [
      ["16 módulos con arquitectura modular monolith", "1122 tests, ~89% cobertura (Vitest + Supertest)", "JWT + TOTP 2FA, RBAC granular, auditoría HMAC-SHA256", "Multi-tenencia SaaS, i18n 4 idiomas, notificaciones email/SMS/WhatsApp"],
      ["Dashboard en tiempo real con mapa Leaflet y gráficos Recharts", "Motor de alertas automáticas con prevención de duplicados (15 min)", "Notificaciones multicanal: Email (Nodemailer) + WhatsApp (Twilio)", "Roles admin/usuario, JWT, rate limiting, mock API para desarrollo"],
      ["Arquitectura hexagonal con separación domain/application/infra", "Multi-tenencia con aislamiento por empresa (10 tablas)", "RBAC 3 roles, bloqueo por intentos, JWT + bcrypt", "Stack de monitoreo: Prometheus + Grafana + Pino logging"],
      ["Tracking GPS en tiempo real con mapa Leaflet y alertas por geocercas", "Gestión de flota multi-tenant: clientes, conductores, camiones y viajes", "Motor de simulación de rutas y posiciones GPS (ingnition, combustible, velocidad)", "Facturación, autenticación JWT + refresh y roles RBAC (superadmin/admin/driver)"],
      ["CLI interactivo con Commander + Inquirer", "Templates con Handlebars para personalización", "Genera proyectos con Docker multi-stage + CI/CD", "Autenticación JWT opcional, tests incluidos"],
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
    contact: { subtitle: "CONTACT", titleStart: "SEND A", titleEnd: "MESSAGE", description: "I'm looking for my first professional opportunity. If you have a project, an idea or just want to chat, I'd love to hear from you.", email: "Email", location: "Location", downloadCv: "Download CV", cvDesc: "Complete record with experience, projects and education.", download: "Download", portfolio: "PORTFOLIO", allSystems: "ALL SYSTEMS OPERATIONAL" },
    footer: { portfolio: "PORTFOLIO", allSystems: "ALL SYSTEMS OPERATIONAL", home: "HOME", about: "ABOUT ME", projects: "PROJECTS", contact: "CONTACT" },
    infra: { subtitle: "ARCHITECTURE v1.0", title: "INFRASTRUCTURE", description: "How services are distributed in production. Each platform runs in its own environment, with independent resources and deploy strategies.", provider: "PROVIDER", statusOnline: "ONLINE", statusMaintenance: "ON HOLD", statusUpdating: "UPDATING", statusError: "DOWN", topology: "PRODUCTION TOPOLOGY", providers: "PROVIDER DISTRIBUTION", cloudflare: { name: "Cloudflare", tag: "EDGE · DNS · WAF", desc: "Global entry point. Proxies the three domains to the Oracle Cloud origin and terminates SSL." }, oracle: { name: "Oracle Cloud", tag: "COMPUTE · SA-SANTIAGO-1", desc: "VPS running Nginx as gateway and Docker Compose stacks. Hosts the projects with their internal databases." }, render: { name: "Render", tag: "PAAS · STATIC IP", desc: "Managed service for the clinic. The app connects to Oracle Postgres over :5432 with SSL." }, legend: { focal: "Focal · data", gateway: "Gateway · backend", edge: "Cloud · edge", external: "External · traffic", https: "HTTPS · 443", pgsql: "PGSQL · 5432", docker: "Docker · internal" } },
    page: { prev: "Previous", next: "Next", menu: "Menu" },
    aboutText: [
      "I learn best when I run into new problems while developing an idea. After graduating, freelance projects helped me grow, but now I'm looking for a stable role where I can put my skills to use: web development, automation, and server administration — both on-premises and in the cloud.",
      "I'm Alejandro Muñoz, a Computer Science Engineer from Universidad Adventista de Chile (2024). I focus on building complete systems, from backend to deployment, prioritizing clear and well-structured code.",
      "I work with TypeScript, Node.js, React and PostgreSQL. I've built multi-tenant SaaS systems, IoT platforms, containerized APIs and CLI tools. Every project includes Docker, CI/CD, testing and monitoring as part of the workflow.",
    ],
    experienceData: [
      {
        role: "Full Stack Developer — Independent Projects",
        company: "Vitaria · AgroBot-Alert · TallerPro · Transporte · TypeForge",
        period: "2024 - Present",
        description: "I built complete systems for my portfolio, applying solid practices in architecture, testing, DevOps and security. The most comprehensive one is a SaaS clinical management system with 16 modules, multi-tenancy and over 1100 automated tests.",
        highlights: [
          "Vitaria: SaaS system with 16 modules (scheduling, EHR, billing, laboratory, analytics), 1122 automated tests (89% coverage), 2FA authentication and multi-language support.",
          "AgroBot-Alert: IoT platform with real-time agricultural monitoring, WhatsApp and Email alerts, and Leaflet map dashboards.",
          "TallerPro: multi-tenant system with hexagonal architecture, Prometheus and Grafana monitoring, automated CI/CD with 5 stages.",
          "Transporte: TMS for international freight fleets with real-time GPS tracking, geofences and invoicing.",
          "TypeForge: npm CLI that generates production-ready TypeScript APIs in seconds.",
          "Main stack: TypeScript, Node.js, React, PostgreSQL, Docker, GitHub Actions.",
        ],
      },
      {
        role: "Full-Stack Developer — IoT Platform",
        company: "Geotrace (INIA Project)",
        period: "Jun 2024 - Nov 2024",
        description: "My undergraduate thesis. I built an IoT platform with real-time monitoring for agricultural sensors, integrating sensors, backend, dashboards and automated alerts.",
        highlights: [
          "Backend in Node.js/TypeScript with MySQL and dashboards in Grafana and Power BI.",
          "Automated alerts via WhatsApp and Email that reduced response time by 20-25%.",
          "Containerized platform with Docker, integrating Wialon and OpenAI APIs to enrich alerts.",
        ],
      },
      {
        role: "Software Engineering Intern — Infrastructure",
        company: "IT Dept., Universidad Adventista de Chile",
        period: "Jul 2020 - Oct 2020",
        description: "I automated infrastructure and IT operations in an academic environment with production servers.",
        highlights: [
          "Automated server provisioning with Ansible and CI/CD pipelines, shortening deployment times.",
          "Managed Linux servers with security hardening, patching and constant monitoring.",
          "Created runbooks and operational documentation to standardize incident response.",
        ],
      },
    ],
    projectDescriptions: [
      "SaaS clinical management system with 16 modules: scheduling, EHR, billing, laboratory, analytics and admin panel. Includes over 1100 automated tests.",
      "IoT platform for agricultural monitoring with automated alerts, WhatsApp and Email notifications, interactive maps and real-time charts.",
      "System for mechanic workshops with hexagonal architecture. Manages clients, vehicles, repair orders, inventory and invoicing, with integrated monitoring.",
      "Real-time Transport Management System (TMS) for international freight fleets: clients, drivers, trucks, trips, geofences and invoicing, with live GPS tracking.",
      "npm CLI that generates production-ready TypeScript APIs in seconds. Includes Express, Prisma, JWT authentication, Docker and CI/CD ready to use.",
    ],
    projectFeatures: [
      ["16 modules with modular monolith architecture", "1122 tests, ~89% coverage (Vitest + Supertest)", "JWT + TOTP 2FA, granular RBAC, HMAC-SHA256 audit", "Multi-tenant SaaS, i18n 4 languages, email/SMS/WhatsApp notifications"],
      ["Real-time dashboard with Leaflet map and Recharts charts", "Automatic alert engine with duplicate prevention (15 min)", "Multi-channel notifications: Email (Nodemailer) + WhatsApp (Twilio)", "Admin/user roles, JWT, rate limiting, mock API for development"],
      ["Hexagonal architecture with domain/application/infra separation", "Multi-tenancy with per-company isolation (10 tables)", "RBAC 3 roles, lockout on failed attempts, JWT + bcrypt", "Monitoring stack: Prometheus + Grafana + Pino logging"],
      ["Real-time GPS tracking with Leaflet map and geofence alerts", "Multi-tenant fleet management: clients, drivers, trucks and trips", "Route and GPS position simulation engine (ignition, fuel, speed)", "Invoicing, JWT + refresh authentication and RBAC roles (superadmin/admin/driver)"],
      ["Interactive CLI with Commander + Inquirer", "Handlebars templates for customization", "Generates projects with multi-stage Docker + CI/CD", "Optional JWT authentication, tests included"],
    ],
    skillCategories: { Lenguajes: "Languages", Backend: "Backend", Frontend: "Frontend", DevOps: "DevOps", "Bases de Datos": "Databases", Testing: "Testing", Seguridad: "Security" },
    skillNames: {},
  },
}
