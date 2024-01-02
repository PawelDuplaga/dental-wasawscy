import React from 'react'
import styles from './home.module.scss'
import Navbar from '@/components/Navbar/Navbar'
import Hero from '@/components/Hero/Hero'

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Navbar />
      <Hero />
    </div>
  )
}

export default Home