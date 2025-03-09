import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Dashboard',
      description: 'Dashboard administrativo para e-commerce com análise de vendas, gerenciamento de produtos e relatórios.',
      image: 'ecommerce-dashboard.jpg',
      technologies: ['React.js', 'ASP.NET Core', 'SQL Server', 'Bootstrap'],
      githubUrl: 'https://github.com/',
      liveUrl: 'https://example.com/',
    },
    {
      id: 2,
      title: 'Sistema de Gestão',
      description: 'Aplicação desktop para gestão empresarial com controle de estoque, vendas e financeiro.',
      image: 'sistema-gestao.jpg',
      technologies: ['Windows Forms', '.NET Framework', 'SQL Server'],
      githubUrl: 'https://github.com/',
      liveUrl: '',
    },
    {
      id: 3,
      title: 'Aplicativo de Tarefas',
      description: 'Aplicativo web para gerenciamento de tarefas com recursos de priorização e categorização.',
      image: 'task-app.jpg',
      technologies: ['React.js', 'Tailwind CSS', 'Firebase'],
      githubUrl: 'https://github.com/',
      liveUrl: 'https://example.com/',
    },
    {
      id: 4,
      title: 'API de Pagamentos',
      description: 'API RESTful para processamento de pagamentos com integração a gateways populares.',
      image: 'payment-api.jpg',
      technologies: ['ASP.NET Core', 'Entity Framework', 'SQL Server'],
      githubUrl: 'https://github.com/',
      liveUrl: '',
    },
    {
      id: 5,
      title: 'Site Institucional',
      description: 'Site responsivo para empresa de consultoria com seções informativas e formulário de contato.',
      image: 'site-institucional.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      githubUrl: 'https://github.com/',
      liveUrl: 'https://example.com/',
    },
    {
      id: 6,
      title: 'Blog Pessoal',
      description: 'Blog com sistema de gerenciamento de conteúdo personalizado e recursos de comentários.',
      image: 'blog.jpg',
      technologies: ['React.js', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com/',
      liveUrl: 'https://example.com/',
    },
  ];

  return (
    <section id="projects" className="section bg-white">
      <div className="container ">
        <motion.h2 
          className="section-title text-dark"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Meus Projetos
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-48 bg-gray-200 relative">
                {/* Placeholder para imagem do projeto */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <h3 className="text-xl font-bold text-dark">{project.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-primary transition-colors"
                    aria-label={`Ver código do projeto ${project.title} no GitHub`}
                  >
                    <FontAwesomeIcon icon={faGithub} className="mr-2" />
                    Código
                  </a>
                  
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-primary transition-colors"
                      aria-label={`Ver demonstração do projeto ${project.title}`}
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2" />
                      Demo
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