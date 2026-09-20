import type { L } from '../i18n/lang'

/**
 * Sección "por gusto": todo aquí se dibuja en pixel art.
 * Un sprite es una matriz de caracteres; cada carácter es una entrada de la paleta.
 * '.' siempre es transparente. Las filas cortas se rellenan solas en <PixelSprite>.
 */
export type Sprite = { palette: Record<string, string>; rows: string[] }

export type ArcadeEntry = {
  id: string
  title: string
  platform: string
  status: L
  year: string
  summary: L
  description: L
  stats: { label: L; value: string }[]
  link?: string
  sprite: Sprite
  accent: string
}

const OUT = '#120c1a'

const lion: Sprite = {
  palette: { x: OUT, M: '#b45309', f: '#fbbf24', o: '#1b1020', w: '#fff7ed', n: '#7c2d12' },
  rows: [
    '................',
    '.....xxxxxx.....',
    '....xMMMMMMx....',
    '...xMMMMMMMMx...',
    '..xMMxxffxxMMx..',
    '..xMxffffffxMx..',
    '..xMxfoffofxMx..',
    '..xMxffffffxMx..',
    '..xMxfnnnnfxMx..',
    '..xMxfnwwnfxMx..',
    '...xMxfnnfxMx...',
    '....xMxffxMx....',
    '.....xMxxMx.....',
    '......xxxx......',
    '................',
  ],
}

const blocky: Sprite = {
  palette: { x: OUT, y: '#facc15', d: '#ca8a04', o: '#1b1020', g: '#22d3ee', s: '#0ea5e9', w: '#fff7ed' },
  rows: [
    '................',
    '....xxxxxxxx....',
    '....xyyyyyyx....',
    '....xyoyyoyx....',
    '....xyyyyyyx....',
    '....xyywwyyx....',
    '....xxxxxxxx....',
    '..xxxggggggxx...',
    '..xggxggggxggx..',
    '..xggxggggxggx..',
    '..xxxxggggxxx...',
    '....xssssssx....',
    '....xssxxssx....',
    '....xssx.xssx...',
    '....xxx...xxx...',
  ],
}

const ghost: Sprite = {
  palette: { x: OUT, g: '#a78bfa', l: '#ede9fe', o: '#1b1020', r: '#f43f5e', d: '#4c1d95' },
  rows: [
    '................',
    '......xxxx......',
    '....xxggggxx....',
    '...xgggggggx....',
    '..xggllggllgx...',
    '..xgglogloggx...',
    '..xggllggllgx...',
    '..xgggggggggx...',
    '..xggggrrggggx..',
    '..xgggrrrrgggx..',
    '..xgggggggggx...',
    '..xgxgxgxgxgx...',
    '..xx.x.x.x.xx...',
    '................',
  ],
}

const grassBlock: Sprite = {
  palette: { x: OUT, g: '#4ade80', G: '#16a34a', d: '#92400e', D: '#7c2d12', s: '#a3a3a3' },
  rows: [
    '................',
    '..xxxxxxxxxxxx..',
    '..xgGgGggGgGgx..',
    '..xGggGgGggGGx..',
    '..xgGggGgGgGgx..',
    '..xddDddDdddDx..',
    '..xdDdddDddddx..',
    '..xddddDddDddx..',
    '..xdDddddDdsdx..',
    '..xddsdDdddddx..',
    '..xdDdddddDddx..',
    '..xddDddsddDdx..',
    '..xdddDdddDddx..',
    '..xxxxxxxxxxxx..',
    '................',
  ],
}

const cake: Sprite = {
  palette: { x: OUT, f: '#fb7185', c: '#fde68a', w: '#fff7ed', y: '#fbbf24', p: '#c026d3' },
  rows: [
    '................',
    '....y....y......',
    '...xyx..xyx.....',
    '...xwx..xwx.....',
    '..xxxxxxxxxx....',
    '..xwwwwwwwwx....',
    '..xwpwwpwwpx....',
    '..xxxxxxxxxx....',
    '..xffffffffx....',
    '..xfccfccffx....',
    '..xffffffffx....',
    '..xcffccffcx....',
    '..xffffffffx....',
    '..xxxxxxxxxx....',
    '................',
  ],
}

