import React from 'react'
import Navbar from './components/Navbar'
import Page1 from './components/Page1/Video'
import Page3 from './components/Page3/Page3'
import Page2 from './components/Page2/Slider'
import Podcast from './components/Page4/Page4'
import Footer from './components/Footer'
import Page5 from './components/Page5/Page5'

const App = () => {
  return (
    <div className='bg-[#FFFDF5]'>
      <Navbar/>
      <Page1/>
      <Page2/>
      <Page3/>
      <Podcast/>
      <Page5/>
      <Footer/>
    </div>
  )
}

export default App