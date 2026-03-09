import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCode, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section bg-dark">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Sobre Mim
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white mr-4">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <h3 className="text-xl font-bold">Quem Sou</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Com experiência sólida em React e Node.js, aplico Arquitetura MVC e uso de IA (Antigravity) para entregar softwares de alta performance e código limpo.
              </p>
              <p className="text-gray-300">
                Minha abordagem combina habilidades técnicas sólidas com uma forte compreensão das
                necessidades do usuário, resultando em produtos que não apenas funcionam bem, mas também
                proporcionam uma experiência excepcional.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card p-4">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white mr-3">
                  <FontAwesomeIcon icon={faCode} />
                </div>
                <h3 className="text-lg font-bold">Tecnologias Principais</h3>
              </div>
              <p className="text-gray-300">
                React.js, Node.js, API REST, NestJS, IA & Antigravity, Arquitetura MVC, Java Spring Boot e React Native.
              </p>
            </div>

            <div className="card p-4">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white mr-3">
                  <FontAwesomeIcon icon={faBriefcase} />
                </div>
                <h3 className="text-lg font-bold">Experiência Profissional</h3>
              </div>
              <p className="text-gray-300">
                Desenvolvimento de aplicações web modernas, sistemas desktop robustos e aplicativos mobile de alta performance.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="#skills" className="btn btn-primary">
            Minhas Habilidades
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 