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

type NodeTone = "edge" | "compute" | "focal" | "external"

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
  num: string
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
      <text x={x + width - 8} y={y + height - 8} fill={p.num} fontSize={30} fontWeight={600} fontFamily={MONO} textAnchor="end">
        {num}
      </text>
      <text x={x + width / 2} y={y + 36} fill={INK} fontSize={12} fontWeight={600} fontFamily={SANS} textAnchor="middle">
        {title}
      </text>
      <text x={x + width / 2} y={y + 52} fill={MUTED} fontSize={metaSize} fontFamily={MONO} textAnchor="middle">
        {meta}
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

const SUITE_CHIPS: Array<{ name: string; port: string }> = [
  { name: "citas", port: ":3100" },
  { name: "espacios", port: ":3101" },
  { name: "solicitudes", port: ":3102" },
  { name: "inventario", port: ":3103" },
  { name: "cotizaciones", port: ":3104" },
  { name: "cmr", port: ":3105" },
  { name: "activos", port: ":3106" },
  { name: "checklists", port: ":3107" },
  { name: "pagos", port: ":3109" },
]

const suiteHost = (slug: string) => {
  const url = `https://${slug}.amgdeveloper.cl`
  return { label: `${slug}.amgdeveloper.cl`, meta: "HTTPS", link: url }
}

