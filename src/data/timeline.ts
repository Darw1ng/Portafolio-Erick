import type { L } from '../i18n/lang'

export type TimelineItem = {
  period: L
  title: L
  body: L
  badge?: L
  active?: boolean
}

export const timeline: TimelineItem[] = [
  {
    period: { es: '2026 — hoy', en: '2026 — now' },
    title: { es: 'Desarrollador Full Stack — Petworld', en: 'Full Stack Developer — Petworld' },
    active: true,
    body: {
      es: 'Desarrollo del producto completo. Reestructuré la plataforma de punta a punta: arquitectura de backend, esquema de base de datos, migración de almacenamiento, sistema de suscripciones con Stripe y refactor del frontend a TypeScript estricto. Encendí la monetización en producción con el motor de límites por plan detrás. Traduzco los requerimientos de negocio a alcance técnico real.',
      en: 'Full product development. I restructured the platform end to end: backend architecture, database schema, storage migration, Stripe subscriptions and a frontend refactor to strict TypeScript. I switched monetization on in production with the per-plan quota engine behind it. I translate business requirements into real technical scope.',
    },
  },
  {
    period: { es: 'Oct 2026 — hoy', en: 'Oct 2026 — now' },
    title: { es: 'Socio y desarrollador de la plataforma — Enlazamed', en: 'Partner and Platform Developer — Enlazamed' },
    active: true,
    body: {
      es: 'Startup de trazabilidad hospitalaria en tiempo real de la que soy socio. Rediseñé su sitio y construyo la plataforma completa: localización de equipo médico por BLE, panel por cliente con hospitales, pisos y cuartos, panel maestro, soporte con tickets, servidores locales para hospitales y la app de iPhone para el personal. Me toca también la seguridad de los equipos en campo: PKI propia y conexión de cada gateway por mTLS.',
      en: 'A real-time hospital traceability startup where I am a partner. I redesigned their website and I build the whole platform: BLE positioning of medical equipment, per-client panels with hospitals, floors and rooms, a master panel, ticketed support, on-site servers for hospitals and the iPhone app for staff. I also own the security of field devices: an in-house PKI and mTLS for every gateway.',
    },
  },
  {
    period: { es: 'Oct 2026 — hoy', en: 'Oct 2026 — now' },
    title: { es: 'Líder técnico — ELKON IO', en: 'Tech Lead — ELKON IO' },
    active: true,
    body: {
      es: 'Empecé con ELKON, contratista eléctrico de Boca del Río, digitalizando su control de obra —presupuesto, compras, control presupuestal y supervisión en campo— que vivía en Excel, con un bot de WhatsApp para la obra. De ahí salió ELKON Express, un bot de WhatsApp para hoteles y restaurantes que lleva el negocio desde el chat, y el motor de WhatsApp compartido que usa el equipo para sus productos. Llevo la dirección técnica: arquitectura, decisiones de stack y lo que sale a producción.',
      en: 'I started with ELKON, an electrical contractor in Boca del Río, digitizing their construction control —budgeting, purchasing, budget tracking and field supervision— which lived in Excel, along with a WhatsApp bot for the job site. That led to ELKON Express, a WhatsApp bot for hotels and restaurants that runs the business from the chat, and the shared WhatsApp engine the team uses across its products. I lead the technical side: architecture, stack decisions and what ships to production.',
    },
  },
  {
    period: { es: '2026 — hoy', en: '2026 — now' },
    title: { es: 'Socio — SitiRT · Software a la medida', en: 'Partner — SitiRT · Custom software' },
    active: true,
    body: {
      es: 'Socio de la empresa. Sistemas para negocios de la región, del análisis a la instalación: rastreo en vivo del transporte urbano de Autobuses Palotal, puntos de venta para abarrotes, gestión de gimnasios con control de acceso biométrico, venta a crédito y cobranza en ruta, y el cotizador de la empresa. Detrás de todo, el Hub desde el que operamos cada instalación: salud de los equipos, tickets, respaldos, actualizaciones firmadas y cobro del mantenimiento.',
      en: 'Partner in the company. Systems for businesses in the region, from analysis to installation: live urban transit tracking for Autobuses Palotal, points of sale for grocery stores, gym management with biometric access control, installment sales with route collection, and the company quote builder. Behind it all, the Hub we use to run every installation: device health, tickets, backups, signed updates and maintenance billing.',
    },
  },
  {
    period: { es: '2025 — 2026', en: '2025 — 2026' },
    title: { es: 'Full Stack multi-producto', en: 'Multi-product full stack' },
    body: {
      es: 'Trabajo simultáneo en varios productos: el frontend de Pulso (SaaS médico), la plataforma e-learning de WakOs en Salesforce y just2know, un producto propio que llevé de idea a producción con suscripciones.',
      en: 'Working on several products at once: the Pulso frontend (medical SaaS), the WakOs e-learning platform on Salesforce, and just2know, my own product taken from idea to production with subscriptions.',
    },
  },
  {
    period: { es: '2024 — 2026 · Hackatones', en: '2024 — 2026 · Hackathons' },
    title: { es: 'Competencias y hackatones', en: 'Competitions and hackathons' },
    badge: { es: '2.º lugar — Talent Land e InnovaHealth 2026', en: '2nd place — Talent Land and InnovaHealth 2026' },
    body: {
      es: 'Tres años seguidos compitiendo. Talent Land México 2026: segundo lugar en la pista del Technology Development Program de Capital One, con el equipo Amigos de Timmy, en el Tec de Monterrey campus Santa Fe. InnovaHealth 2026 en el CNIB de Oaxaca: segundo lugar del Track 3 con Kura, telemedicina para enfermedades crónicas. Y tres ediciones del NASA Space Apps Challenge en Boca del Río: un planetario de realidad aumentada construido en 48 horas con Unity y Vuforia (2024), Life Zones (2025) y El Ojo de Tláloc (2026), un predictor de lluvia e inundación con datos del radar NISAR, donde lideré al equipo. Compitiendo se trabaja distinto: alcance recortado a lo esencial, decisiones técnicas en minutos y algo funcionando cuando se acaba el tiempo.',
      en: 'Three years competing in a row. Talent Land México 2026: second place in Capital One’s Technology Development Program track, with the Amigos de Timmy team, at Tec de Monterrey Santa Fe. InnovaHealth 2026 at CNIB Oaxaca: second place in Track 3 with Kura, telemedicine for chronic conditions. And three editions of the NASA Space Apps Challenge in Boca del Río: an augmented reality planetarium built in 48 hours with Unity and Vuforia (2024), Life Zones (2025) and El Ojo de Tláloc (2026), a rain and flood predictor using NISAR radar data, where I led the team. Competing means working differently: scope cut to the essentials, technical decisions in minutes, and something running when time is up.',
    },
  },
  {
    period: { es: '2025 · Prácticas — 6 meses', en: '2025 · Internship — 6 months' },
    title: { es: 'Auxiliar de TI y consultoría — MAJA Consulting Group', en: 'IT and consulting assistant — MAJA Consulting Group' },
    body: {
      es: 'Seis meses dentro de una consultora, en paralelo al trabajo de producto. Apoyé a consultores senior en proyectos con clientes, documentación técnica e investigación, con trabajo de soporte, equipo y red. Ver una organización por dentro —sus procesos y sus áreas dependiendo unas de otras— cambia la forma de explicar una decisión técnica según quién la escuche.',
      en: 'Six months inside a consulting firm, in parallel with product work. I supported senior consultants on client projects, technical documentation and research, plus support, hardware and network work. Seeing an organization from the inside —its processes and how its areas depend on each other— changes how you explain a technical decision depending on who is listening.',
    },
  },
  {
    period: { es: '2022 — 2024', en: '2022 — 2024' },
    title: { es: 'Primeros productos en producción', en: 'First products in production' },
    body: {
      es: 'En 2022 empecé a trabajar por mi cuenta como desarrollador full stack freelance, para clientes locales e internacionales: apps móviles en React Native con usuarios reales, y sistemas de punto de venta e inventario en Java para negocios de la zona. Llevaba el ciclo completo, desde levantar los requerimientos hasta entregar. Aprendí la diferencia entre código que funciona y código que se mantiene.',
      en: 'In 2022 I started working on my own as a freelance full stack developer for local and international clients: React Native mobile apps with real users, and Java point-of-sale and inventory systems for local businesses. I ran the whole cycle, from gathering requirements to delivery. I learned the difference between code that works and code that can be maintained.',
    },
  },
  {
    period: { es: '2021 — 2022', en: '2021 — 2022' },
    title: { es: 'Inicio en programación', en: 'Getting started in programming' },
    body: {
      es: 'Primeras líneas de código: HTML, CSS y JavaScript. La curiosidad por entender cómo funcionan las cosas se convirtió en mi motor principal, y al año siguiente entré a Ingeniería en Sistemas Computacionales.',
      en: 'First lines of code: HTML, CSS and JavaScript. Curiosity about how things work became my main engine, and the following year I started a Computer Systems Engineering degree.',
    },
  },
]

