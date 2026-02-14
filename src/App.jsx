import About from "./components/About"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Services from "./components/Services"
import "boxicons/css/boxicons.min.css"
import "./index.css"
import Contact from "./components/Contact"
function App() {
  return (
    <>
    <body className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
    </body>
    </>
  )
}

export default App
