import React from 'react'
import { Routes , Route} from "react-router-dom"
import Home from './pages/Home.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import Project from './components/Project.jsx'
import RefundPolicy from './components/RefundPolicy.jsx'
import PlotRegistration from './components/PlotRegistration.jsx'
import SocialActions from './components/socialAction.jsx'

function App() {
  return (
    
    <>
    <SocialActions />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/project" element={<Project />} />
         <Route path="/refundpolicy" element={<RefundPolicy />} />
         <Route path="/plotregistration" element={<PlotRegistration />} />


         </Routes>
    </>
  )
}

export default App