export type CredGroup = { title: L; items: { main: L; sub: L }[] }

export const credentials: CredGroup[] = [
  {
    title: { es: 'Formación', en: 'Education' },
    items: [
      {
        main: { es: 'Maestría en Ciencia de Datos — en curso', en: 'MSc in Data Science — in progress' },
        sub: { es: 'Universidad Cristóbal Colón · 2026 — actual', en: 'Universidad Cristóbal Colón · 2026 — current' },
      },
      {
        main: { es: 'Ing. en Sistemas Computacionales', en: 'BSc in Computer Systems Engineering' },
        sub: { es: 'Universidad Cristóbal Colón · 2022 — 2026', en: 'Universidad Cristóbal Colón · 2022 — 2026' },
      },
      {
        main: { es: 'Diplomado en Desarrollo Web', en: 'Web Development Diploma' },
        sub: { es: 'Universidad Cristóbal Colón · 2022 — 2026', en: 'Universidad Cristóbal Colón · 2022 — 2026' },
      },
    ],
  },
  {
    title: { es: 'Certificaciones', en: 'Certifications' },
    items: [
      { main: { es: 'Cisco Packet Tracer', en: 'Cisco Packet Tracer' }, sub: { es: '2024', en: '2024' } },
      { main: { es: 'Salesforce CRM', en: 'Salesforce CRM' }, sub: { es: '2024 — actual', en: '2024 — current' } },
      {
        main: { es: 'Idiomas', en: 'Languages' },
        sub: { es: 'Español nativo · Inglés B1', en: 'Native Spanish · English B1' },
      },
    ],
  },
  {
    title: { es: 'Comunidad', en: 'Community' },
    items: [
      {
        main: { es: 'Miembro IEEE', en: 'IEEE Member' },
        sub: { es: 'Institute of Electrical and Electronics Engineers', en: 'Institute of Electrical and Electronics Engineers' },
      },
      {
        main: { es: 'Jefe de Grupo y representante estudiantil', en: 'Class leader and student representative' },
        sub: { es: 'Universidad Cristóbal Colón · 2022 — actual', en: 'Universidad Cristóbal Colón · 2022 — current' },
      },
      {
        main: { es: 'Mentor digital voluntario', en: 'Volunteer digital mentor' },
        sub: { es: 'Colegio Cristóbal Colón · 2017 — 2025 · redes, servidores y administración de sistemas', en: 'Colegio Cristóbal Colón · 2017 — 2025 · networking, servers and systems administration' },
      },
    ],
  },
]

