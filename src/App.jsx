import About from "./components/About"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Services from "./components/Services"
import "boxicons/css/boxicons.min.css"
import "./index.css"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Skill from "./components/Skill"
function App() {
  return (
    <>
     <Navbar />
      <Hero />
      <About />
      <Skill />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
