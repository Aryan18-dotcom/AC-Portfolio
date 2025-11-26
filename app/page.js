import React from 'react'
import NavBar from './navBar'
import { HeroSection } from './heroSection'
import Stack from './stack'
import Container from '@/components/helpingCompo/container'
import Experience from './experience'
import Spotify from './spotify'
import Projects from './Projects'
import AboutMe from './aboutMe'
import HomeBlogs from './homeBlogs'
import BookFreeCall from './bookCall'
import Quote from './quote'
import Footer from './footer'
import Loader from './loader'

const page = () => {
  return (
    <Container className='min-h-screen max-w-3xl mx-auto flex-col'>
      <Loader />
      <NavBar />
      <HeroSection />
      <Projects />
      <Stack />
      <Experience />
      <AboutMe />
      <Spotify />
      {/* Maybe Github active status */}
      <HomeBlogs />
      <BookFreeCall />
      <Quote />
      <Footer />
    </Container>
  )
}

export default page