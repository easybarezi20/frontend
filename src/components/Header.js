import React from 'react'
import './Header.css'

function Header() {
  return (
      <div id='nav'>
        <div className='nav-image'>
          <a className='name' href='/'>
            <img src='https://media.licdn.com/dms/image/D5603AQEI036YCC32EA/profile-displayphoto-shrink_800_800/0/1670988051202?e=1678924800&v=beta&t=0pUDhCYRRBCRoQ9uz03a26YNgGJY0EpplrOobXSTwLg' id='image'/>
          </a>
        </div>
        <div>
            <a className='links ' href='/about'><span className='colorchange'>01.</span> About</a>
            <a className='links ' href='/projects'><span className='colorchange'>02.</span> Projects</a>
        </div>
      </div>
  )
}

export default Header