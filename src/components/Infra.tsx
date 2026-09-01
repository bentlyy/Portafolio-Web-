"use client"

import { motion } from "framer-motion"
import { Cloud, Server, Rocket, Github } from "lucide-react"
import { useLanguage } from "@/lib/LanguageProvider"
import { projects } from "@/lib/data"

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
  focal?: boolean
}

interface Provider {
  name: string
  tag: string
  desc: string
  icon: React.ComponentType<{ size?: number | string; className?: string }>
  items: ProviderItem[]
}

export default function Infra() {
  const { t } = useLanguage()

  const providers: Provider[] = [
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
        { label: "Clínica Salud Vital", meta: "React · Express", github: projects[0].github },
        { label: "Postgres (Oracle)", meta: ":5432 · SSL" },
      ],
    },
  ]

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
        <h2 className="font-sans text-[32px] md:text-[48px] font-semibold text-on-surface leading-tight mb-4">
          {t.infra.title}
        </h2>
        <p className="font-body text-[15px] md:text-base text-on-surface-variant max-w-2xl mb-8 leading-relaxed">
          {t.infra.description}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
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
              <DiagramNode x={40} y={424} width={200} height={64} num="08" tag="RND" title="Render" meta="clinica-salud-vital" tone="edge" />

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
        </motion.div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-[1px] bg-primary" />
            <p className="font-mono text-xs text-primary tracking-widest uppercase font-bold">
              {t.infra.providers}
            </p>
          </div>

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
        </motion.div>
      </div>
    </section>
  )
}