// Image Magnifier Glass (Optional)
import * as React from 'react';

import './imagemagnifier.css';
import Reference from '../comm/reference.jsx';
import ImgSrc from '../imggallery/daibosatsuryo.webp';


export default function ImageMagnifier(){

  React.useEffect( () => {
    /* Initiate Magnify Function
    with the id of the image, and the strength of the magnifier glass:*/
    const imgID = 'myimage';
    const zoom = 3;
    const glassID = 'myglass';

    var img, glass, w, h, bw;
    img = document.getElementById(imgID);
    glass = document.getElementById(glassID);

    /*set background properties for the magnifier glass:*/
    glass.style.backgroundImage = "url('" + img.src + "')";
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
    bw = 3;
    w = glass.offsetWidth / 2;
    h = glass.offsetHeight / 2;

    /*execute a function when someone moves the magnifier glass over the image:*/
    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);
    /*and also for touch screens:*/
    glass.addEventListener("touchmove", moveMagnifier);
    img.addEventListener("touchmove", moveMagnifier);

    function moveMagnifier(e) {
      var pos, x, y;
      /*prevent any other actions that may occur when moving over the image*/
      e.preventDefault();
      /*get the cursor's x and y positions:*/
      pos = getCursorPos(e);
      x = pos.x;
      y = pos.y;
      /*prevent the magnifier glass from being positioned outside the image:*/
      if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
      if (x < w / zoom) {x = w / zoom;}
      if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
      if (y < h / zoom) {y = h / zoom;}

      /*set the position of the magnifier glass:*/
      glass.style.left = (x - w) + "px";
      glass.style.top = (y - h) + "px";
      /*display what the magnifier glass "sees":*/
      glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
    }
    function getCursorPos(e) {
      var a, x = 0, y = 0;
      e = e || window.event;
      /*get the x and y positions of the image:*/
      a = img.getBoundingClientRect();
      /*calculate the cursor's x and y coordinates, relative to the image:*/
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return {x : x, y : y};
    }

    return () => {
      glass.removeEventListener("mousemove", moveMagnifier);
      img.removeEventListener("mousemove", moveMagnifier);
      glass.removeEventListener("touchmove", moveMagnifier);
      img.removeEventListener("touchmove", moveMagnifier);
    }

  }, []);

  return (
    <div className='imagemagnifier'>
      <h1>Image Magnifier Glass</h1>

      <p>Mouse over the image:</p>

      <div className="img-magnifier-container">
        <div className='img-magnifier-glass' id='myglass' />
        <img id="myimage" src={ImgSrc} width="600" height="400" />
      </div>

      <p>Feel free to change the strength of the magnifier glass when initiating the magnify function.</p>

      <Reference
        title='Makeover in React'
        urlname='W3Schools How To: Image Magnifier Glass'
        url='https://www.w3schools.com/howto/howto_js_image_magnifier_glass.asp'
      />
    </div>
  )
}
