import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import windowsFormsImg from '../assets/csharp.png';
import javaImg from '../assets/java.png';
import mobileImg from '../assets/mobile.png';
import siteImg from '../assets/site.png';
// Updated name to fix Vite import issue
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'TropSmart',
      description: 'App mobile para controle e auditoria de estoque em tempo real.',
      image: mobileImg,
      technologies: ['React Native', 'TypeScript', 'Styled Components'],
      githubUrl: 'https://github.com/',
      liveUrl: '',
    },
    {
      id: 2,
      title: 'Sistema Desktop JavaFX',
      description: 'Sistema desktop para controle de processos com Java e JavaFX.',
      image: javaImg,
      technologies: ['Java', 'Spring Boot', 'JavaFX', 'MySQL'],
      githubUrl: 'https://github.com/',
      liveUrl: '',
    },
    {
      id: 3,
      title: 'Sistema de Gestão (C#)',
      description: 'Programa para gestão de estoque, faturamento e clientes.',
      image: windowsFormsImg,
      technologies: ['C#', '.NET', 'Windows Forms', 'SQL Server'],
      githubUrl: 'https://github.com/',
      liveUrl: '',
    },
    {
      id: 4,
      title: 'Website Institucional',
      description: 'Site moderno com foco em performance e experiência do usuário.',
      image: siteImg,
      technologies: ['React', 'Tailwind CSS', 'Context API'],
      githubUrl: 'https://github.com/',
      liveUrl: '',
    },
  ];

  return (
    <section id="projects" className="section bg-darker">
      <div className="container ">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Meus Projetos
        </motion.h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="card group overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-80 bg-gray-900 overflow-hidden relative">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-contain ${project.id === 4 ? 'p-6' : ''} group-hover:scale-110 transition-transform duration-500`}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <h3 className="text-3xl font-black text-white/20 group-hover:text-white/40 group-hover:scale-110 transition-all duration-500 uppercase tracking-widest">{project.title}</h3>
                  </div>
                )}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-light group-hover:text-primary-light transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2.5 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3.5 py-1.5 bg-white/5 text-gray-400 text-xs font-bold rounded-lg border border-white/5 hover:border-primary/50 hover:bg-primary/5 hover:text-primary-light transition-all cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-6">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-primary-light font-bold flex items-center transition-colors text-sm"
                  >
                    <FontAwesomeIcon icon={faGithub} className="mr-2.5 text-lg" />
                    Código
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-secondary-light font-bold flex items-center transition-colors text-sm"
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2.5 text-lg" />
                      Demo Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <FontAwesomeIcon icon={faGithub} className="mr-2" />
            Ver Mais no GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 