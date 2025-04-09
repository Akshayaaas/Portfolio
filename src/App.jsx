import { BrowserRouter } from "react-router-dom"
import About from "./components/canvas/About"
import Navbar from "./components/canvas/Navbar"
import Hero from "./components/canvas/Hero"
import Experience from "./components/canvas/Experience"
import Tech from "./components/canvas/Tech"
import Works from "./components/canvas/Works"
import Contact from "./components/canvas/Contact"
import StarsCanvas from "./components/canvas/Stars"



function App() {
  
  return (
    <BrowserRouter>
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center bg-[length:130%] bg-top' >
        <Navbar />
        <div className="pt-20">
        <Hero />
      
      
      <About />
      <Experience />
      <Tech />
      <Works />
     
      <div className='relative z-0'>
        <Contact />
      <StarsCanvas />
        </div>
        </div>
        
      </div>
    </div>
  </BrowserRouter>
      
  )
}

export default App
