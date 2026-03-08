import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3Alt, faJs, faBootstrap, faGitAlt, faMicrosoft, faNodeJs, faJava } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faServer, faDesktop, faMobileAlt, faBrain, faRobot } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    {
      category: 'Frontend',
      items: [
        { name: 'React.js', icon: faReact, level: 90 },
        { name: 'TypeScript', icon: faJs, level: 85 },
        { name: 'HTML5', icon: faHtml5, level: 95 },
        { name: 'CSS3', icon: faCss3Alt, level: 90 },
        { name: 'JavaScript', icon: faJs, level: 85 },
        { name: 'Bootstrap', icon: faBootstrap, level: 85 },
        { name: 'Tailwind CSS', icon: faCss3Alt, level: 80 },
      ],
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', icon: faNodeJs, level: 85 },
        { name: 'NestJS', icon: faServer, level: 80 },
        { name: 'Java Spring Boot', icon: faJava, level: 80 },
        { name: 'MySQL', icon: faDatabase, level: 85 },
        { name: 'ASP.NET Core', icon: faMicrosoft, level: 85 },
        { name: 'Arquitetura MVC', icon: faServer, level: 90 },
        { name: 'SQL Server', icon: faDatabase, level: 80 },
        { name: 'API REST', icon: faServer, level: 85 },
      ],
    },
    {
      category: 'IA & Inovação',
      items: [
        { name: 'Antigravity', icon: faRobot, level: 95 },
        { name: 'Desenvolvimento com IA', icon: faBrain, level: 90 },
      ],
    },
    {
      category: 'Outros',
      items: [
        { name: 'React Native', icon: faMobileAlt, level: 80 },
        { name: 'JavaFX', icon: faDesktop, level: 85 },
        { name: 'Windows Forms', icon: faDesktop, level: 90 },
        { name: 'Git', icon: faGitAlt, level: 80 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="section bg-darker">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Minhas Habilidades
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              className="card p-8 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-8 text-center text-primary-light group-hover:text-secondary transition-colors">
                {skillGroup.category}
              </h3>

              <motion.div
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {skillGroup.items.map((skill) => (
                  <motion.div key={skill.name} variants={itemVariants}>
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="flex items-center">
                        <FontAwesomeIcon
                          icon={skill.icon}
                          className="text-2xl text-secondary-light mr-3 transition-transform group-hover:scale-110"
                        />
                        <span className="font-semibold text-gray-200">{skill.name}</span>
                      </div>
                      <span className="text-xs font-bold text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                      <motion.div
                        className="bg-gradient-to-r from-primary to-secondary h-full rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 