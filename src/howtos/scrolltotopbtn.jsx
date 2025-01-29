import * as React from 'react';

import './scrolltotopbtn.css';
import Reference from '../comm/reference.jsx';


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

export default function ScrollToTopBtn(){
  const btnref = React.useRef(null);

  React.useEffect(() => {
    //
    // define a function to handle scroll event
    const handleScroll = () => {
      const bodyscrolltop = document.body.scrollTop;
      const elemscrolltop = document.documentElement.scrollTop;

      console.log(bodyscrolltop.toString() + ' - ' + elemscrolltop.toString());

      if (bodyscrolltop > 20 || elemscrolltop > 20) {
        btnref.current.style.display = "block";
      } else {
        btnref.current.style.display = "none";
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='scrolltotopbtn'>

      <button
        onClick={topFunction}
        id="myBtn"
        title="Go to top"
        ref={btnref}
      >
        Top
      </button>

      <div style={{backgroundColor:'#aaa', color:'white', padding:'30px'}}>
      Scroll Down
      </div>
      <div style={{backgroundColor:'lightgrey', padding:'30px 30px 2500px'}}>
        This example demonstrates how to create a "scroll to top" button
        that becomes visible <strong>when the user starts to scroll the page</strong>.
      </div>

      <Reference
        title='Makeover in React'
        urlname='W3Schools How To: Scroll To Top Button'
        url='https://www.w3schools.com/howto/.asp'
      />
    </div>
  )
}



  // // Get the button
  // let mybutton = document.getElementById("myBtn");
  //
  // // When the user scrolls down 20px from the top of the document, show the button
  // window.onscroll = function() {scrollFunction()};
  //
  // function scrollFunction() {
