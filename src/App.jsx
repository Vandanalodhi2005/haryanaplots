import React from 'react'
import { Routes , Route} from "react-router-dom"
import Home from './pages/Home.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import Project from './components/Project.jsx'
import Amenities from './components/Amenities.jsx'
import LocationMap from './components/LocationMap.jsx'
import RefundPolicy from './components/RefundPolicy.jsx'
import PlotRegistration from './components/PlotRegistration.jsx'
import SocialActions from './components/socialAction.jsx'
import Layout from './components/Layout.jsx'

function App() {
  return (
    
    <>
      <SocialActions />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="/amenities" element={<Amenities />} />
          <Route path="/location" element={<LocationMap />} />
          <Route path="/refundpolicy" element={<RefundPolicy />} />
          <Route path="/plotregistration" element={<PlotRegistration />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

