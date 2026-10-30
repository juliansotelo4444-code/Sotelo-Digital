/**
 * SOTELO DIGITAL — Portafolio de Proyectos Web
 * Metadata vinculada directamente a tus repositorios oficiales de GitHub y demos en vivo.
 * Usuario GitHub: juliansotelo4444-code
 */

export interface ProjectItem {
  id: string;
  title: string;
  shortTitle: string;
  category: 'ecommerce' | 'dashboard' | 'landing';
  categoryLabel: string;
  badge: string;
  description: string;
  client: string;
  timeline: string;
  metric: string;
  image: string;
  stack: string[];
  results: string[];
  liveUrl?: string;
  repoUrl?: string;
  isExternalDemo?: boolean;
}

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: 'mixpoint',
    title: 'Mix Point - E-Commerce de Alimentos Naturales',
    shortTitle: 'Mix Point Ventas',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce / Tienda Online',
    badge: 'E-Commerce & Catálogo Mayorista',
    description: 'Plataforma web de comercio electrónico y distribución especializada en frutos secos y alimentos naturales. Venta mayorista y minorista con catálogo interactivo y checkout directo a WhatsApp.',
    client: 'Mix Point Alimentos Naturales',
    timeline: 'Entrega Llave en Mano',
    metric: 'Catálogo + Pedidos WhatsApp',
    image: 'assets/images/mixpoint-mockup.jpg',
    stack: ['React', 'Tailwind CSS', 'TypeScript', 'Node.js', 'Vercel'],
    results: [
      'Segmentación ágil para pedidos mayoristas y minoristas con listas de precios dinámicas.',
      'Catálogo interactivo con filtros instantáneos y búsqueda por categorías en tiempo real.',
      'Puntuación superior a 95 en Google Lighthouse y checkout directo a WhatsApp.'
    ],
    liveUrl: 'https://mix-point.vercel.app',
    repoUrl: 'https://github.com/juliansotelo4444-code/Mix.point',
    isExternalDemo: true
  },
  {
    id: 'mixpoint-gestion',
    title: 'Mix Point Gestión - Sistema ERP & Asistencia por Voz',
    shortTitle: 'Mix Point ERP',
    category: 'dashboard',
    categoryLabel: 'Gestor de Datos / ERP',
    badge: 'ERP con Control de Stock',
    description: 'Sistema empresarial integral para control de inventario en tiempo real, trazabilidad de stock, facturación y asistencia por comandos de voz para almacén.',
    client: 'Mix Point Logística',
    timeline: 'Panel Administrativo',
    metric: 'Control de Stock en Tiempo Real',
    image: 'assets/images/mixpoint-gestion.jpg',
    stack: ['React', 'TypeScript', 'PostgreSQL', 'API REST Node.js', 'Capacitor Android'],
    results: [
      'Control centralizado de inventario para depósito central y puntos de venta.',
      'Módulo de asistencia por voz con IA para agilizar el picking y despacho de mercadería.',
      'Trazabilidad total de operaciones de compra, venta, movimientos y reportes ejecutivos.'
    ],
    liveUrl: 'https://base-front-mixpoint.vercel.app',
    repoUrl: 'https://github.com/juliansotelo4444-code/base-front-mixpoint',
    isExternalDemo: true
  },
  {
    id: 'vertical-global',
    title: 'Vertical Global - Ascensores & Mantenimiento',
    shortTitle: 'Vertical Global',
    category: 'landing',
    categoryLabel: 'Sitio Web Corporativo',
    badge: 'Elevación & Servicios',
    description: 'Página web corporativa para Vertical Global, especializada en instalación, modernización y mantenimiento integral de ascensores y sistemas de elevación.',
    client: 'Vertical Global',
    timeline: 'Sitio Institucional',
    metric: 'Ingeniería en Elevación',
    image: 'assets/images/industria-lam.jpg',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Vercel'],
    results: [
      'Presentación técnica de servicios de ascensores y planes de abono mensual.',
      'Canal de contacto directo para urgencias técnicas y atención 24/7.',
      'Despliegue de alto rendimiento en Vercel con carga instantánea.'
    ],
    liveUrl: 'https://vertical-global.vercel.app',
    repoUrl: 'https://github.com/juliansotelo4444-code/vertical-global-',
    isExternalDemo: true
  },
  {
    id: 'sotelo-propiedades',
    title: 'Sotelo Propiedades - Portal Inmobiliario Full-Stack',
    shortTitle: 'Sotelo Propiedades',
    category: 'dashboard',
    categoryLabel: 'Plataforma Inmobiliaria',
    badge: 'Full-Stack con JWT',
    description: 'Portal inmobiliario moderno desarrollado con React + Vite y backend REST. Catálogo interactivo de propiedades en venta y alquiler con filtros y panel de administración.',
    client: 'Sotelo Propiedades',
    timeline: 'Desarrollo Full-Stack',
    metric: 'Catálogo + Panel Admin',
    image: 'assets/images/realestate-mockup.jpg',
    stack: ['React', 'Vite', 'Node.js', 'Express', 'JWT', 'REST API'],
    results: [
      'Filtrado multicriterio por tipo, estado, operación, moneda y rango de precio.',
      'Panel privado para publicar, editar y administrar inmuebles con autenticación JWT.',
      'Diseño responsive adaptado de 320px a 2000px con paleta institucional de alto impacto.'
    ],
    liveUrl: 'https://sotelo-propiedades-frontend.vercel.app',
    repoUrl: 'https://github.com/juliansotelo4444-code/sotelo-propiedades-frontend',
    isExternalDemo: true
  },
  {
    id: 'servicios-oeste',
    title: 'Servicios Oeste SPI - Soluciones Industriales',
    shortTitle: 'Servicios Oeste SPI',
    category: 'landing',
    categoryLabel: 'Sitio Web Corporativo',
    badge: 'Sector Industrial',
    description: 'Plataforma web para empresa de obras, mantenimiento de tinglados y pisos industriales de alta resistencia en Zona Oeste GBA con galería de obras.',
    client: 'Servicios Oeste SPI',
    timeline: 'Plataforma Corporativa',
    metric: 'Obras & Servicios Industriales',
    image: 'assets/images/servicios-oeste-mockup.jpg',
    stack: ['React 19', 'Vite', 'CSS Modular', 'WhatsApp API'],
    results: [
      'Galería fotográfica de obras y procesos de demarcación y aplicación de resina epoxi.',
      'Secciones estratégicas de habilitaciones, equipamiento y clientes industriales.',
      'Botón de contacto directo con el equipo técnico comercial.'
    ],
    liveUrl: 'https://servicios-oeste-spi-4tii.vercel.app',
    repoUrl: 'https://github.com/juliansotelo4444-code/servicios-oeste-spi.git',
    isExternalDemo: true
  },
  {
    id: 'yeny',
    title: 'Yeny - Masoterapia & Bienestar Ituzaingó',
    shortTitle: 'Yeny Bienestar',
    category: 'landing',
    categoryLabel: 'Landing Page de Servicios',
    badge: 'Landing de Servicios',
    description: 'Sitio web moderno y relajante para masoterapia profesional en Ituzaingó. Presentación estética de terapias manuales y reserva directa por WhatsApp.',
    client: 'Yeny Masoterapia',
    timeline: 'Landing Page',
    metric: 'Reserva Directa por WhatsApp',
    image: 'assets/images/yeny-mockup.jpg',
    stack: ['React 19', 'Framer Motion', 'Lucide React', 'Vite', 'CSS Modular'],
    results: [
      'Diseño visual estético y minimalista con microanimaciones fluidas.',
      'Catálogo claro de servicios: masajes descontracturantes, relajantes y piedras calientes.',
      'Enlace directo a agenda por WhatsApp optimizado para conversión en móviles.'
    ],
    liveUrl: 'https://masaje-yeny.vercel.app',
    repoUrl: 'https://github.com/juliansotelo4444-code/masaje-yeny.git',
    isExternalDemo: true
  }
];

export const PORTFOLIO_MAP: Record<string, ProjectItem> = PORTFOLIO_PROJECTS.reduce(
  (acc, proj) => {
    acc[proj.id] = proj;
    return acc;
  },
  {} as Record<string, ProjectItem>
);
