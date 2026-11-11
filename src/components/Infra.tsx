"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Cloud, Server, Rocket, Github, Database, Layers, ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/lib/LanguageProvider"
import { projects, suite } from "@/lib/data"

const INK = "#1a1b21"
const MUTED = "#44474e"
const SOFT = "#74777f"
const PRIMARY = "#581cff"
const PRIMARY_TINT = "rgba(88,28,255,0.08)"
const PRIMARY_SOFT = "rgba(88,28,255,0.04)"
const EDGE_STROKE = "rgba(88,28,255,0.35)"
const EDGE_TAG = "rgba(88,28,255,0.30)"
const COMPUTE_TAG = "rgba(26,27,33,0.40)"
const EXTERNAL_FILL = "rgba(68,71,78,0.08)"
const EXTERNAL_TAG = "rgba(116,119,127,0.45)"
const RULE = "rgba(26,27,33,0.14)"
const PAPER = "#f8f9ff"
const MONO = "'JetBrains Mono', monospace"
const SANS = "'Montserrat', sans-serif"
const NUM_GRAY = "rgba(26,27,33,0.07)"
const NUM_PRIMARY = "rgba(88,28,255,0.12)"

type NodeTone = "edge" | "compute" | "focal" | "external" | "store"

function DiagramNode({
  x,
  y,
  width,
  height,
  num,
  tag,
  title,
  meta,
  tone = "compute",
  metaSize = 8,
}: {
  x: number
  y: number
  width: number
  height: number
  num?: string
  tag: string
  title: string
  meta: string
  tone?: NodeTone
  metaSize?: number
}) {
  const palette: Record<NodeTone, { fill: string; stroke: string; tagStroke: string; num: string }> = {
    edge: { fill: PRIMARY_SOFT, stroke: EDGE_STROKE, tagStroke: EDGE_TAG, num: NUM_GRAY },
    compute: { fill: "#ffffff", stroke: INK, tagStroke: COMPUTE_TAG, num: NUM_GRAY },
    focal: { fill: PRIMARY_TINT, stroke: PRIMARY, tagStroke: "rgba(88,28,255,0.50)", num: NUM_PRIMARY },
    external: { fill: EXTERNAL_FILL, stroke: SOFT, tagStroke: EXTERNAL_TAG, num: NUM_GRAY },
    store: { fill: PRIMARY_TINT, stroke: EDGE_STROKE, tagStroke: EDGE_TAG, num: NUM_PRIMARY },
  }

  const p = palette[tone]

  return (
    <>
      <rect x={x} y={y} width={width} height={height} rx={6} fill={PAPER} />
      <rect x={x} y={y} width={width} height={height} rx={6} fill={p.fill} stroke={p.stroke} strokeWidth={1} />
      <rect x={x + 8} y={y + 8} width={32} height={12} rx={2} fill="transparent" stroke={p.tagStroke} strokeWidth={0.8} />
      <text
        x={x + 24}
        y={y + 17}
        fill={tone === "focal" ? PRIMARY : SOFT}
        fontSize={7}
        fontFamily={MONO}
        textAnchor="middle"
        letterSpacing="0.08em"
      >
        {tag}
      </text>
      {num && (
        <text x={x + width - 8} y={y + height - 8} fill={p.num} fontSize={30} fontWeight={600} fontFamily={MONO} textAnchor="end">
          {num}
        </text>
      )}
      <text x={x + width / 2} y={y + 36} fill={INK} fontSize={12} fontWeight={600} fontFamily={SANS} textAnchor="middle">
        {title}
      </text>
      <text x={x + width / 2} y={y + 52} fill={MUTED} fontSize={metaSize} fontFamily={MONO} textAnchor="middle">
        {meta}
      </text>
    </>
  )
}

function Tag({ x, y, w, text, fill = PRIMARY }: { x: number; y: number; w: number; text: string; fill?: string }) {
  return (
    <>
      <rect x={x} y={y} width={w} height={12} rx={2} fill={PAPER} />
      <text x={x + w / 2} y={y + 9} fill={fill} fontSize={8} fontFamily={MONO} textAnchor="middle" letterSpacing="0.08em">
        {text}
      </text>
    </>
  )
}

