// Image Zoom
import * as React from 'react';

import Reference from '../comm/reference.jsx';
import './imagezoom.css';
import ImgSrc from '../imggallery/daibosatsuryo.webp';


export default function ImageZoom(){

  React.useEffect( () => {
    const imgID = "myimage";
    const resultID = "myresult";
    const lensID = 'mylens';

    var img, lens, result, cx, cy;
    img = document.getElementById(imgID);
    result = document.getElementById(resultID);
    lens = document.getElementById(lensID);

    /*calculate the ratio between result DIV and lens:*/
    cx = result.offsetWidth / lens.offsetWidth;
    cy = result.offsetHeight / lens.offsetHeight;

    /*set background properties for the result DIV:*/
    result.style.backgroundImage = "url('" + img.src + "')";
    result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";

    /*execute a function when someone moves the cursor over the image, or the lens:*/
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);
    /*and also for touch screens:*/
    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);

    function moveLens(e) {
      var pos, x, y;
      /*prevent any other actions that may occur when moving over the image:*/
      e.preventDefault();
      /*get the cursor's x and y positions:*/
      pos = getCursorPos(e);
      /*calculate the position of the lens:*/
      x = pos.x - (lens.offsetWidth / 2);
      y = pos.y - (lens.offsetHeight / 2);
      /*prevent the lens from being positioned outside the image:*/
      if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
      if (x < 0) {x = 0;}
      if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
      if (y < 0) {y = 0;}
      /*set the position of the lens:*/
      lens.style.left = x + "px";
      lens.style.top = y + "px";
      /*display what the lens "sees":*/
      result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
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
      lens.removeEventListener("mousemove", moveLens);
      img.removeEventListener("mousemove", moveLens);
      lens.removeEventListener("touchmove", moveLens);
      img.removeEventListener("touchmove", moveLens);
    }
  }, []);

  return(
    <div className='imagezoom'>
      <h1>Image Zoom</h1>

      <p>Mouse over the image:</p>

      <div className='row'>
      <div className="img-zoom-container">
        <div className="img-zoom-lens" id='mylens'/>
        <img id="myimage" src={ImgSrc} width="300" height="240" />
      </div>
      <div id="myresult" className="img-zoom-result"></div>
      </div>

      <p>The image must be placed inside a container with relative positioning.</p>
      <p>The result can be put anywhere on the page, but must have the class name "img-zoom-result".</p>
      <p>Make sure both the image and the result have IDs. These IDs are used when a javaScript initiates the zoom effect.</p>

      <Reference
        title='Makeover in React'
        urlname='W3Schools How To: Image Zoom'
        url='https://www.w3schools.com/howto/howto_js_image_zoom.asp'
      />
    </div>
  )
}
