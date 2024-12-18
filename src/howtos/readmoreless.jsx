import * as React from 'react';

import './readmoreless.css';
import Reference from '../comm/reference.jsx';

/*
Directly Manipulate DOM - the original way

any disadvantages or incompatibility?
need to find out

*/
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}


export default function ReadMoreLess(){

  const refbtn = React.useRef(null);
  const [dotdisplay, setDotdisplay] = React.useState(true);
  const [isdisplay, setIsdisplay] = React.useState(false);

  const rwmyFunction = () => {
    if (!isdisplay) {
      refbtn.current.innerHTML = 'Read less';
    } else {
      refbtn.current.innerHTML = 'Read more';
    }
    setDotdisplay(!dotdisplay);
    setIsdisplay(!isdisplay);
  }

  return (
    <div className='readmoreless'>
      <h2>Read More Read Less Button - Original Way</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel
      <span id="dots">...</span>
      <span id="more">
        erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec
        congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut
        aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac.
        In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec
        vitae dui eget tellus gravida venenatis. Integer fringilla congue eros
        non fermentum. Sed dapibus pulvinar nibh tempor porta.
      </span>
      </p>
      <button onClick={myFunction} id="myBtn" className='morelessbtn'>
        Read more
      </button>

      <br/>
      <br/>
      <h2>Read More Read Less Button - React Way</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel
      {dotdisplay && <span>...</span>}
      {isdisplay && <span>
        erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec
        congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut
        aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac.
        In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec
        vitae dui eget tellus gravida venenatis. Integer fringilla congue eros
        non fermentum. Sed dapibus pulvinar nibh tempor porta.
      </span>}
      </p>
      <button onClick={rwmyFunction} className='morelessbtn' ref={refbtn}>
        Read more
      </button>

      <Reference
        title='Makeover in React'
        urlname='W3Schools How To: Read More Read Less'
        url='https://www.w3schools.com/howto/howto_js_read_more.asp'
      />
    </div>
  )
}