interface ProviderItem {
  label: string
  meta?: string
  github?: string
  link?: string
  focal?: boolean
}

interface Provider {
  name: string
  tag: string
  desc: string
  icon: React.ComponentType<{ size?: number | string; className?: string }>
  items: ProviderItem[]
}

const HOST_SERVICES = [
  { name: "Core AMG", meta: "nativo · :3108 · sso · billing", accent: true },
  { name: "MiniSaaS · 9 apps", meta: "nativo · :3004 · :3020-27" },
  { name: "TallerPro", meta: "api :3002 · web :3043 · pg :5434" },
  { name: "AgroBot", meta: "docker · :5173 · :3000 · mysql" },
  { name: "ML", meta: "nativo · :3001" },
]

const SAAS_PRODUCTS = [
  { name: "crm", port: ":3020" },
  { name: "citas", port: ":3021" },
  { name: "espacios", port: ":3022" },
  { name: "solicitudes", port: ":3023" },
  { name: "pagos", port: ":3024" },
  { name: "inventario", port: ":3025" },
  { name: "checklists", port: ":3026" },
  { name: "activos", port: ":3027" },
  { name: "cotizaciones", port: ":3004" },
]

const suiteHost = (slug: string) => {
  const url = `https://${slug}.amgdeveloper.cl`
  return { label: `${slug}.amgdeveloper.cl`, meta: "HTTPS", link: url }
}

