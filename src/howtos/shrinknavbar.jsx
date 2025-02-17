import * as React from 'react';

import './shrinknavbar.css';
import Reference from '../comm/reference.jsx';


export default function ShrinkNavBar(){
  const [barpadding, setBarpadding] = React.useState("80px 10px");
  const [fsize, setFsize] = React.useState('35px');
  const [scrollval, setScrollval] = React.useState('0');

  React.useEffect(() => {
    //
    // define a function to handle scroll event
    const handleScroll = () => {
      const bodyscrolltop = document.body.scrollTop;
      const elemscrolltop = document.documentElement.scrollTop;
      //
      // for debug
      // const scrollY = window.scrollY;
      // console.log(bodyscrolltop.toString() + ' - ' + elemscrolltop.toString());

      if (bodyscrolltop > 80 || elemscrolltop > 80) {
        setBarpadding("30px 10px");
        setFsize("25px");
      } else {
        setBarpadding("80px 10px");
        setFsize("35px");
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='shrinknavbar'>

      <div id="navbar" style={{padding:`${barpadding}`}}>
        <a href="#default" id="logo" style={{fontSize:`${fsize}`}}>CompanyLogo</a>
        <div id="navbar-right">
          <a className="active" href="#home">Home</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </div>

      <div style={{marginTop:'210px', padding:'15px 15px 2500px', fontSize:'30px'}}>
        <p><b>This example demonstrates how to shrink a navigation bar when the user starts to scroll the page.</b></p>
        <p>Scroll down this frame to see the effect!</p>
        <p>Scroll to the top to remove the effect.</p>
        <p><b>Note:</b> We have also made the navbar responsive, resize the browser window to see the effect.</p>
        <p>Lorem ipsum dolor dummy text to enable scrolling, sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>

      <Reference
        title='Makeover in React'
        urlname='W3Schools How To: Shrink Navbar on Scroll'
        url='https://www.w3schools.com/howto/howto_js_navbar_shrink_scroll.asp'
      />
    </div>
  )
}