export const about: { lead: L; body: L[]; facts: { label: L; value: L }[] } = {
  lead: {
    es: 'Soy Erick, ingeniero en sistemas y desarrollador full stack.',
    en: 'I am Erick, a systems engineer and full stack developer.',
  },
  body: [
    {
      es: 'Trabajo sobre el producto completo —de la interfaz a la base de datos y la infraestructura— y me interesa especialmente la parte que no se ve: el esquema de datos, las migraciones, los límites de plan, los webhooks de pago y todo lo que hace que un producto aguante usuarios reales.',
      en: 'I work across the whole product —from the interface to the database and the infrastructure— and I am especially drawn to the part nobody sees: the data schema, the migrations, the plan limits, the payment webhooks and everything that makes a product survive real users.',
    },
    {
      es: 'También me meto donde el software toca el mundo físico: rastreo en interiores con etiquetas BLE, visión por computadora corriendo en una placa de bajo consumo, redes y domótica, y el fierro armado a mano. Un sistema se entiende mejor cuando conoces las dos orillas.',
      en: 'I also go where software meets the physical world: indoor tracking with BLE tags, computer vision running on a low-power board, networking and home automation, and hardware assembled by hand. A system makes more sense when you know both shores.',
    },
    {
      es: 'Trabajo mejor donde hay autonomía, donde se itera rápido y donde el código importa tanto como el resultado final.',
      en: 'I work best where there is autonomy, fast iteration, and where the code matters as much as the outcome.',
    },
  ],
  facts: [
    { label: { es: 'Ubicación', en: 'Location' }, value: { es: 'Veracruz, México', en: 'Veracruz, Mexico' } },
    { label: { es: 'Rol actual', en: 'Current role' }, value: { es: 'Full Stack — Petworld', en: 'Full Stack — Petworld' } },
    { label: { es: 'Formación', en: 'Education' }, value: { es: 'Ing. Sistemas · Maestría en Ciencia de Datos (en curso)', en: 'Systems Eng. · MSc in Data Science (in progress)' } },
    { label: { es: 'Idiomas', en: 'Languages' }, value: { es: 'Español · Inglés B1', en: 'Spanish · English B1' } },
  ],
}

export const stats: { value: string; label: L }[] = [
  { value: '5', label: { es: 'años escribiendo código', en: 'years writing code' } },
  { value: '30+', label: { es: 'proyectos construidos', en: 'projects built' } },
  { value: '11', label: { es: 'productos en producción', en: 'products in production' } },
  { value: '3', label: { es: 'años en hackatones', en: 'years in hackathons' } },
]