export default function Infra() {
  const { t } = useLanguage()
  const [view, setView] = useState<"ecosystem" | "saas">("ecosystem")

  const TABS = [
    { id: "ecosystem", label: t.infra.toggle.ecosystem, Icon: Server },
    { id: "saas", label: t.infra.toggle.saas, Icon: Layers },
  ] as const

  const ecosystemProviders: Provider[] = [
    {
      name: t.infra.cloudflare.name,
      tag: t.infra.cloudflare.tag,
      desc: t.infra.cloudflare.desc,
      icon: Cloud,
      items: [
        { label: "Proxy · WAF · DNS", meta: "edge global" },
        { label: "amgdeveloper.cl", meta: "HTTPS", link: "https://amgdeveloper.cl", focal: true },
        { label: "Cloudflare Tunnel", meta: "cloudflared · quic" },
        { label: "portafolio.amgdeveloper.cl", meta: "pages · estático", link: "https://portafolio.amgdeveloper.cl" },
      ],
    },
    {
      name: t.infra.host.name,
      tag: t.infra.host.tag,
      desc: t.infra.host.desc,
      icon: Server,
      items: [
        { label: "Core AMG · SSO", meta: "nativo · :3108", github: suite.github, focal: true },
        { label: "MiniSaaS · 9 apps", meta: ":3004 · :3020-27", github: suite.github },
        { label: "TallerPro", meta: "docker · :3002-3043", github: projects[2].github },
        { label: "AgroBot", meta: "docker · :5173-3307", github: projects[1].github },
      ],
    },
    {
      name: t.infra.render.name,
      tag: t.infra.render.tag,
      desc: t.infra.render.desc,
      icon: Rocket,
      items: [
        { label: "Vitaria", meta: "api · web estática", github: projects[0].github },
        { label: "clinica-salud-vital", meta: "onrender.com", link: projects[0].demo },
        { label: "Postgres · AMG Host", meta: ":5432 · privado" },
      ],
    },
  ]

  const saasProviders: Provider[] = [
    {
      name: t.infra.saas.cloudflare.name,
      tag: t.infra.saas.cloudflare.tag,
      desc: t.infra.saas.cloudflare.desc,
      icon: Cloud,
      items: [
        { label: "Proxy · WAF · DNS", meta: "edge global" },
        { label: "amgdeveloper.cl", meta: "core · HTTPS", link: suite.url, focal: true },
        suiteHost("citas"),
        suiteHost("crm"),
      ],
    },
    {
      name: t.infra.saas.host.name,
      tag: t.infra.saas.host.tag,
      desc: t.infra.saas.host.desc,
      icon: Server,
      items: [
        { label: "Core AMG · SSO", meta: ":3108 · nativo", github: suite.github, focal: true },
        { label: "9 productos", meta: ":3004 · :3020-27", github: suite.github },
        { label: "npm workspaces", meta: "monorepo nativo" },
      ],
    },
    {
      name: t.infra.saas.sqlite.name,
      tag: t.infra.saas.sqlite.tag,
      desc: t.infra.saas.sqlite.desc,
      icon: Database,
      items: [
        { label: "core.sqlite", meta: "identidad · wal" },
        { label: "data/<slug>.sqlite", meta: "1 DB por app" },
        { label: "sin servicio", meta: "embebida" },
      ],
    },
  ]

  const renderProviders = (providers: Provider[]) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {providers.map((p, idx) => {
        const Icon = p.icon
        return (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="glass-card p-5 rounded-2xl hover:border-primary/40 transition-colors duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary-container p-2.5 rounded-lg">
                <Icon size={18} className="text-primary" />
              </div>
              <div>
                <h3 className="font-sans font-semibold text-on-surface text-sm leading-none">{p.name}</h3>
                <p className="font-mono text-[9px] text-primary tracking-wider uppercase mt-1">{p.tag}</p>
              </div>
            </div>
            <p className="font-body text-xs text-on-surface-variant leading-relaxed mb-4">{p.desc}</p>
            <ul className="flex flex-col">
              {p.items.map((it) => (
                <li
                  key={it.label}
                  className={`flex items-center justify-between gap-2 py-2 border-b border-outline/10 last:border-0 ${
                    it.focal ? "bg-primary-container/50 rounded-md px-1 -mx-1" : ""
                  }`}
                >
                  <span className="flex items-center gap-1.5 min-w-0">
                    {it.github && (
                      <a
                        href={it.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`GitHub · ${it.label}`}
                        className="text-outline hover:text-primary transition-colors duration-200 shrink-0"
                      >
                        <Github size={12} />
                      </a>
                    )}
                    {!it.github && it.link && (
                      <a
                        href={it.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Link · ${it.label}`}
                        className="text-outline hover:text-primary transition-colors duration-200 shrink-0"
                      >
                        <ArrowUpRight size={12} />
                      </a>
                    )}
                    <span
                      className={`font-mono text-[10px] truncate ${
                        it.focal ? "text-primary font-semibold" : "text-on-surface-variant"
                      }`}
                    >
                      {it.label}
                    </span>
                  </span>
                  {it.meta && (
                    <span className="font-mono text-[9px] text-outline shrink-0">{it.meta}</span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )
      })}
    </div>
  )

  const viewTransition = { duration: 0.35, ease: "easeOut" as const }

  return (
    <section
      id="infra"
      className="relative w-full h-full flex items-start justify-center overflow-y-auto pt-[61px] md:pt-[69px]"
    >
      <div className="max-w-5xl mx-auto px-8 md:px-0 py-4 md:py-8 w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-12 h-[1px] bg-primary" />
          <p className="font-mono text-xs text-primary tracking-widest uppercase font-bold">
            {t.infra.subtitle}
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <h2 className="font-sans text-[32px] md:text-[48px] font-semibold text-on-surface leading-tight">
            {t.infra.title}
          </h2>
          <div className="relative glass-panel rounded-full p-1 inline-flex items-center select-none">
            {TABS.map(({ id, label, Icon }) => {
              const active = view === id
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setView(id)}
                  aria-pressed={active}
                  className={`relative flex-1 rounded-full px-6 md:px-8 py-2.5 flex items-center justify-center gap-2 font-mono text-[11px] tracking-widest uppercase transition-colors duration-300 cursor-pointer whitespace-nowrap ${
                    active ? "text-on-primary font-bold" : "text-outline hover:text-primary"
                  }`}
                >
                  {active && (
                    <motion.div
                      layoutId="infra-view-pill"
                      className="absolute inset-0 rounded-full pill-gradient"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <Icon size={14} className="relative z-10" />
                  <span className="relative z-10">{label}</span>
                </button>
              )
            })}
          </div>
        </div>
        <p className="font-body text-[15px] md:text-base text-on-surface-variant max-w-2xl mb-8 leading-relaxed">
          {view === "saas" ? t.infra.saas.description : t.infra.description}
        </p>

        <AnimatePresence mode="wait">
          {view === "ecosystem" ? (
            <motion.div
              key="ecosystem"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={viewTransition}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-12 h-[1px] bg-primary" />
                <p className="font-mono text-xs text-primary tracking-widest uppercase font-bold">
                  {t.infra.topology}
                </p>
              </div>
              <div className="rounded-2xl bg-surface-container-lowest border border-outline-variant p-4 md:p-5 overflow-x-auto">
                <svg
                  viewBox="0 0 1000 576"
                  className="w-full min-w-[900px] block"
                  role="img"
                  aria-labelledby="eco-topology-title eco-topology-desc"
                >
                  <title id="eco-topology-title">Topología del ecosistema AMG</title>
                  <desc id="eco-topology-desc">
                    Cloudflare enruta el tráfico por un túnel hacia el AMG Host local con Core AMG, MiniSaaS, TallerPro, AgroBot y ML; Vitaria corre en Render y conecta SSO y Postgres :5432 con el host; el portafolio se sirve desde Cloudflare Pages.
                  </desc>
                  <defs>
                    <pattern id="eco-dots" width={22} height={22} patternUnits="userSpaceOnUse">
                      <circle cx={1} cy={1} r={0.9} fill="rgba(88,28,255,0.08)" />
                    </pattern>
                    <marker id="eco-ap" markerWidth={8} markerHeight={6} refX={7} refY={3} orient="auto">
                      <polygon points="0 0, 8 3, 0 6" fill={PRIMARY} />
                    </marker>
                    <marker id="eco-am" markerWidth={8} markerHeight={6} refX={7} refY={3} orient="auto">
                      <polygon points="0 0, 8 3, 0 6" fill={MUTED} />
                    </marker>
                  </defs>

                  <rect width="100%" height="100%" fill={PAPER} />
                  <rect width="100%" height="100%" fill="url(#eco-dots)" opacity={0.5} />

                  {/* Container: AMG Host */}
                  <rect x={620} y={40} width={340} height={440} rx={8} fill={PRIMARY_SOFT} stroke={PRIMARY} strokeWidth={1.2} />
                  <rect x={628} y={48} width={36} height={12} rx={2} fill="transparent" stroke="rgba(88,28,255,0.50)" strokeWidth={0.8} />
                  <text x={646} y={57} fill={PRIMARY} fontSize={7} fontFamily={MONO} textAnchor="middle" letterSpacing="0.08em">
                    HOST
                  </text>
                  <text x={790} y={76} fill={INK} fontSize={12} fontWeight={600} fontFamily={SANS} textAnchor="middle">
                    AMG Host
                  </text>
                  <text x={790} y={92} fill={MUTED} fontSize={8} fontFamily={MONO} textAnchor="middle">
                    windows · nativo + docker
                  </text>

                  {/* Annotation: firewall */}
                  <rect x={472} y={160} width={116} height={64} rx={4} fill={PRIMARY_SOFT} stroke={SOFT} strokeWidth={0.8} strokeDasharray="5,3" />
                  <text x={484} y={176} fill={SOFT} fontSize={6} fontFamily={MONO} letterSpacing="0.14em">
                    FIREWALL
                  </text>
                  <text x={484} y={196} fill={MUTED} fontSize={8} fontFamily={MONO}>
                    :5432 · solo render
                  </text>
                  <text x={484} y={212} fill={MUTED} fontSize={8} fontFamily={MONO}>
                    resto vía tunnel
                  </text>

                  {/* Arrows behind boxes */}
                  <line x1={144} y1={180} x2={196} y2={180} stroke={PRIMARY} strokeWidth={1.2} markerEnd="url(#eco-ap)" />
                  <path d="M 330,140 V 100 Q 330,92 338,92 H 452" fill="none" stroke={PRIMARY} strokeWidth={1.2} markerEnd="url(#eco-ap)" />
                  <line x1={592} y1={92} x2={620} y2={92} stroke={PRIMARY} strokeWidth={1.2} markerEnd="url(#eco-ap)" />
                  <path d="M 240,220 V 300 Q 240,308 248,308 H 372 Q 380,308 380,316" fill="none" stroke={PRIMARY} strokeWidth={1.2} markerEnd="url(#eco-ap)" />
                  <line x1={92} y1={212} x2={92} y2={316} stroke={PRIMARY} strokeWidth={1.2} markerEnd="url(#eco-ap)" />
                  <line x1={124} y1={380} x2={124} y2={412} stroke={MUTED} strokeWidth={1.2} markerEnd="url(#eco-am)" />
                  <line x1={208} y1={444} x2={636} y2={444} stroke={PRIMARY} strokeWidth={1.4} markerEnd="url(#eco-ap)" />
                  <path
                    d="M 208,424 H 588 Q 596,424 596,416 V 144 Q 596,136 604,136 H 636"
                    fill="none"
                    stroke={MUTED}
                    strokeWidth={1}
                    strokeDasharray="4,3"
                    markerEnd="url(#eco-am)"
                  />

                  {/* Arrow labels */}
                  <Tag x={146} y={161} w={48} text="HTTPS" />
                  <Tag x={357} y={73} w={76} text="HTTPS · :443" />
                  <Tag x={286} y={289} w={48} text="HTTPS" />
                  <Tag x={100} y={258} w={72} text="HTTPS · :443" />
                  <Tag x={378} y={451} w={88} text="PGSQL · :5432" />
                  <Tag x={338} y={405} w={84} text="SSO · OAUTH2" fill={MUTED} />

                  {/* Nodes */}
                  <DiagramNode x={40} y={148} width={104} height={64} num="01" tag="USR" title="Clientes" meta="Browser · App" tone="external" />
                  <DiagramNode x={196} y={140} width={184} height={80} num="02" tag="EDGE" title="Cloudflare" meta="dns · waf · proxy" tone="edge" />
                  <DiagramNode x={452} y={60} width={140} height={64} num="03" tag="TUN" title="Tunnel" meta="cloudflared · quic" tone="edge" />
                  <DiagramNode x={280} y={316} width={200} height={64} num="04" tag="PAG" title="Cloudflare Pages" meta="portafolio · estático" tone="edge" />
                  <DiagramNode x={40} y={316} width={168} height={64} num="05" tag="PAAS" title="Render" meta="vitaria · oregon" tone="edge" />
                  <DiagramNode x={40} y={412} width={168} height={64} num="06" tag="APP" title="Vitaria" meta="react · express" tone="compute" />

                  {/* Host chips */}
                  {HOST_SERVICES.map((svc, i) => (
                    <g key={svc.name}>
                      <rect
                        x={636}
                        y={116 + i * 52}
                        width={308}
                        height={40}
                        rx={4}
                        fill="#ffffff"
                        stroke={svc.accent ? "rgba(88,28,255,0.45)" : "rgba(26,27,33,0.15)"}
                        strokeWidth={0.8}
                      />
                      <text x={650} y={133 + i * 52} fill={INK} fontSize={11} fontWeight={600} fontFamily={SANS}>
                        {svc.name}
                      </text>
                      <text x={650} y={147 + i * 52} fill={SOFT} fontSize={7.5} fontFamily={MONO}>
                        {svc.meta}
                      </text>
                    </g>
                  ))}
                  <rect x={636} y={380} width={308} height={28} rx={4} fill={PAPER} fillOpacity={0.6} stroke={SOFT} strokeWidth={0.8} strokeDasharray="4,3" />
                  <text x={650} y={398} fill={SOFT} fontSize={7.5} fontFamily={MONO}>
                    redirects :3099 · docs · recordatorios
                  </text>
                  <rect x={636} y={424} width={308} height={40} rx={4} fill={PRIMARY_TINT} stroke={EDGE_STROKE} strokeWidth={1} />
                  <text x={650} y={441} fill={INK} fontSize={11} fontWeight={600} fontFamily={SANS}>
                    PostgreSQL
                  </text>
                  <text x={650} y={455} fill={SOFT} fontSize={7.5} fontFamily={MONO}>
                    host :5432 · docker :5434
                  </text>

                  {/* Legend */}
                  <line x1={40} y1={512} x2={960} y2={512} stroke={RULE} strokeWidth={0.8} />
                  <text x={40} y={528} fill={MUTED} fontSize={8} fontFamily={MONO} letterSpacing="0.18em">
                    LEGEND
                  </text>

                  <rect x={40} y={540} width={14} height={10} rx={2} fill={PRIMARY_SOFT} stroke={PRIMARY} strokeWidth={1} />
                  <text x={60} y={552} fill={MUTED} fontSize={8.5} fontFamily={SANS}>
                    {t.infra.legend.focal}
                  </text>

                  <rect x={150} y={540} width={14} height={10} rx={2} fill={PRIMARY_SOFT} stroke={EDGE_STROKE} strokeWidth={1} />
                  <text x={170} y={552} fill={MUTED} fontSize={8.5} fontFamily={SANS}>
                    {t.infra.legend.edge}
                  </text>

                  <rect x={260} y={540} width={14} height={10} rx={2} fill={EXTERNAL_FILL} stroke={SOFT} strokeWidth={1} />
                  <text x={280} y={552} fill={MUTED} fontSize={8.5} fontFamily={SANS}>
                    {t.infra.legend.external}
                  </text>

                  <rect x={390} y={540} width={14} height={10} rx={2} fill={PRIMARY_TINT} stroke={EDGE_STROKE} strokeWidth={1} />
                  <text x={410} y={552} fill={MUTED} fontSize={8.5} fontFamily={SANS}>
                    {t.infra.legend.store}
                  </text>

                  <line x1={520} y1={546} x2={548} y2={546} stroke={PRIMARY} strokeWidth={1.2} markerEnd="url(#eco-ap)" />
                  <text x={556} y={552} fill={MUTED} fontSize={8.5} fontFamily={SANS}>
                    {t.infra.legend.https}
                  </text>

                  <line x1={650} y1={546} x2={678} y2={546} stroke={MUTED} strokeWidth={1} strokeDasharray="4,3" markerEnd="url(#eco-am)" />
                  <text x={686} y={552} fill={MUTED} fontSize={8.5} fontFamily={SANS}>
                    {t.infra.legend.sso}
                  </text>

                  <line x1={790} y1={546} x2={818} y2={546} stroke={PRIMARY} strokeWidth={1.4} markerEnd="url(#eco-ap)" />
                  <text x={826} y={552} fill={MUTED} fontSize={8.5} fontFamily={SANS}>
                    {t.infra.legend.pgsql}
                  </text>
                </svg>
              </div>

              <div className="flex items-center gap-3 my-8">
                <span className="w-12 h-[1px] bg-primary" />
                <p className="font-mono text-xs text-primary tracking-widest uppercase font-bold">
                  {t.infra.providers}
                </p>
              </div>
              {renderProviders(ecosystemProviders)}
            </motion.div>
          ) : (
            <motion.div
              key="saas"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={viewTransition}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-12 h-[1px] bg-primary" />
                <p className="font-mono text-xs text-primary tracking-widest uppercase font-bold">
                  {t.infra.saas.topology}
                </p>
              </div>
              <div className="rounded-2xl bg-surface-container-lowest border border-outline-variant p-4 md:p-5 overflow-x-auto">
                <svg
                  viewBox="0 0 1000 576"
                  className="w-full min-w-[900px] block"
                  role="img"
                  aria-labelledby="saas-topology-title saas-topology-desc"
                >
                  <title id="saas-topology-title">Topología MiniSaaS</title>
                  <desc id="saas-topology-desc">
                    Cloudflare enruta el dominio al Core AMG en :3108, que centraliza SSO y checkout con MercadoPago y Stripe; los 9 productos del MiniSaaS corren nativos en el host y cada uno persiste en su base SQLite.
                  </desc>
                  <defs>
                    <marker id="saas-ap" markerWidth={8} markerHeight={6} refX={7} refY={3} orient="auto">
                      <polygon points="0 0, 8 3, 0 6" fill={PRIMARY} />
                    </marker>
                    <marker id="saas-am" markerWidth={8} markerHeight={6} refX={7} refY={3} orient="auto">
                      <polygon points="0 0, 8 3, 0 6" fill={MUTED} />
                    </marker>
                  </defs>

                  <rect width="100%" height="100%" fill={PAPER} />

                  {/* Container: MiniSaaS */}
                  <rect x={576} y={56} width={380} height={272} rx={8} fill="#ffffff" stroke={INK} strokeWidth={1} />
                  <rect x={584} y={64} width={40} height={12} rx={2} fill="transparent" stroke={COMPUTE_TAG} strokeWidth={0.8} />
                  <text x={604} y={73} fill={SOFT} fontSize={7} fontFamily={MONO} textAnchor="middle" letterSpacing="0.08em">
                    SAAS
                  </text>
                  <text x={766} y={92} fill={INK} fontSize={12} fontWeight={600} fontFamily={SANS} textAnchor="middle">
                    MiniSaaS
                  </text>
                  <text x={766} y={108} fill={MUTED} fontSize={8} fontFamily={MONO} textAnchor="middle">
                    08_SaaS_Mini · nativo
                  </text>
                  <text x={948} y={320} fill={NUM_GRAY} fontSize={30} fontWeight={600} fontFamily={MONO} textAnchor="end">
                    04
                  </text>

                  {/* Arrows behind boxes */}
                  <line x1={164} y1={80} x2={164} y2={176} stroke={PRIMARY} strokeWidth={1.2} markerEnd="url(#saas-ap)" />
                  <path d="M 252,216 H 280 Q 288,216 288,208 V 136 Q 288,128 296,128 H 316" fill="none" stroke={PRIMARY} strokeWidth={1.2} markerEnd="url(#saas-ap)" />
                  <line x1={500} y1={128} x2={576} y2={128} stroke={MUTED} strokeWidth={1} strokeDasharray="4,3" markerEnd="url(#saas-am)" />
                  <line x1={408} y1={176} x2={408} y2={244} stroke={MUTED} strokeWidth={1.2} markerEnd="url(#saas-am)" />
                  <path
                    d="M 500,276 H 524 Q 532,276 532,268 V 168 Q 532,160 524,160 H 500"
                    fill="none"
                    stroke={MUTED}
                    strokeWidth={1}
                    strokeDasharray="4,3"
                    markerEnd="url(#saas-am)"
                  />
                  <line x1={766} y1={328} x2={766} y2={364} stroke={PRIMARY} strokeWidth={1.4} markerEnd="url(#saas-ap)" />

                  {/* Arrow labels */}
                  <Tag x={128} y={122} w={72} text="HTTPS · :443" />
                  <Tag x={232} y={160} w={48} text="HTTPS" />
                  <Tag x={514} y={109} w={48} text="SSO" fill={MUTED} />
                  <Tag x={416} y={204} w={72} text="CHECKOUT" fill={MUTED} />
                  <Tag x={444} y={208} w={76} text="WEBHOOK · MP" fill={MUTED} />
                  <Tag x={774} y={340} w={88} text="1 DB · POR APP" />

                  {/* Nodes */}
                  <DiagramNode x={116} y={16} width={96} height={64} num="01" tag="USR" title="Clientes" meta="Browser · App" tone="external" />
                  <DiagramNode x={60} y={176} width={192} height={80} num="02" tag="EDGE" title="Cloudflare" meta="dns · waf · cloudflared" tone="edge" />
                  <DiagramNode x={316} y={80} width={184} height={96} num="03" tag="CORE" title="Core AMG" meta="12_AmgPlatform · :3108" tone="focal" />
                  <text x={408} y={148} fill={MUTED} fontSize={8} fontFamily={MONO} textAnchor="middle">
                    sso · billing · landing
                  </text>
                  <DiagramNode x={316} y={244} width={184} height={64} num="05" tag="PAY" title="MercadoPago · Stripe" meta="checkout · webhooks" tone="external" />
                  <DiagramNode x={576} y={364} width={380} height={88} num="06" tag="DB" title="SQLite" meta="data/<slug>.sqlite · wal" tone="store" />
                  <text x={766} y={434} fill={SOFT} fontSize={7.5} fontFamily={MONO} textAnchor="middle">
                    + core.sqlite en el Core
                  </text>

                  {/* Product chips */}
                  {SAAS_PRODUCTS.map((chip, i) => {
                    const col = i < 5 ? 0 : 1
                    const row = i < 5 ? i : i - 5
                    const cx = col === 0 ? 588 : 776
                    const cy = 124 + row * 40
                    return (
                      <g key={chip.name}>
                        <rect x={cx} y={cy} width={172} height={32} rx={3} fill="rgba(26,27,33,0.04)" stroke="rgba(26,27,33,0.15)" strokeWidth={0.8} />
                        <text x={cx + 12} y={cy + 20} fill={INK} fontSize={10.5} fontWeight={600} fontFamily={SANS}>
                          {chip.name}
                        </text>
                        <text x={cx + 160} y={cy + 21} fill={SOFT} fontSize={8} fontFamily={MONO} textAnchor="end">
                          {chip.port}
                        </text>
                      </g>
                    )
                  })}

                  {/* Legend */}
                  <line x1={40} y1={512} x2={960} y2={512} stroke={RULE} strokeWidth={0.8} />
                  <text x={40} y={528} fill={MUTED} fontSize={8} fontFamily={MONO} letterSpacing="0.18em">
                    LEGEND
                  </text>

                  <rect x={40} y={540} width={14} height={10} rx={2} fill={PRIMARY_TINT} stroke={PRIMARY} strokeWidth={1} />
                  <text x={60} y={552} fill={MUTED} fontSize={8.5} fontFamily={SANS}>
                    {t.infra.saas.legend.focal}
                  </text>

                  <rect x={150} y={540} width={14} height={10} rx={2} fill={PRIMARY_SOFT} stroke={EDGE_STROKE} strokeWidth={1} />
                  <text x={170} y={552} fill={MUTED} fontSize={8.5} fontFamily={SANS}>
                    {t.infra.saas.legend.edge}
                  </text>

                  <rect x={260} y={540} width={14} height={10} rx={2} fill={EXTERNAL_FILL} stroke={SOFT} strokeWidth={1} />
                  <text x={280} y={552} fill={MUTED} fontSize={8.5} fontFamily={SANS}>
                    {t.infra.saas.legend.external}
                  </text>

                  <rect x={390} y={540} width={14} height={10} rx={2} fill={PRIMARY_TINT} stroke={EDGE_STROKE} strokeWidth={1} />
                  <text x={410} y={552} fill={MUTED} fontSize={8.5} fontFamily={SANS}>
                    {t.infra.saas.legend.store}
                  </text>

                  <line x1={520} y1={546} x2={548} y2={546} stroke={PRIMARY} strokeWidth={1.2} markerEnd="url(#saas-ap)" />
                  <text x={556} y={552} fill={MUTED} fontSize={8.5} fontFamily={SANS}>
                    {t.infra.saas.legend.https}
                  </text>

                  <line x1={650} y1={546} x2={678} y2={546} stroke={MUTED} strokeWidth={1} strokeDasharray="4,3" markerEnd="url(#saas-am)" />
                  <text x={686} y={552} fill={MUTED} fontSize={8.5} fontFamily={SANS}>
                    {t.infra.saas.legend.sso}
                  </text>

                  <line x1={790} y1={546} x2={818} y2={546} stroke={PRIMARY} strokeWidth={1.4} markerEnd="url(#saas-ap)" />
                  <text x={826} y={552} fill={MUTED} fontSize={8.5} fontFamily={SANS}>
                    {t.infra.saas.legend.sql}
                  </text>
                </svg>
              </div>

              <div className="flex items-center gap-3 my-8">
                <span className="w-12 h-[1px] bg-primary" />
                <p className="font-mono text-xs text-primary tracking-widest uppercase font-bold">
                  {t.infra.providers}
                </p>
              </div>
              {renderProviders(saasProviders)}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
