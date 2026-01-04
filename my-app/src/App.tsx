import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutMe from './components/AboutMe'
import ContactCTA from './components/ContactCta'
import Hero from './components/HeroSection'
import Navbar from './components/Navbar'
import Projects from './components/MyProjects'
import POSProjectDetails from './components/POSProjectDetails'
import DataVizDetails from './components/DataViz'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Main Portfolio Page */}
        <Route path="/" element={
          <>
            <Hero profileImage={'/prof.png'} />
            <AboutMe />
            <Projects />
            <ContactCTA />
          </>
        } />

        <Route path="/project/swiftpos" element={<POSProjectDetails />} />
        <Route path="/project/dataviz-dashboard" element={<DataVizDetails />} />
      </Routes>
    </Router>
  )
}

export default App