// Definição das rotas do portfólio
export const routes = {
  home: '#home',
  about: '#about',
  skills: '#skills',
  projects: '#projects',
  contact: '#contact',
};

// Função para navegar para uma seção específica
export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Função para obter a seção atual com base na posição de rolagem
export const getCurrentSection = (): string => {
  const sections = ['home', 'about', 'skills', 'projects', 'contact'];
  
  for (const section of sections) {
    const element = document.getElementById(section);
    if (element) {
      const rect = element.getBoundingClientRect();
      // Se o topo da seção estiver próximo do topo da viewport
      if (rect.top <= 100 && rect.bottom >= 100) {
        return section;
      }
    }
  }
  
  return 'home'; // Padrão para a página inicial
}; 