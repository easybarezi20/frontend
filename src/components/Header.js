import React from 'react'
import './Header.css'

function Header() {
  return (
      <div id='nav'>
        <div className='nav-image'>
          <a className='name' href='/'>
            <img src='https://cdn-icons-png.flaticon.com/128/3096/3096985.png' id='image' key='headshot'/>
          </a>
        </div>
        <div>
            <a className='links ' href='/about'><span className='colorchange'>01.</span> About</a>
            <a className='links ' href='/projects'><span className='colorchange'>02.</span> Projects</a>
            <a className='links ' href='/resume'><span className='colorchange'>03.</span> Resume</a>
        </div>
        
      </div>
  )
}

export default Header