import React from 'react'
import Hero from '../Components/Hero'
import AboutSection from '../Components/About'
import MissionVision from '../Components/MissionVision'
import ProductSection from '../Components/ProductSection'
import Services from '../Components/Services'
import Projects from '../Components/Projects'
import Insights from '../Components/Insights'
import Team from '../Components/Team'
import CTA from '../Components/CTA'

const Home = () => {
  return (
    <div>
        <Hero/>
        <AboutSection/>
        <MissionVision/>
        <ProductSection/>
        <Services/>
        <Projects/>
        <Insights/>
        <Team/>
        <CTA/>
    </div>
  )
}

export default Home