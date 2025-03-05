import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import profilfImage from "../assets/result.png"

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-dark to-darker pt-16" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232d2d2d' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E")`
    }}>
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Olá, eu sou <span className="text-primary">Miranda Maunze</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
              Desenvolvedor <span className="text-secondary">Full Stack</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Especializado em React.js, Node.js, ASP.NET Core, Windows Forms, Bootstrap, CSS e HTML.
              Criando soluções web modernas e responsivas.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn btn-primary">
                Entre em Contato
              </a>
              <a href="#projects" className="btn btn-outline">
                Ver Projetos
              </a>
            </div>
            <div className="flex mt-8 space-x-4">
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-primary transition-colors"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-primary transition-colors"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 bg-primary rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-4 bg-secondary rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
              <div className="absolute inset-8 bg-darker rounded-full shadow-lg overflow-hidden border border-gray-800">
                {/* Placeholder para foto de perfil */}
                <div className="w-full h-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center text-4xl font-bold text-white">
                  <img src={profilfImage} alt="Miranda"  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
        >
          <a href="#about" className="text-gray-400 hover:text-primary transition-colors">
            <span className="block mb-2 text-sm">Rolar para baixo</span>
            <FontAwesomeIcon icon={faArrowDown} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 