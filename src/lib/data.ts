export const personalInfo = {
  name: "Alejandro Muñoz Garay",
  title: "Ingeniero Civil en Informática",
  tagline: "Full-Stack Developer | DevOps | ML",
  email: "muñozgarayalejandro@gmail.com",
  phone: "+56 9 5381 8617",
  location: "San Pablo, Santiago, Chile",
  linkedin: "https://linkedin.com/in/alejandro-munoz-garay-668324347",
  github: "https://github.com/bentlyy",
  about: [
    "Ingeniero Civil en Informática de la Universidad Adventista de Chile (2024). Apasionado por construir sistemas completos — desde el backend hasta el despliegue en la nube — con código limpio, escalable y bien documentado.",
    "Tengo experiencia desarrollando plataformas IoT, sistemas clínicos, gestores multi-tenant para talleres mecánicos y portafolios de Machine Learning. Manejo TypeScript, Node.js, React, Docker, PostgreSQL y AWS.",
    "Me motiva resolver problemas reales con tecnología, automatizar procesos y generar valor a través del análisis de datos. Busco un entorno desafiante donde pueda seguir aprendiendo y aportando desde el día uno.",
  ],
}

export const experience = [
  {
    role: "Desarrollador Full-Stack — Plataforma IoT",
    company: "Geotrace (Proyecto INIA)",
    period: "Jun 2024 - Nov 2024",
    description: "Trabajo Final de Carrera. Construcción de plataforma IoT full-stack con monitoreo en tiempo real para 20-50 sensores agrícolas.",
    highlights: [
      "Backend en Node.js/TypeScript con MySQL, dashboards en Grafana y Power BI",
      "Alertas automatizadas vía WhatsApp (Twilio) y Email (Nodemailer), reduciendo tiempo de respuesta ~20-25%",
      "Arquitectura containerizada con Docker + patrones de orquestación Kubernetes en AWS",
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
    title: "AgroBot-Alert",
    description: "Plataforma IoT full-stack para monitoreo agrícola en tiempo real. Recibe datos de sensores vía API Wialon, los evalúa contra criterios configurables y genera alertas automáticas multicanal.",
    tech: ["React 18", "Node.js", "TypeScript", "MySQL", "Docker", "Prometheus", "Grafana", "Twilio", "Leaflet"],
    github: "https://github.com/bentlyy/agrobot-alert",
    demo: "",
    image: "/images/agrobot.png",
    features: [
      "Dashboard en tiempo real con mapa interactivo, gráficos y panel de alertas",
      "Motor de alertas automáticas con prevención de duplicados (ventana de 15 min)",
      "Autenticación JWT, roles admin/user, rate limiting",
      "Motor de alertas con criterios configurables y escalamiento por criticidad",
    ],
  },
  {
    title: "Clínica Salud Vital",
    description: "Sistema de gestión clínica full-stack con 16 módulos: booking, facturación, laboratorio, historia clínica electrónica, ML predictivo, multi-tenencia y notificaciones multicanal.",
    tech: ["React 19", "Node.js", "TypeScript", "PostgreSQL", "TensorFlow.js", "Docker", "CI/CD"],
    github: "https://github.com/bentlyy/clinic-backendcopia",
    demo: "",
    image: "/images/clinic.png",
    features: [
      "16 módulos funcionales con arquitectura modular monolith",
      "4 modelos ML con TensorFlow.js: predicción de inasistencias, clasificación de diagnósticos, forecast de demanda, detección de anomalías",
      "Autenticación con 2FA (TOTP), refresh tokens, RBAC granular",
      "Multi-tenencia con 4 planes SaaS, webhooks con HMAC-SHA256, i18n en 4 idiomas",
    ],
  },
  {
    title: "TallerPro",
    description: "Sistema multi-tenant para gestión de talleres mecánicos. Administra clientes, vehículos, órdenes de reparación, inventario de piezas, facturación y roles con monitoreo Prometheus.",
    tech: ["React 18", "Node.js", "TypeScript", "PostgreSQL", "Prisma", "Docker", "Prometheus", "Grafana"],
    github: "https://github.com/bentlyy/TallerMecanico",
    demo: "",
    image: "/images/tallerpro.png",
    features: [
      "Multi-tenencia con aislamiento completo de datos por empresa",
      "Flujo de reparaciones con validación de transiciones y descuento automático de stock",
      "RBAC con 3 roles (ADMIN, RECEPCIONISTA, MECANICO) y bloqueo tras 5 intentos fallidos",
      "Stack de monitoreo: Prometheus + Grafana + Pino logging estructurado",
    ],
  },
  {
    title: "ML-Portafolio",
    description: "Plataforma interactiva de Machine Learning con 12 modelos en 4 categorías. Sube datasets CSV, configura hiperparámetros, entrena modelos y obtén predicciones en tiempo real.",
    tech: ["React 19", "FastAPI", "Python", "scikit-learn", "Docker", "TypeScript"],
    github: "https://github.com/bentlyy/ml-portafolio",
    demo: "",
    image: "/images/ml-portfolio.png",
    features: [
      "12 modelos ML: clasificación, regresión, clustering y redes neuronales (MLP)",
      "Arquitectura 3-capas: Frontend React → Backend Express → ML Service FastAPI",
      "Carga de datasets CSV con preview, análisis de columnas y detección de valores faltantes",
      "Métricas en tiempo real: accuracy, precision, recall, F1, MSE, R², silhouette score",
    ],
  },
]

export const skills = {
  languages: [
    { name: "TypeScript", level: 90 },
    { name: "JavaScript", level: 90 },
    { name: "Python", level: 80 },
    { name: "SQL", level: 85 },
  ],
  backend: [
    { name: "Node.js", level: 90 },
    { name: "Express", level: 90 },
    { name: "REST APIs", level: 95 },
    { name: "JWT / OAuth", level: 85 },
  ],
  frontend: [
    { name: "React", level: 90 },
    { name: "Next.js", level: 70 },
    { name: "Tailwind CSS", level: 85 },
    { name: "TypeScript", level: 90 },
  ],
  "DevOps & Cloud": [
    { name: "Docker", level: 85 },
    { name: "Kubernetes", level: 60 },
    { name: "AWS", level: 70 },
    { name: "CI/CD", level: 80 },
  ],
  databases: [
    { name: "PostgreSQL", level: 85 },
    { name: "MySQL", level: 85 },
    { name: "Prisma ORM", level: 80 },
    { name: "Prometheus", level: 75 },
  ],
  tools: [
    { name: "Git", level: 90 },
    { name: "Linux", level: 85 },
    { name: "Ansible", level: 65 },
    { name: "Grafana", level: 75 },
  ],
}
