import * as React from 'react';
import {useNavigate} from 'react-router-dom';

import './sidenav.css'

import { MenuItemText, MenuItemPath } from '../comm/constants.js';

export default function SideNav(){
  const navigate = useNavigate();

  const [navwidth, setNavwidth] = React.useState(5);

  const closeNav = () => {
    setNavwidth(5);
  }
  const openNav = () => {
    setNavwidth(250);
  }

  return (
    <div>
      <div className="sidenav">
        <a className='howto' href="#" onClick={() => navigate(MenuItemPath.slideshow)}>{MenuItemText.slideshow}</a>
        <a className='howto' href="#">{MenuItemText.default}</a>
        <a className='howto' href="#">{MenuItemText.default}</a>
        <div className='note'>
          <p>Makeover in React</p>
          <a className='referto' href="https://www.w3schools.com/howto/default.asp">
            W3Schools How To: Sidenav overlay
          </a>
        </div>
      </div>

    </div>
  )
}

// <div className="sidenav" style={{width: `${navwidth}px`}}>
// <a href="#" className="closebtn" onClick={closeNav}>&times;</a>
// <h2>Animated Sidenav Example</h2>
// <p>Click on the element below to open the side navigation menu.</p>
// <span style={{fontSize:'30px', cursor:'pointer'}} onClick={openNav}>&#9776; open</span>
