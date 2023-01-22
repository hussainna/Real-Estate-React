import React from 'react'
import './home.css'
import '../sass/main.scss'
import Header from './header/Header'
import Top from './top/Top'
import Hero from './hero/Hero'
import About from './about/About'
import Services from './services/Services'
import Blog from './blog/Blog'
import Footer from './footer/Footer'
function Home() {
  return (
    <div>
      <Top/>
      <Header/>
      <Hero/>
      <About/>
      <Services/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default Home