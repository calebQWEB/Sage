import React from 'react'
import {styles} from '../../../styles'
import AboutCardContainer from '../Components/AboutCardContainer'
import AboutCard from '../Components/AboutCard'

const About = () => {
  return (
    <section className={`${styles.paddingY}`}>
      <h1 className={`${styles.sectionHeadText} text-center sm:text-start`}><span className='text-white-100'>Millions </span>of readers use<br/> sage because?</h1>
      
      <AboutCardContainer />
    </section>
  )
}

export default About