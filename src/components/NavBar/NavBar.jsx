import React from 'react'
import images from '../../constants/images'

import './NavBar.scss'

const NavBar = () => {
  return (
    <nav>
      <div>
        <img src={images.logo} alt="logo" />
      </div>
      <ul>
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar