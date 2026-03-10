import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import About from "./routes/About"
import "./index.css"
import Contact from "./components/Contact"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
       <Contact />
      <Footer />
    </>
  )
}

export default App