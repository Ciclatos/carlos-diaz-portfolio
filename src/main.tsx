import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Code2,
  ExternalLink,
  FileSearch,
  Mail,
  Music2,
  Network,
  Sparkles,
  Workflow,
} from "lucide-react";
import "./styles.css";

const profile = {
  name: "Carlos Diaz",
  title: "IA y Automatizacion | Desarrollo Web | Produccion de Contenidos Digitales",
  linkedIn: "https://www.linkedin.com/in/carlos-diaz-00a014303/",
  github: "https://github.com/Ciclatos",
  email: "carloseduardo151211@gmail.com",
};

const projects = [
  {
    name: "PhyLab",
    url: "https://phylab-fisica-i.vercel.app/",
    image: "/projects/phylab.jpg",
    status: "Plataforma educativa",
    description:
      "Plataforma educativa interactiva para Fisica I con simuladores, calculadoras y graficas dinamicas. Integra conexion mediante APIs, prompts internos, validaciones de entrada y un tutor IA contextual a traves de una capa backend/proxy que ayuda a mantener la experiencia guiada, clara y segura para el aprendizaje.",
    technologies: ["JavaScript", "Vite", "Node.js", "Express", "APIs", "Chart.js", "Three.js", "Tutor IA"],
    highlights: ["APIs", "Prompts internos", "Validaciones", "Tutor IA contextual"],
  },
  {
    name: "Project Pulse",
    url: "https://project-pulse-mu.vercel.app/",
    image: "/projects/project-pulse.jpg",
    status: "Activo y en evolucion",
    description:
      "Herramienta experimental para crear y manipular musica mediante codigo. Permite explorar secuencias, patrones y transformaciones musicales desde una interfaz programable, con IA como apoyo secundario para investigar nuevas formas de interaccion creativa.",
    technologies: ["Musica con codigo", "Secuencias", "Programacion creativa", "IA exploratoria", "Web"],
    highlights: ["Musica mediante codigo", "Manipulacion de patrones", "Experimentacion sonora"],
  },
  {
    name: "Amaranto Parfum",
    url: "https://amarantoparfum.com/",
    image: "/projects/amaranto-parfum.jpg",
    status: "Prototipo y prueba de concepto",
    description:
      "Frontend para una plataforma de personalizacion de perfumes apoyada por IA y automatizacion con n8n. El proyecto se encuentra pausado mientras se redefine la estrategia comercial.",
    technologies: ["Frontend", "IA", "n8n", "Automatizacion", "Producto digital"],
    highlights: ["Personalizacion", "Flujos automatizados", "Validacion de idea"],
  },
  {
    name: "MedSync",
    url: "https://medsync-kappa.vercel.app/",
    image: "/projects/medsync-dashboard.jpg",
    status: "Proyecto privado en desarrollo",
    description:
      "Sistema hospitalario privado en desarrollo activo para gestionar pacientes, cirugias, finanzas, inventario, cuentas por cobrar y reportes operativos.",
    technologies: ["React", "Gestion hospitalaria", "Finanzas", "Inventario", "Reportes"],
    highlights: ["Dashboard", "Cirugias", "Finanzas", "Reportes"],
    gallery: [
      { label: "Cirugias", src: "/projects/medsync-cirugias.jpg" },
      { label: "Finanzas", src: "/projects/medsync-finanzas.jpg" },
      { label: "Reportes", src: "/projects/medsync-reportes.jpg" },
    ],
  },
];

const tools = [
  "ChatGPT",
  "Claude",
  "Codex",
  "Cursor",
  "n8n",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Git",
  "PostgreSQL",
  "Supabase",
  "IA",
  "Automatizacion",
  "Investigacion",
  "Documentacion tecnica",
];

const strengths = [
  {
    icon: <BrainCircuit aria-hidden="true" />,
    title: "IA aplicada",
    text: "Uso practico de modelos de IA para construir asistentes, explorar productos y acelerar procesos de investigacion y desarrollo.",
  },
  {
    icon: <Workflow aria-hidden="true" />,
    title: "Automatizacion",
    text: "Diseño de flujos y prototipos que conectan herramientas, datos y acciones concretas con foco en utilidad real.",
  },
  {
    icon: <Code2 aria-hidden="true" />,
    title: "Desarrollo web",
    text: "Construccion de interfaces funcionales, responsivas y orientadas a productos digitales con tecnologias modernas.",
  },
  {
    icon: <Music2 aria-hidden="true" />,
    title: "Comunicacion digital",
    text: "Base profesional en audio, musica digital y contenidos, con criterio narrativo para explicar ideas tecnicas con claridad.",
  },
];

