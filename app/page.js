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
    <Container className='min-h-screen md:max-w-3xl 2xl:max-w-6xl mx-auto flex-col md:px-0 px-4'>
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