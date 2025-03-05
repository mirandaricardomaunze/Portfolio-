import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3Alt, faJs, faBootstrap, faGitAlt, faMicrosoft, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faServer, faDesktop } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    {
      category: 'Frontend',
      items: [
        { name: 'React.js', icon: faReact, level: 90 },
        { name: 'HTML5', icon: faHtml5, level: 95 },
        { name: 'CSS3', icon: faCss3Alt, level: 90 },
        { name: 'JavaScript', icon: faJs, level: 85 },
        { name: 'Bootstrap', icon: faBootstrap, level: 85 },
      ],
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', icon: faNodeJs, level: 85 },
        { name: 'ASP.NET Core', icon: faMicrosoft, level: 85 },
        { name: 'SQL Server', icon: faDatabase, level: 80 },
        { name: 'Web API', icon: faServer, level: 85 },
      ],
    },
    {
      category: 'Outros',
      items: [
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              className="card p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-bold mb-6 text-center text-primary">
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
                    <div className="flex items-center mb-2">
                      <FontAwesomeIcon 
                        icon={skill.icon} 
                        className="text-2xl text-secondary mr-3" 
                      />
                      <span className="font-medium text-gray-300">{skill.name}</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2.5">
                      <div 
                        className="bg-primary h-2.5 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
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