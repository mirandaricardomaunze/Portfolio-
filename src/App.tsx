import { useEffect } from 'react'
import Layout from './pages/Layout'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import SkillsPage from './pages/SkillsPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'
import './index.css'

function App() {
  // Efeito para aplicar o título da página
  useEffect(() => {
    document.title = 'Miranda Maunze | Desenvolvedor Full Stack'
  }, [])

  return (
    <Layout>
      <Home />
      <AboutPage />
      <SkillsPage />
      <ProjectsPage />
      <ContactPage />
    </Layout>
  )
}

export default App
