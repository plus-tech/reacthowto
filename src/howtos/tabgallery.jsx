//-------------- Tab Gallery
import * as React from 'react';

import Reference from '../comm/reference.jsx';
import './tabgallery.css';

//
// Load a list of images from the specified folder which are managed on demand
//
const images = require.context('../imggallery', true);
const imageList = images.keys().map(image => images(image));
const numOfImg = imageList.length;

const TabGallery = React.memo(function TabGallery() {
  const imgContainer = React.useRef(null);
  const expandedImg = React.useRef(null);
  const imgText = React.useRef(null);

  const myFunction = (imgs, text) => {
    expandedImg.current.src = imgs;
    imgText.current.innerHTML = text;
    imgContainer.current.style.display = "block";
    // imgContainer.current.style.visibility = 'visible';
  };

  return (
    <div className='tabgallery'>
      <div style={{textAlign:'center'}}>
        <h2>Tabbed Image Gallery</h2>
        <p>Click on the images below:</p>
      </div>

      <div className="row">
        {
          imageList && imageList.map((img, id) =>
          <div className="column" key={id}>
            <img src={img}
              alt={img}
              onClick={(e) => {myFunction(e.target.src, e.target.alt)}} />
          </div>
          )
        }
      </div>

      <div className="container" ref={imgContainer}>
        <span
          onClick={() => {imgContainer.current.style.display='none'}}
          className="closebtn">
          &times;
        </span>
        <img ref={expandedImg}/>
        <div className='imgtext' ref={imgText}></div>
      </div>

      <Reference
        title='Makeover in React'
        urlname='W3Schools How To: Tab Gallery'
        url='https://www.w3schools.com/howto/howto_js_tab_img_gallery.asp'
      />

    </div>
  )
});
// };

export default TabGallery;
