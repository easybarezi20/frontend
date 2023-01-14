import React from 'react'
import './Home.css'

function Home(props) {
  return (
    <div id='container'>
        <div id='home-title-container'>
            <p className='title'><span className='colorchange'>Hi, my name is</span></p>
            <p className='title-name'><span className='colorchange2'>Barezi Morales.</span></p>
            <p className='description-home'>I build stuff, mainly with JavaScript.</p>
            <p className='description-home-2'>Im a <span className='colorchange'>software engineer</span> specializing in building (and occasionally
              designing) exceptional digital experiences. Currently, I've graduated 
              from General Assembly and building side projects on my spare time.
            </p>
        </div>
    </div>
  )
}

export default Home