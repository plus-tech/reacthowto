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


// function initComparisons() {
//   var x, i;
//   /*find all elements with an "overlay" class:*/
//   x = document.getElementsByClassName("img-comp-overlay");
//
//   // for debug, to be deleted
//   console.log('# of overlay: ', x.length);
//
//   for (i = 0; i < x.length; i++) {
//     /*once for each "overlay" element:
//     pass the "overlay" element as a parameter when executing the compareImages function:*/
//     compareImages(x[i]);
//   }
//   function compareImages(img) {
//     var slider, img, clicked = 0, w, h;
//     /*get the width and height of the img element*/
//     w = img.offsetWidth;
//     h = img.offsetHeight;
//     /*set the width of the img element to 50%:*/
//     img.style.width = (w / 2) + "px";
//
//     // for debug, to be deleted
//     console.log('img width at initial load: ', img.style.width);
//
//     /*create slider:*/
//     slider = document.createElement("DIV");
//     slider.setAttribute("class", "img-comp-slider");
//     /*insert slider*/
//     img.parentElement.insertBefore(slider, img);
//     /*position the slider in the middle:*/
//     slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
//     slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
//     /*execute a function when the mouse button is pressed:*/
//     slider.addEventListener("mousedown", slideReady);
//     /*and another function when the mouse button is released:*/
//     window.addEventListener("mouseup", slideFinish);
//     /*or touched (for touch screens:*/
//     slider.addEventListener("touchstart", slideReady);
//     /*and released (for touch screens:*/
//     window.addEventListener("touchend", slideFinish);
//     function slideReady(e) {
//       /*prevent any other actions that may occur when moving over the image:*/
//       e.preventDefault();
//       /*the slider is now clicked and ready to move:*/
//       clicked = 1;
//       /*execute a function when the slider is moved:*/
//       window.addEventListener("mousemove", slideMove);
//       window.addEventListener("touchmove", slideMove);
//     }
//     function slideFinish() {
//       /*the slider is no longer clicked:*/
//       clicked = 0;
//     }
//     function slideMove(e) {
//       var pos;
//       /*if the slider is no longer clicked, exit this function:*/
//       if (clicked == 0) return false;
//       /*get the cursor's x position:*/
//       pos = getCursorPos(e)
//       /*prevent the slider from being positioned outside the image:*/
//       if (pos < 0) pos = 0;
//       if (pos > w) pos = w;
//       /*execute a function that will resize the overlay image according to the cursor:*/
//       slide(pos);
//     }
//     function getCursorPos(e) {
//       var a, x = 0;
//       e = (e.changedTouches) ? e.changedTouches[0] : e;
//       /*get the x positions of the image:*/
//       a = img.getBoundingClientRect();
//       /*calculate the cursor's x coordinate, relative to the image:*/
//       x = e.pageX - a.left;
//       /*consider any page scrolling:*/
//       x = x - window.pageXOffset;
//       return x;
//     }
//     function slide(x) {
//       /*resize the image:*/
//       img.style.width = x + "px";
//       /*position the slider:*/
//       slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
//
//       // for debug, to be deleted
//       console.log('img width | slider left: ', img.style.width, slider.style.left);
//     }
//   }
// }
