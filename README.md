# Carlos Diaz Portfolio

Portafolio profesional de Carlos Diaz, orientado a oportunidades en inteligencia artificial, automatizacion, desarrollo web, tecnologia y produccion de contenidos digitales.

- Sitio: [carlos-diaz-portfolio.vercel.app](https://carlos-diaz-portfolio.vercel.app/)
- GitHub: [Ciclatos](https://github.com/Ciclatos)
- LinkedIn: [Carlos Diaz](https://www.linkedin.com/in/carlos-diaz-00a014303/)

## Enfoque

El sitio posiciona a Carlos como un perfil hibrido que combina:

- IA aplicada y automatizacion.
- Desarrollo web y productos digitales.
- Produccion de audio, comunicacion y contenido digital.
- Investigacion, aprendizaje continuo y proyectos reales.

## Stack

- React
- TypeScript
- Vite
- CSS responsive
- Lightbox simple para capturas ampliables
- Playwright para capturas de proyectos

## Proyectos destacados

- Project Pulse: musica mediante codigo, PulseScript e IA asistida.
- PhyLab: laboratorio virtual de Fisica I con simulaciones, graficas y tutor IA.
- MedSync: sistema hospitalario privado para operaciones, finanzas y reportes.
- Amaranto Parfum: prototipo de personalizacion de perfumes con IA y automatizacion.

## Scripts

```bash
npm run dev
npm run build
npm run preview
npm run screenshots
```

## Capturas de proyectos

Las capturas publicas se generan con:

```bash
npm run screenshots
```

Para capturar pantallas internas de MedSync sin exponer credenciales en el repositorio:

```bash
MEDSYNC_EMAIL="..." MEDSYNC_PASSWORD="..." npm run screenshots
```

Las credenciales demo no deben publicarse en la web final ni guardarse en archivos versionados.

## Datos editables

Los datos principales estan en `src/main.tsx`:

- LinkedIn
- GitHub
- Correo electronico
- Textos de perfil
- Proyectos y tecnologias

El favicon monograma se encuentra en `public/assets/favicon.svg`.

## Deploy

El proyecto esta preparado para despliegue estatico en Vercel:

- Build command: `npm run build`
- Output directory: `dist`
- Framework preset: Vite
