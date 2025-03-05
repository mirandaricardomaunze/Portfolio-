import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: faGithub,
      url: 'https://github.com/',
      label: 'GitHub',
    },
    {
      icon: faLinkedin,
      url: 'https://linkedin.com/',
      label: 'LinkedIn',
    },
    {
      icon: faTwitter,
      url: 'https://twitter.com/',
      label: 'Twitter',
    },
  ];
  
  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <footer className="bg-dark text-white py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-white">
              Miranda<span className="text-primary">Maunze</span>
            </a>
            <p className="mt-2 text-gray-400">
              Desenvolvedor Full Stack especializado em React.js e ASP.NET Core
            </p>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-primary hover:bg-gray-700 transition-all"
                aria-label={social.label}
              >
                <FontAwesomeIcon icon={social.icon} />
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">
                &copy; {currentYear} Miranda Maunze. Todos os direitos reservados.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center mt-6 text-gray-500 text-sm">
          <p>
            Desenvolvido com <FontAwesomeIcon icon={faHeart} className="text-red-500 mx-1" /> usando React.js e Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 