export const arcade: ArcadeEntry[] = [
  {
    id: 'zoo',
    title: 'Zoo Tycoon',
    platform: 'Roblox · Luau',
    year: '2026',
    accent: '#fbbf24',
    status: { es: 'PUBLICADO', en: 'PUBLISHED' },
    link: 'https://www.roblox.com/games/100592754236164/',
    sprite: lion,
    summary: {
      es: 'Tycoon publicado: el zoológico crece sobre 24 parcelas y cada visitante paga por especie que ve.',
      en: 'Published tycoon: the zoo grows across 24 plots and each visitor pays per species they walk past.',
    },
    description: {
      es: 'Construido de cero en Luau. El visitante hace un circuito completo pagando por cada especie que pasa, así que expandir escala el ingreso de todo el zoo y no solo del último recinto. Once especies con hábitat propio, visitantes que son avatares reales de Roblox, ciclo de día y noche con iluminación por histéresis y guardado persistente en DataStore.',
      en: 'Built from scratch in Luau. Visitors walk a full circuit paying for every species they pass, so expanding scales the income of the whole zoo rather than just the newest enclosure. Eleven species with their own habitats, visitors rendered as real Roblox avatars, a day/night cycle with hysteresis lighting and persistent DataStore saves.',
    },
    stats: [
      { label: { es: 'Especies', en: 'Species' }, value: '11' },
      { label: { es: 'Parcelas', en: 'Plots' }, value: '24' },
      { label: { es: 'Estado', en: 'State' }, value: 'LIVE' },
    ],
  },
  {
    id: 'obby',
    title: 'Obby',
    platform: 'Roblox · Luau',
    year: '2025',
    accent: '#38bdf8',
    status: { es: 'EN VIVO', en: 'LIVE' },
    sprite: blocky,
    summary: {
      es: 'Carrera de obstáculos con checkpoints: el clásico de Roblox, hecho a mano.',
      en: 'Obstacle course with checkpoints: the Roblox classic, built by hand.',
    },
    description: {
      es: 'Etapas encadenadas, plataformas que se mueven y trampas con temporizador. Publicado y jugable, con guardado de progreso por checkpoint.',
      en: 'Chained stages, moving platforms and timed traps. Published and playable, with per-checkpoint progress saving.',
    },
    stats: [
      { label: { es: 'Modo', en: 'Mode' }, value: 'Parkour' },
      { label: { es: 'Estado', en: 'State' }, value: 'LIVE' },
    ],
  },
  {
    id: 'mirasol',
    title: 'Mirasol',
    platform: 'Roblox · Luau',
    year: '2026',
    accent: '#a78bfa',
    status: { es: 'SIN PUBLICAR', en: 'UNRELEASED' },
    sprite: ghost,
    summary: {
      es: 'Terror en primera persona. Todavía en el taller, y así se queda hasta que dé miedo de verdad.',
      en: 'First-person horror. Still in the workshop, and it stays there until it is genuinely scary.',
    },
    description: {
      es: 'Proyecto de terror: atmósfera, sonido e iluminación por encima de los sustos fáciles. Sin publicar a propósito; un juego de miedo que se filtra a medias no asusta dos veces.',
      en: 'A horror project: atmosphere, sound and lighting over cheap jump scares. Unreleased on purpose; a scary game that leaks half-finished does not scare twice.',
    },
    stats: [
      { label: { es: 'Género', en: 'Genre' }, value: 'Horror' },
      { label: { es: 'Estado', en: 'State' }, value: 'WIP' },
    ],
  },
  {
    id: 'minecraft',
    title: 'Realm de Minecraft',
    platform: 'Bedrock',
    year: '2025 — hoy',
    accent: '#4ade80',
    status: { es: 'ABIERTO', en: 'OPEN' },
    sprite: grassBlock,
    summary: {
      es: 'Un realm que administro: mundo, reglas y respaldos. Administrar servidores también se practica jugando.',
      en: 'A realm I run: world, rules and backups. Running servers is also practiced by playing.',
    },
    description: {
      es: 'Servidor Bedrock con su mundo, sus reglas y sus respaldos. Es el lugar donde la administración de sistemas se siente como un juego: permisos, versiones, copias y gente conectada que se queja si algo se cae.',
      en: 'A Bedrock server with its own world, rules and backups. It is where systems administration feels like a game: permissions, versions, copies, and people connected who complain if something goes down.',
    },
    stats: [
      { label: { es: 'Edición', en: 'Edition' }, value: 'Bedrock' },
      { label: { es: 'Rol', en: 'Role' }, value: 'Admin' },
    ],
  },
  {
    id: 'cartas',
    title: 'Cartas y cumpleaños',
    platform: 'HTML · Canvas',
    year: '2025 — 2026',
    accent: '#fb7185',
    status: { es: 'REGALOS', en: 'GIFTS' },
    sprite: cake,
    summary: {
      es: 'Páginas hechas para una sola persona: cartas animadas y sitios de cumpleaños.',
      en: 'Pages made for one person only: animated letters and birthday sites.',
    },
    description: {
      es: 'Pequeños sitios de regalo: cartas que se abren con animación, líneas de tiempo de recuerdos y juegos cortos. Nadie los va a ver en un portafolio corporativo, y justo por eso están aquí: son los que se hacen por gusto.',
      en: 'Small gift sites: letters that open with animation, memory timelines and short games. Nobody would put these in a corporate portfolio, and that is exactly why they are here: these are the ones made for fun.',
    },
    stats: [
      { label: { es: 'Hechas', en: 'Made' }, value: '4+' },
      { label: { es: 'Público', en: 'Audience' }, value: '1' },
    ],
  },
]
