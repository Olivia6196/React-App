import Hero from "../components/Hero"
import Abouts from "../components/Abouts"
import Skill from "../components/Skill"
import Services from "../components/Services"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

function Home() {
  return (
    <>
      <Hero />
      <Abouts />
      <Skill />
      <Services />
      <Projects />
      <Contact />
    </>
  )
}

export default Home