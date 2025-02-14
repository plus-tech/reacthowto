//-------------- Image comparison slider

import * as React from 'react';

import Reference from '../comm/reference.jsx';
import './compareimg.css';
import ImageBenchmark from '../imggallery/daibosatsuryo.webp';
import ImageOverlay from '../imggallery/mizugakiyama.webp';


export default function CompareImg(){
  const refbenchmark = React.useRef(null);
  const refslider = React.useRef(null);
  const refoverlay = React.useRef(null);

  React.useEffect(() => {
    var imgbh, imgol;
    var clicked = 0, imgWidth, imgHeight;

    /*get the width and height of the img element*/
    imgWidth = refbenchmark.current.offsetWidth;
    imgHeight = refbenchmark.current.offsetHeight;

    /*set the width of the img element to 50%:*/
    refoverlay.current.style.width = (imgWidth / 2) + "px";

    /*set the top and left of the slider element*/
    refslider.current.style.top = (imgHeight / 2) - (refslider.current.offsetHeight / 2) + "px";
    refslider.current.style.left = (imgWidth / 2) - (refslider.current.offsetWidth / 2) + "px";

    /* when the slider is clicked */
    refslider.current.addEventListener("mousedown", slideReady);
    /*or touched (for touch screens:*/
    refslider.current.addEventListener("touchstart", slideReady);

    /*and another function when the mouse button is released:*/
    window.addEventListener("mouseup", slideFinish);
    /*and released (for touch screens:*/
    window.addEventListener("touchend", slideFinish);

    /*execute a function when the slider is moved:*/
    window.addEventListener("mousemove", slideMove);
    window.addEventListener("touchmove", slideMove);

    function slideReady(e) {
      /*prevent any other actions that may occur when moving over the image:*/
      e.preventDefault();
      /*the slider is now clicked and ready to move:*/
      clicked = 1;
    }

    function slideFinish() {
      /*the slider is no longer clicked:*/
      clicked = 0;
    }

    function slideMove(e) {
      var pos;
      /*if the slider is no longer clicked, exit this function:*/
      if (clicked == 0) return false;
      /*get the cursor's x position:*/
      pos = getCursorPos(e)
      /*prevent the slider from being positioned outside the image:*/
      if (pos < 0) pos = 0;
      if (pos > imgWidth) pos = imgWidth;
      /*execute a function that will resize the overlay image according to the cursor:*/
      slide(pos);
    }

    function getCursorPos(e) {
      var img, cursorX = 0;
      e = (e.changedTouches) ? e.changedTouches[0] : e;
      /*get the x positions of the image:*/
      img = refoverlay.current.getBoundingClientRect();
      /*calculate the cursor's x coordinate, relative to the image:*/
      cursorX = e.pageX - img.left;
      /*consider any page scrolling:*/
      cursorX = cursorX - window.pageXOffset;
      return cursorX;
    }

    function slide(posX) {
      /*resize the image:*/
      refoverlay.current.style.width = posX + "px";

      /*position the slider:*/
      refslider.current.style.left = refoverlay.current.offsetWidth - (refslider.current.offsetWidth / 2) + "px";
    }

    return () => {
      // refslider.current.removeEventListener("mousedown", slideReady);
      // refslider.current.removeEventListener("touchstart", slideReady);

      window.removeEventListener("mouseup", slideFinish);
      window.removeEventListener("touchend", slideFinish);

      window.removeEventListener("mousemove", slideMove);
      window.removeEventListener("touchmove", slideMove);
    }
  }, []);

  return (
    <div className='compareimg'>
      <h1>Compare Two Images</h1>

      <p>Click and slide the blue slider to compare two images:</p>

      <div className="img-comp-container">
        <div className="img-comp-img" ref={refbenchmark}>
          <img src={ImageBenchmark} />
        </div>

        <div className='img-comp-slider' ref={refslider}>
        </div>

        <div className="img-comp-img img-comp-overlay" ref={refoverlay}>
          <img src={ImageOverlay} />
        </div>
      </div>

      <Reference
        title='Makeover in React'
        urlname='W3Schools How To: Image Comparison Slider'
        url='https://www.w3schools.com/howto/howto_js_image_comparison.asp'
      />
    </div>
  )
}
