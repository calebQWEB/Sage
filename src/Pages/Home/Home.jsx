import React from 'react'
import Hero from './Sections/Hero'
import TopSages from './Sections/TopSages'
import FeaturedBooks from './Sections/FeaturedBooks'
import { styles } from '../../styles'
import About from './Sections/About'
import Quote from './Sections/Quote'

const Home = () => {
  return (
    <main className={`${styles.padding}`}>
      <Hero />
      <TopSages />
      <FeaturedBooks />
      <About />
      <Quote />
    </main>
  )
}

export default Home