import React from 'react'

import IntroSection from './components/intro/Intro'
import ContactSection from './components/contact-section/ContactSection'
import DisclaimerSection from './components/disclaimer/Disclaimer'
import FooterSection from './components/footer/Footer'
import Map from './components/map/Map'
import './App.css'

const location={
  address:'Kenyatta International Convention Centre',
  lat:-1.288693,
  lng:36.823103
}

function App() {
  return (
    <div className="App">
      <IntroSection />
      <ContactSection />
      <Map location={location} zoomLevel={17} />
      <DisclaimerSection />
      <FooterSection />
    </div>
  )
}

export default App
