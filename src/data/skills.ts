import type { L } from '../i18n/lang'

export type SkillGroup = { title: L; items: { name: string; level: number }[] }

export const skillGroups: SkillGroup[] = [
  {
    title: { es: 'Frontend', en: 'Frontend' },
    items: [
      { name: 'TypeScript', level: 90 },
      { name: 'React', level: 90 },
      { name: 'React Native / Expo', level: 80 },
      { name: 'CSS / Tailwind', level: 85 },
      { name: 'three.js / R3F', level: 75 },
    ],
  },
  {
    title: { es: 'Backend y datos', en: 'Backend & data' },
    items: [
      { name: 'Node.js / Express', level: 85 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'Python', level: 70 },
      { name: 'Django', level: 65 },
      { name: 'Apex / Salesforce', level: 70 },
    ],
  },
  {
    title: { es: 'Infraestructura y oficio', en: 'Infrastructure & craft' },
    items: [
      { name: 'Vercel / Railway / Cloudflare', level: 80 },
      { name: 'CI/CD · GitHub Actions', level: 75 },
      { name: 'Stripe · pagos en vivo', level: 85 },
      { name: 'Redes / Packet Tracer', level: 55 },
      { name: 'Domótica / IoT', level: 55 },
    ],
  },
]

/** Lo que no cabe en una barra pero sí en el oficio. */
export const alsoWorkWith = [
  'Stripe', 'Sequelize', 'Supabase', 'Railway', 'Vercel', 'Backblaze B2',
  'Flutter', 'Turborepo', 'Vitest / Jest', 'APIs REST', 'LLMs', 'Unity',
  'Luau / Roblox', 'Expo', 'Docker', 'Git / GitHub',
]

export type Capability = { icon: string; title: L; body: L }

export const capabilities: Capability[] = [
  {
    icon: 'stack',
    title: { es: 'Producto de punta a punta', en: 'End-to-end product' },
    body: {
      es: 'Interfaz, API, esquema de datos, migraciones e infraestructura. Llevo productos hasta producción con usuarios y pagos reales, no hasta la demo.',
      en: 'Interface, API, data schema, migrations and infrastructure. I take products to production with real users and real payments, not to the demo.',
    },
  },
  {
    icon: 'cube',
    title: { es: '3D y simulación', en: '3D & simulation' },
    body: {
      es: 'Gemelos digitales navegables con three.js y React Three Fiber: un piso de hospital con rastreo BLE, un visor anatómico clínico, escenas de hardware.',
      en: 'Navigable digital twins with three.js and React Three Fiber: a hospital floor with BLE tracking, a clinical anatomy viewer, hardware scenes.',
    },
  },
  {
    icon: 'eye',
    title: { es: 'Visión por computadora e IA', en: 'Computer vision & AI' },
    body: {
      es: 'Detección y seguimiento de personas en video a 19 fps sobre un solo núcleo, e integración de LLMs dentro de productos que ya están en uso.',
      en: 'People detection and tracking on video at 19 fps on a single core, plus LLM integration inside products already in use.',
    },
  },
  {
    icon: 'chip',
    title: { es: 'Hardware, redes y domótica', en: 'Hardware, networking & home automation' },
    body: {
      es: 'Ensamble y diagnóstico de equipo, cableado y configuración de red (Cisco Packet Tracer) y automatización doméstica. Nivel medio, con manos.',
      en: 'Assembling and troubleshooting machines, cabling and network configuration (Cisco Packet Tracer) and home automation. Intermediate, hands-on.',
    },
  },
]
