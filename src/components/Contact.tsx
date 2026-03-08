import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faPaperPlane,
  faCheckCircle,
  faExclamationTriangle,
  faInfoCircle
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: '', text: '', title: '' });

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Reset previous messages
    setSubmitMessage({ type: '', text: '', title: '' });

    // Validation
    const name = formData.name.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    if (!name || !email || !subject || !message) {
      setSubmitMessage({
        type: 'error',
        title: 'Campos Incompletos',
        text: 'Por favor, preencha todos os campos obrigatórios antes de enviar.',
      });
      return;
    }

    if (!validateEmail(email)) {
      setSubmitMessage({
        type: 'error',
        title: 'Email Inválido',
        text: 'Por favor, insira um endereço de email válido para que eu possa responder.',
      });
      return;
    }

    setIsSubmitting(true);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: name,
      reply_to: email,
      subject: subject,
      message: message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setIsSubmitting(false);
        setSubmitMessage({
          type: 'success',
          title: 'Mensagem Enviada!',
          text: 'Obrigado por entrar em contato. Responderei o mais breve possível.',
        });

        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });

        setTimeout(() => {
          setSubmitMessage({ type: '', text: '', title: '' });
        }, 8000);
      }, (error) => {
        setIsSubmitting(false);
        setSubmitMessage({
          type: 'error',
          title: 'Falha no Envio',
          text: 'Houve um problema técnico. Por favor, tente novamente ou use outro canal de contato.',
        });
        console.error('EmailJS Error:', error);
      });
  };

  const contactInfo = [
    {
      icon: faEnvelope,
      label: 'Email',
      value: 'mirandamaunze122@gmail.com',
      link: 'mailto:mirandamaunze122@gmail.com',
    },
    {
      icon: faPhone,
      label: 'Telefone',
      value: '+258 (84) 7750-120',
      link: 'tel:+258847750120',
    },
    {
      icon: faMapMarkerAlt,
      label: 'Localização',
      value: 'Maputo, Moçambique',
      link: '',
    },
  ];

  const socialLinks = [
    {
      icon: faGithub,
      label: 'GitHub',
      link: 'https://github.com/',
    },
    {
      icon: faLinkedin,
      label: 'LinkedIn',
      link: 'https://linkedin.com/',
    },
  ];

  return (
    <section id="contact" className="section bg-darker">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Entre em Contato
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Vamos Conversar</h3>
            <p className="text-gray-400 mb-8">
              Estou disponível para projetos freelance, oportunidades de trabalho ou apenas para trocar ideias sobre desenvolvimento.
              Preencha o formulário ou entre em contato através dos canais abaixo.
            </p>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white mr-4">
                    <FontAwesomeIcon icon={info.icon} />
                  </div>
                  <div>
                    <h4 className="font-bold">{info.label}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-400 hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-400">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-dark/50 rounded-full flex items-center justify-center text-xl text-gray-400 hover:text-primary hover:shadow-md transition-all border border-white/5"
                  aria-label={social.label}
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="card p-8">
              <AnimatePresence>
                {submitMessage.text && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`mb-8 p-4 rounded-lg flex items-start space-x-4 border ${submitMessage.type === 'success'
                        ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                        : 'bg-rose-500/10 border-rose-500/20 text-rose-400'
                      }`}
                  >
                    <div className={`mt-1 flex-shrink-0 ${submitMessage.type === 'success' ? 'text-emerald-500' : 'text-rose-500'
                      }`}>
                      <FontAwesomeIcon
                        icon={submitMessage.type === 'success' ? faCheckCircle : (submitMessage.type === 'error' ? faExclamationTriangle : faInfoCircle)}
                        size="lg"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-1 uppercase tracking-wider">{submitMessage.title}</h4>
                      <p className="text-sm opacity-90 leading-relaxed font-light">{submitMessage.text}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Seu nome completo"
                  className="w-full px-4 py-2 bg-dark border border-white/10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-gray-600"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="seu@email.com"
                  className="w-full px-4 py-2 bg-dark border border-white/10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-gray-600"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Como posso te ajudar?"
                  className="w-full px-4 py-2 bg-dark border border-white/10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-gray-600"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Escreva sua mensagem aqui..."
                  className="w-full px-4 py-2 bg-dark border border-white/10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-gray-600 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn btn-primary w-full flex items-center justify-center h-12 transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02]'
                  }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Enviando...</span>
                  </div>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                    Enviar Mensagem
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
