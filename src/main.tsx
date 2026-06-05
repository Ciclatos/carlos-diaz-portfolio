import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Code2,
  ExternalLink,
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
  email: "contacto@carlosdiaz.dev",
};

const projects = [
  {
    name: "PhyLab",
    url: "https://phylab-fisica-i.vercel.app/",
    image: "/projects/phylab.jpg",
    status: "Plataforma educativa",
    description:
      "Plataforma interactiva para Fisica I con simuladores, calculadoras, graficas dinamicas y un tutor IA contextual para reforzar el aprendizaje.",
    technologies: ["JavaScript", "Vite", "Node.js", "Express", "Chart.js", "Three.js", "IA integrada"],
    highlights: ["Simuladores", "Calculadoras", "Graficas", "Tutor IA"],
  },
  {
    name: "Project Pulse",
    url: "https://project-pulse-mu.vercel.app/",
    image: "/projects/project-pulse.jpg",
    status: "Activo y en evolucion",
    description:
      "Herramienta experimental para generar y manipular secuencias musicales mediante IA, explorando la relacion entre creatividad, programacion y modelos inteligentes.",
    technologies: ["IA", "Musica digital", "Interaccion creativa", "Web"],
    highlights: ["Secuencias musicales", "Experimentacion", "Creatividad asistida"],
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

function App() {
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
            <div className="about-photo">
              <img src="/assets/carlos-diaz.jpg" alt="Retrato profesional de Carlos Diaz" width="720" height="900" loading="lazy" />
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
                          <img src={item.src} alt={`MedSync ${item.label}`} loading="lazy" />
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
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
