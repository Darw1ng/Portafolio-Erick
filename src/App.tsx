import { useEffect } from 'react'
import { LangProvider } from './i18n/lang'
import { Nav } from './components/Nav'
import { Hero, StackMarquee } from './components/Hero'
import { About } from './components/About'
import { Capabilities } from './components/Capabilities'
import { Lab } from './components/Lab'
import { Projects } from './components/Projects'
import { Arcade } from './components/Arcade'
import { Contact, Experience } from './components/Experience'

export function App() {
  // el navegador intenta saltar al hash antes de que React monte las secciones: lo repetimos ya montado
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (!id) return
    // setTimeout y no rAF: en una pestaña que carga en segundo plano rAF no llega a correr
    const timer = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'auto', block: 'start' })
    }, 60)
    return () => clearTimeout(timer)
  }, [])

  return (
    <LangProvider>
      <Nav/>
      <main>
        <Hero/>
        <StackMarquee/>
        <About/>
        <Capabilities/>
        <Lab/>
        <Projects/>
        <Arcade/>
        <Experience/>
        <Contact/>
      </main>
    </LangProvider>
  )
}