export default function Infra() {
  const { t } = useLanguage()
  const [view, setView] = useState<"prod" | "suite">("prod")

  const TABS = [
    { id: "prod", label: t.infra.toggle.prod, Icon: Server },
    { id: "suite", label: t.infra.toggle.suite, Icon: Layers },
  ] as const

  const prodProviders: Provider[] = [
    {
      name: t.infra.cloudflare.name,
      tag: t.infra.cloudflare.tag,
      desc: t.infra.cloudflare.desc,
      icon: Cloud,
      items: [
        { label: "Proxy · WAF · DNS", meta: "edge global" },
        { label: "amgdeveloper.cl", meta: "HTTPS" },
        { label: "agrobot.amgdeveloper.cl", meta: "HTTPS" },
        { label: "taller.amgdeveloper.cl", meta: "HTTPS" },
      ],
    },
    {
      name: t.infra.oracle.name,
      tag: t.infra.oracle.tag,
      desc: t.infra.oracle.desc,
      icon: Server,
      items: [
        { label: "Nginx Gateway", meta: ":80 · :443" },
        { label: "AgroBot", meta: "5173 · 3000 · 3306", github: projects[1].github },
        { label: "Taller Mec.", meta: "3002 · 3043 · 5433", github: projects[2].github },
        { label: "Transallendes", meta: "3004 · postgis", github: projects[3].github },
        { label: "Clinic DB", meta: "5432 · SSL", github: projects[0].github, focal: true },
      ],
    },
    {
      name: t.infra.render.name,
      tag: t.infra.render.tag,
      desc: t.infra.render.desc,
      icon: Rocket,
      items: [
        { label: "Vitaria", meta: "React · Express", github: projects[0].github },
        { label: "Postgres (Oracle)", meta: ":5432 · SSL" },
      ],
    },
  ]

  const suiteProviders: Provider[] = [
    {
      name: t.infra.suite.cloudflare.name,
      tag: t.infra.suite.cloudflare.tag,
      desc: t.infra.suite.cloudflare.desc,
      icon: Cloud,
      items: [
        { label: "Proxy · WAF · DNS", meta: "edge global" },
        { label: suite.url.replace("https://", ""), meta: "HTTPS", link: suite.url, focal: true },
        suiteHost("citas"),
        suiteHost("espacios"),
      ],
    },
    {
      name: t.infra.suite.oracle.name,
      tag: t.infra.suite.oracle.tag,
      desc: t.infra.suite.oracle.desc,
      icon: Server,
      items: [
        { label: "Suite AMG · 9 apps + core", meta: ":3100–:3109", github: suite.github, focal: true },
      ],
    },
    {
      name: t.infra.suite.sqlite.name,
      tag: t.infra.suite.sqlite.tag,
      desc: t.infra.suite.sqlite.desc,
      icon: Database,
      items: [
        { label: "saasmini_data", meta: "volumen Docker" },
        { label: "1 DB por producto", meta: "/app/data" },
        { label: "embebida · WAL", meta: "sin servicio" },
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
          {view === "suite" ? t.infra.suite.description : t.infra.description}
        </p>

        <AnimatePresence mode="wait">
          {view === "prod" ? (
            <motion.div
              key="prod"
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
                  aria-label="Cloudflare reparte tres dominios hacia Nginx en Oracle Cloud, cada stack Docker y la conexión de Render a clinic-db por el puerto 5432."
                >
                  <defs>
                    <pattern id="infra-dots" width="22" height="22" patternUnits="userSpaceOnUse">
                      <circle cx="1" cy="1" r="0.9" fill="rgba(88,28,255,0.08)" />
                    </pattern>
                    <marker id="arrow-p" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                      <polygon points="0 0, 8 3, 0 6" fill={PRIMARY} />
                    </marker>
                    <marker id="arrow-m" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                      <polygon points="0 0, 8 3, 0 6" fill={MUTED} />
                    </marker>
                  </defs>

                  <rect width="100%" height="100%" fill={PAPER} />
                  <rect width="100%" height="100%" fill="url(#infra-dots)" opacity="0.5" />

                  {/* Zone: Cloudflare */}
                  <rect x={176} y={96} width={224} height={160} rx={8} fill={PRIMARY_SOFT} stroke={RULE} strokeWidth={0.8} />
                  <rect x={218} y={100} width={140} height={12} rx={2} fill={PAPER} />
                  <text x={288} y={109} fill={SOFT} fontSize={7} fontFamily={MONO} textAnchor="middle" letterSpacing="0.14em">
                    CLOUDFLARE · EDGE
                  </text>

                  {/* Zone: Oracle Cloud */}
                  <rect x={440} y={80} width={524} height={416} rx={8} fill={PRIMARY_SOFT} stroke={RULE} strokeWidth={0.8} />
                  <rect x={448} y={84} width={264} height={12} rx={2} fill={PAPER} />
                  <text x={580} y={95} fill={SOFT} fontSize={7} fontFamily={MONO} textAnchor="middle" letterSpacing="0.12em">
                    ORACLE CLOUD · SA-SANTIAGO-1 · 146.181.55.59
                  </text>

                  {/* Annotation: firewall */}
                  <rect x={736} y={216} width={164} height={60} rx={4} fill={PRIMARY_SOFT} stroke={SOFT} strokeWidth={0.8} strokeDasharray="5,3" />
                  <text x={752} y={228} fill={SOFT} fontSize={6} fontFamily={MONO} letterSpacing="0.14em">
                    FIREWALL
                  </text>
                  <text x={752} y={244} fill={MUTED} fontSize={8} fontFamily={MONO}>
                    :22 · :80 · :443
                  </text>
                  <text x={752} y={258} fill={MUTED} fontSize={8} fontFamily={MONO}>
                    :5432 · solo Render
                  </text>

                  {/* Arrows behind boxes */}
                  <line x1={144} y1={180} x2={196} y2={180} stroke={PRIMARY} strokeWidth={1.2} markerEnd="url(#arrow-p)" />
                  <line x1={380} y1={180} x2={472} y2={180} stroke={PRIMARY} strokeWidth={1.2} markerEnd="url(#arrow-p)" />
                  <line x1={92} y1={212} x2={92} y2={424} stroke={PRIMARY} strokeWidth={1.2} markerEnd="url(#arrow-p)" />

                  <line x1={540} y1={192} x2={540} y2={228} stroke={MUTED} strokeWidth={1.2} markerEnd="url(#arrow-m)" />
                  <line x1={608} y1={176} x2={720} y2={176} stroke={MUTED} strokeWidth={1.2} markerEnd="url(#arrow-m)" />
                  <path
                    d="M 608,160 H 672 Q 676,160 676,164 V 324 Q 676,328 672,328 H 540 V 336"
                    fill="none"
                    stroke={MUTED}
                    strokeWidth={1.2}
                    markerEnd="url(#arrow-m)"
                  />
                  <path
                    d="M 240,456 H 818 Q 822,456 822,452 V 400"
                    fill="none"
                    stroke={PRIMARY}
                    strokeWidth={1.4}
                    markerEnd="url(#arrow-p)"
                  />

                  {/* Arrow labels */}
                  <rect x={146} y={166} width={48} height={12} rx={2} fill={PAPER} />
                  <text x={170} y={176} fill={PRIMARY} fontSize={8} fontFamily={MONO} textAnchor="middle" letterSpacing="0.08em">
                    HTTPS
                  </text>
                  <rect x={386} y={164} width={80} height={12} rx={2} fill={PAPER} />
                  <text x={426} y={174} fill={PRIMARY} fontSize={8} fontFamily={MONO} textAnchor="middle" letterSpacing="0.08em">
                    HTTPS · :443
                  </text>
                  <rect x={68} y={302} width={48} height={12} rx={2} fill={PAPER} />
                  <text x={92} y={312} fill={PRIMARY} fontSize={8} fontFamily={MONO} textAnchor="middle" letterSpacing="0.08em">
                    HTTPS
                  </text>
                  <rect x={532} y={438} width={96} height={12} rx={2} fill={PAPER} />
                  <text x={580} y={448} fill={PRIMARY} fontSize={8} fontFamily={MONO} textAnchor="middle" letterSpacing="0.08em">
                    PGSQL · 5432 · SSL
                  </text>

                  {/* Nodes */}
                  <DiagramNode x={40} y={148} width={104} height={64} num="01" tag="USR" title="Clientes" meta="Browser · App" tone="external" />
                  <DiagramNode x={196} y={140} width={184} height={80} num="02" tag="EDGE" title="Cloudflare" meta="proxy · WAF · DNS" tone="edge" />
                  <DiagramNode x={472} y={128} width={136} height={64} num="03" tag="GW" title="Nginx" meta=":80 · :443" tone="compute" />
                  <DiagramNode x={472} y={228} width={180} height={64} num="04" tag="AGB" title="AgroBot" meta="web :5173 · api :3000 · mysql :3306" tone="compute" metaSize={7.5} />
                  <DiagramNode x={472} y={336} width={180} height={64} num="05" tag="TAL" title="Taller Mec." meta="app :3002 · web :3043 · pg :5433" tone="compute" metaSize={7.5} />
                  <DiagramNode x={720} y={128} width={204} height={64} num="06" tag="TRA" title="Transporte" meta="api :3004 · postgis" tone="compute" />
                  <DiagramNode x={720} y={336} width={204} height={64} num="07" tag="CLI" title="Clinic DB" meta="postgres :5432 · SSL" tone="focal" />
                  <DiagramNode x={40} y={424} width={200} height={64} num="08" tag="RND" title="Render" meta="vitaria" tone="edge" />

                  {/* Legend */}
                  <line x1={40} y1={512} x2={960} y2={512} stroke={RULE} strokeWidth={0.8} />
                  <text x={40} y={528} fill={MUTED} fontSize={8} fontFamily={MONO} letterSpacing="0.18em">
                    LEGEND
                  </text>

                  <rect x={40} y={540} width={14} height={10} rx={2} fill={PRIMARY_TINT} stroke={PRIMARY} strokeWidth={1} />
                  <text x={60} y={552} fill={MUTED} fontSize={8.5} fontFamily={SANS}>
                    {t.infra.legend.focal}
                  </text>

                  <rect x={170} y={540} width={14} height={10} rx={2} fill="#ffffff" stroke={INK} strokeWidth={1} />
                  <text x={190} y={552} fill={MUTED} fontSize={8.5} fontFamily={SANS}>
                    {t.infra.legend.gateway}
                  </text>

                  <rect x={326} y={540} width={14} height={10} rx={2} fill={PRIMARY_SOFT} stroke={EDGE_STROKE} strokeWidth={1} />
                  <text x={346} y={552} fill={MUTED} fontSize={8.5} fontFamily={SANS}>
                    {t.infra.legend.edge}
                  </text>

                  <rect x={430} y={540} width={14} height={10} rx={2} fill={EXTERNAL_FILL} stroke={SOFT} strokeWidth={1} />
                  <text x={450} y={552} fill={MUTED} fontSize={8.5} fontFamily={SANS}>
                    {t.infra.legend.external}
                  </text>

                  <line x1={562} y1={546} x2={590} y2={546} stroke={PRIMARY} strokeWidth={1.2} markerEnd="url(#arrow-p)" />
                  <text x={598} y={552} fill={MUTED} fontSize={8.5} fontFamily={SANS}>
                    {t.infra.legend.https}
                  </text>

                  <line x1={690} y1={546} x2={718} y2={546} stroke={PRIMARY} strokeWidth={1.4} markerEnd="url(#arrow-p)" />
                  <text x={726} y={552} fill={MUTED} fontSize={8.5} fontFamily={SANS}>
                    {t.infra.legend.pgsql}
                  </text>

                  <line x1={838} y1={546} x2={866} y2={546} stroke={MUTED} strokeWidth={1.2} markerEnd="url(#arrow-m)" />
                  <text x={874} y={552} fill={MUTED} fontSize={8.5} fontFamily={SANS}>
                    {t.infra.legend.docker}
                  </text>
                </svg>
              </div>

              <div className="flex items-center gap-3 my-8">
                <span className="w-12 h-[1px] bg-primary" />
                <p className="font-mono text-xs text-primary tracking-widest uppercase font-bold">
                  {t.infra.providers}
                </p>
              </div>
              {renderProviders(prodProviders)}
            </motion.div>
          ) : (
            <motion.div
              key="suite"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={viewTransition}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-12 h-[1px] bg-primary" />
                <p className="font-mono text-xs text-primary tracking-widest uppercase font-bold">
                  {t.infra.suite.topology}
                </p>
              </div>
              <div className="rounded-2xl bg-surface-container-lowest border border-outline-variant p-4 md:p-5 overflow-x-auto">
                <svg
                  viewBox="0 0 1000 576"
                  className="w-full min-w-[900px] block"
                  role="img"
                  aria-labelledby="suite-topology-title suite-topology-desc"
                >
                  <title id="suite-topology-title">Topología de la Suite AMG</title>
                  <desc id="suite-topology-desc">Cloudflare proxea los subdominios de la Suite AMG hacia Nginx en Oracle Cloud; el stack Docker Compose publica 9 productos y un núcleo Core (SSO, auth y landing), y SQLite persiste por producto en un volumen local.</desc>
                  <defs>
                    <marker id="arrow-sp" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                      <polygon points="0 0, 8 3, 0 6" fill={PRIMARY} />
                    </marker>
                    <marker id="arrow-sm" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                      <polygon points="0 0, 8 3, 0 6" fill={MUTED} />
                    </marker>
                  </defs>

                  <rect width="100%" height="100%" fill={PAPER} />

                  {/* Zone: Cloudflare */}
                  <rect x={44} y={112} width={224} height={236} rx={8} fill="rgba(26,27,33,0.02)" stroke="rgba(26,27,33,0.20)" strokeWidth={0.8} strokeDasharray="4,4" />
                  <rect x={60} y={116} width={96} height={12} rx={2} fill={PAPER} />
                  <text x={64} y={125} fill={SOFT} fontSize={7} fontFamily={MONO} letterSpacing="0.14em">
                    CLOUDFLARE · EDGE
                  </text>

                  {/* Zone: Oracle Cloud */}
                  <rect x={296} y={40} width={480} height={436} rx={8} fill="rgba(26,27,33,0.02)" stroke="rgba(26,27,33,0.20)" strokeWidth={0.8} strokeDasharray="4,4" />
                  <rect x={304} y={44} width={200} height={12} rx={2} fill={PAPER} />
                  <text x={308} y={53} fill={SOFT} fontSize={7} fontFamily={MONO} letterSpacing="0.12em">
                    ORACLE CLOUD · SA-SANTIAGO-1
                  </text>
                  <text x={760} y={53} fill={SOFT} fontSize={7} fontFamily={MONO} textAnchor="end" letterSpacing="0.12em">
                    146.181.55.59
                  </text>

                  {/* Zone: Data */}
                  <rect x={800} y={112} width={156} height={252} rx={8} fill="rgba(26,27,33,0.02)" stroke="rgba(26,27,33,0.20)" strokeWidth={0.8} strokeDasharray="4,4" />
                  <rect x={816} y={116} width={48} height={12} rx={2} fill={PAPER} />
                  <text x={820} y={125} fill={SOFT} fontSize={7} fontFamily={MONO} letterSpacing="0.14em">
                    DATA
                  </text>

                  {/* Arrows behind boxes */}
                  <line x1={164} y1={80} x2={164} y2={176} stroke={PRIMARY} strokeWidth={1.2} markerEnd="url(#arrow-sp)" />
                  <path
                    d="M 252 248 H 292 Q 300 248 300 240 V 148 Q 300 140 308 140 H 316"
                    fill="none"
                    stroke={PRIMARY}
                    strokeWidth={1.2}
                    markerEnd="url(#arrow-sp)"
                  />
                  <line x1={408} y1={164} x2={408} y2={196} stroke={MUTED} strokeWidth={1.2} markerEnd="url(#arrow-sm)" />
                  <line x1={500} y1={104} x2={576} y2={104} stroke={MUTED} strokeWidth={1.2} markerEnd="url(#arrow-sm)" />
                  <path
                    d="M 760 148 H 788 Q 796 148 796 156 V 208 Q 804 208 812 208 H 832"
                    fill="none"
                    stroke={PRIMARY}
                    strokeWidth={1.2}
                    markerEnd="url(#arrow-sp)"
                  />
                  <path
                    d="M 760 408 H 808 Q 816 408 816 400 V 248 Q 816 248 824 248 H 832"
                    fill="none"
                    stroke={PRIMARY}
                    strokeWidth={1.2}
                    markerEnd="url(#arrow-sp)"
                  />

                  {/* Arrow labels */}
                  <rect x={96} y={140} width={60} height={12} rx={2} fill={PAPER} />
                  <text x={126} y={149} fill={PRIMARY} fontSize={8} fontFamily={MONO} textAnchor="middle" letterSpacing="0.06em">
                    HTTPS :443
                  </text>
                  <rect x={244} y={130} width={48} height={12} rx={2} fill={PAPER} />
                  <text x={268} y={139} fill={PRIMARY} fontSize={8} fontFamily={MONO} textAnchor="middle" letterSpacing="0.06em">
                    HTTPS :443
                  </text>
                  <rect x={364} y={172} width={36} height={12} rx={2} fill={PAPER} />
                  <text x={382} y={181} fill={MUTED} fontSize={8} fontFamily={MONO} textAnchor="middle" letterSpacing="0.06em">
                    PROXY
                  </text>
                  <rect x={514} y={84} width={48} height={12} rx={2} fill={PAPER} />
                  <text x={538} y={93} fill={MUTED} fontSize={8} fontFamily={MONO} textAnchor="middle" letterSpacing="0.06em">
                    SSO
                  </text>
                  <rect x={792} y={188} width={32} height={12} rx={2} fill={PAPER} />
                  <text x={808} y={197} fill={PRIMARY} fontSize={8} fontFamily={MONO} textAnchor="middle" letterSpacing="0.06em">
                    AUTH
                  </text>
                  <rect x={768} y={320} width={40} height={12} rx={2} fill={PAPER} />
                  <text x={788} y={329} fill={PRIMARY} fontSize={8} fontFamily={MONO} textAnchor="middle" letterSpacing="0.06em">
                    SQLITE
                  </text>

                  {/* Nodes */}
                  <DiagramNode x={116} y={16} width={96} height={64} num="01" tag="USR" title="Clientes" meta="Browser · App" tone="external" />
                  <DiagramNode x={60} y={176} width={192} height={96} num="02" tag="CDN" title="Cloudflare" meta="proxy · WAF · DNS" tone="edge" />
                  <DiagramNode x={316} y={80} width={184} height={84} num="03" tag="GW" title="Nginx" meta=":80 · :443 · tls" tone="compute" />
                  <DiagramNode x={576} y={80} width={184} height={84} num="04" tag="AUTH" title="Core" meta="auth · sso · landing" tone="compute" />
                  <DiagramNode x={316} y={196} width={444} height={264} num="05" tag="VM" title="saas-mini" meta="docker compose" tone="compute" />
                  <DiagramNode x={832} y={192} width={124} height={96} num="06" tag="DB" title="SQLite" meta="1 DB · producto" tone="focal" metaSize={7} />

                  {/* Node extras */}
                  <text x={668} y={180} fill={MUTED} fontSize={9} fontFamily={MONO} textAnchor="middle">
                    SSO · JWT · :3108
                  </text>

                  {/* Product chips */}
                  {SUITE_CHIPS.map((chip, i) => {
                    const col = i < 5 ? 0 : 1
                    const row = i < 5 ? i : i - 5
                    const x = col === 0 ? 332 : 544
                    const y = 292 + row * 32
                    return (
                      <g key={chip.name}>
                        <rect x={x} y={y} width={200} height={24} rx={4} fill="rgba(26,27,33,0.05)" stroke={MUTED} strokeWidth={0.8} />
                        <text x={x + 12} y={y + 16} fill={INK} fontSize={12} fontWeight={600} fontFamily={SANS}>
                          {chip.name}
                        </text>
                        <text x={x + 192} y={y + 16} fill={MUTED} fontSize={9} fontFamily={MONO} textAnchor="end">
                          {chip.port}
                        </text>
                      </g>
                    )
                  })}

                  {/* Legend */}
                  <line x1={44} y1={530} x2={956} y2={530} stroke={RULE} strokeWidth={0.8} />
                  <text x={44} y={546} fill={MUTED} fontSize={8} fontFamily={MONO} letterSpacing="0.18em">
                    LEGEND
                  </text>

                  <rect x={44} y={548} width={14} height={10} rx={2} fill={PRIMARY_TINT} stroke={PRIMARY} strokeWidth={1} />
                  <text x={64} y={560} fill={MUTED} fontSize={8.5} fontFamily={SANS}>
                    {t.infra.suite.legend.focal}
                  </text>

                  <rect x={190} y={548} width={14} height={10} rx={2} fill="#ffffff" stroke={INK} strokeWidth={1} />
                  <text x={210} y={560} fill={MUTED} fontSize={8.5} fontFamily={SANS}>
                    {t.infra.suite.legend.gateway}
                  </text>

                  <rect x={344} y={548} width={14} height={10} rx={2} fill={PRIMARY_SOFT} stroke={EDGE_STROKE} strokeWidth={1} />
                  <text x={364} y={560} fill={MUTED} fontSize={8.5} fontFamily={SANS}>
                    {t.infra.suite.legend.edge}
                  </text>

                  <rect x={470} y={548} width={14} height={10} rx={2} fill={EXTERNAL_FILL} stroke={SOFT} strokeWidth={1} />
                  <text x={490} y={560} fill={MUTED} fontSize={8.5} fontFamily={SANS}>
                    {t.infra.suite.legend.external}
                  </text>

                  <line x1={606} y1={554} x2={634} y2={554} stroke={PRIMARY} strokeWidth={1.2} markerEnd="url(#arrow-sp)" />
                  <text x={640} y={560} fill={MUTED} fontSize={8.5} fontFamily={SANS}>
                    {t.infra.suite.legend.https}
                  </text>

                  <line x1={716} y1={554} x2={744} y2={554} stroke={PRIMARY} strokeWidth={1.2} markerEnd="url(#arrow-sp)" />
                  <text x={750} y={560} fill={MUTED} fontSize={8.5} fontFamily={SANS}>
                    {t.infra.suite.legend.sqlite}
                  </text>

                  <line x1={838} y1={554} x2={866} y2={554} stroke={MUTED} strokeWidth={1.2} markerEnd="url(#arrow-sm)" />
                  <text x={872} y={560} fill={MUTED} fontSize={8.5} fontFamily={SANS}>
                    {t.infra.suite.legend.docker}
                  </text>
                </svg>
              </div>

              <div className="flex items-center gap-3 my-8">
                <span className="w-12 h-[1px] bg-primary" />
                <p className="font-mono text-xs text-primary tracking-widest uppercase font-bold">
                  {t.infra.providers}
                </p>
              </div>
              {renderProviders(suiteProviders)}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}