const focusPoints = [
  { icon: <BrainCircuit aria-hidden="true" />, label: "Inteligencia artificial" },
  { icon: <Workflow aria-hidden="true" />, label: "Automatizacion" },
  { icon: <Code2 aria-hidden="true" />, label: "Desarrollo web" },
  { icon: <Music2 aria-hidden="true" />, label: "Produccion de contenidos digitales" },
  { icon: <FileSearch aria-hidden="true" />, label: "Investigacion y sintesis de informacion" },
];

type LightboxImage = {
  label: string;
  src: string;
};

function App() {
  const [lightboxImage, setLightboxImage] = React.useState<LightboxImage | null>(null);

  React.useEffect(() => {
    if (!lightboxImage) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightboxImage(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxImage]);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Ir al inicio">
          <span>CD</span>
          <strong>Carlos Diaz</strong>
        </a>
        <nav aria-label="Navegacion principal">
          <a href="#proyectos">Proyectos</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#herramientas">Herramientas</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">
              <Sparkles size={16} aria-hidden="true" />
              Perfil hibrido tecnologia + comunicacion
            </p>
            <h1>{profile.name}</h1>
            <p className="hero-title">{profile.title}</p>
            <p className="hero-intro">
              Licenciado en Produccion de Audio, Musica Digital y Negocios, actualmente estudiante de
              Ingenieria en Sistemas. Construyo soluciones digitales donde convergen inteligencia
              artificial, automatizacion, desarrollo web y produccion de contenidos.
            </p>
            <div className="hero-actions" aria-label="Acciones principales">
              <a className="button primary" href="#proyectos">
                Ver proyectos <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a className="button" href={profile.linkedIn} target="_blank" rel="noreferrer">
                <ExternalLink size={18} aria-hidden="true" /> LinkedIn
              </a>
              <a className="button" href={profile.github} target="_blank" rel="noreferrer">
                <Code2 size={18} aria-hidden="true" /> GitHub
              </a>
              <a className="button" href={`mailto:${profile.email}`} aria-label="Correo electronico">
                <Mail size={18} aria-hidden="true" /> Contacto
              </a>
            </div>
          </div>
          <div className="hero-visual" aria-label="Foto profesional de Carlos Diaz">
            <img src="/assets/carlos-diaz.jpg" alt="Carlos Diaz" width="960" height="1200" />
            <div className="signal-card">
              <Bot size={22} aria-hidden="true" />
              <span>IA, automatizacion y productos digitales</span>
            </div>
          </div>
        </section>

        <section id="sobre-mi" className="section about">
          <div className="section-heading">
            <p className="eyebrow">Sobre mi</p>
            <h2>Una base creativa orientada a tecnologia</h2>
          </div>
          <div className="about-grid">
            <div className="focus-card" aria-label="Puntos clave del perfil de Carlos Diaz">
              <div className="focus-mark">CD</div>
              <h3>Areas de enfoque</h3>
              <div className="focus-list">
                {focusPoints.map((point) => (
                  <div className="focus-item" key={point.label}>
                    {point.icon}
                    <span>{point.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-text">
              <p>
                Mi recorrido combina produccion de audio, musica digital, comunicacion y desarrollo
                de software. Esa mezcla me permite entender tanto la parte tecnica de una solucion
                como la forma en que se comunica, se usa y genera valor para otras personas.
              </p>
              <p>
                Actualmente estudio Ingenieria en Sistemas y concentro mi aprendizaje en inteligencia
                artificial, automatizacion, desarrollo web, investigacion y creacion de productos
                digitales. Me interesa trabajar en equipos modernos donde pueda aportar curiosidad,
                criterio tecnico, organizacion y capacidad de aprendizaje continuo.
              </p>
              <div className="strength-grid">
                {strengths.map((item) => (
                  <article className="strength" key={item.title}>
                    {item.icon}
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="proyectos" className="section projects">
          <div className="section-heading wide">
            <p className="eyebrow">Proyectos reales</p>
            <h2>Trabajo aplicado en IA, automatizacion y desarrollo web</h2>
            <p>
              Una seleccion de productos, prototipos y sistemas en los que he explorado soluciones
              educativas, creativas, comerciales y operativas con tecnologia.
            </p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <a className="project-image" href={project.url} target="_blank" rel="noreferrer" aria-label={`Abrir ${project.name}`}>
                  <img src={project.image} alt={`Captura de ${project.name}`} loading="lazy" />
                </a>
                <div className="project-content">
                  <div className="project-topline">
                    <span>{project.status}</span>
                    <a href={project.url} target="_blank" rel="noreferrer" aria-label={`Visitar ${project.name}`}>
                      <ExternalLink size={18} aria-hidden="true" />
                    </a>
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="chips" aria-label={`Caracteristicas de ${project.name}`}>
                    {project.highlights.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <div className="tech-list">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  {project.gallery && (
                    <div className="mini-gallery" aria-label="Pantallas internas de MedSync">
                      {project.gallery.map((item) => (
                        <figure key={item.label}>
                          <button
                            className="gallery-trigger"
                            type="button"
                            onClick={() => setLightboxImage(item)}
                            aria-label={`Ampliar captura de MedSync: ${item.label}`}
                          >
                            <img src={item.src} alt={`MedSync ${item.label}`} loading="lazy" />
                          </button>
                          <figcaption>{item.label}</figcaption>
                        </figure>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experiencia" className="section experience">
          <div className="section-heading">
            <p className="eyebrow">Experiencia</p>
            <h2>Agencia Ocote</h2>
          </div>
          <div className="experience-panel">
            <div>
              <Network size={30} aria-hidden="true" />
              <h3>Produccion, edicion y postproduccion de audio</h3>
            </div>
            <p>
              Participacion en proyectos periodisticos y de comunicacion social, colaborando con
              equipos multidisciplinarios enfocados en investigacion, comunicacion y difusion de
              informacion. Esta experiencia fortalecio habilidades de organizacion, trabajo en equipo,
              criterio editorial y produccion de contenidos digitales.
            </p>
          </div>
        </section>

        <section id="herramientas" className="section tools">
          <div className="section-heading wide">
            <p className="eyebrow">Tecnologias y herramientas</p>
            <h2>Stack de aprendizaje y trabajo practico</h2>
          </div>
          <div className="tool-cloud" aria-label="Tecnologias y herramientas">
            {tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </section>

        <section id="contacto" className="section contact">
          <div>
            <p className="eyebrow">Contacto</p>
            <h2>Disponible para oportunidades remotas y colaboraciones tecnologicas</h2>
            <p>
              Me interesa integrarme a equipos donde pueda aportar una mirada hibrida: tecnica,
              creativa, comunicativa y orientada a aprendizaje continuo.
            </p>
          </div>
          <div className="contact-actions">
            <a className="button primary" href={profile.linkedIn} target="_blank" rel="noreferrer">
              <ExternalLink size={18} aria-hidden="true" /> LinkedIn
            </a>
            <a className="button" href={profile.github} target="_blank" rel="noreferrer">
              <Code2 size={18} aria-hidden="true" /> GitHub
            </a>
            <a className="button" href={`mailto:${profile.email}`}>
              <Mail size={18} aria-hidden="true" /> {profile.email}
            </a>
          </div>
        </section>
      </main>

      {lightboxImage && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`Captura ampliada de MedSync: ${lightboxImage.label}`}>
          <button className="lightbox-backdrop" type="button" onClick={() => setLightboxImage(null)} aria-label="Cerrar captura ampliada" />
          <div className="lightbox-panel">
            <div className="lightbox-header">
              <span>MedSync · {lightboxImage.label}</span>
              <button type="button" onClick={() => setLightboxImage(null)} aria-label="Cerrar lightbox">
                Cerrar
              </button>
            </div>
            <img src={lightboxImage.src} alt={`Captura ampliada de MedSync ${lightboxImage.label}`} />
          </div>
        </div>
      )}
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
