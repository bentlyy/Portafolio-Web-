import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import NebulaParticles from "@/components/NebulaParticles"
import ScrollIndicator from "@/components/ScrollIndicator"

export default function Home() {
  return (
    <main className="min-h-screen nebula-bg">
      <NebulaParticles />
      <ScrollIndicator />
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
