import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div id='footer'>
      <a href='https://www.linkedin.com/in/barezi-morales/'>
        <img src='https://cdn-icons-png.flaticon.com/128/3800/3800073.png' className='footer-image'/>
      </a>
      <h1 className='slash'>/</h1>
      <a href='https://github.com/easybarezi20'>
      <img src='https://cdn-icons-png.flaticon.com/128/1051/1051326.png' className='footer-image'/>
      </a>
    </div>
  )
}

export default Footer