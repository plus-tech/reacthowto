import * as React from 'react';

import './slidecarousel.css';
import Reference from '../comm/reference.jsx';


const images = require.context('../imggallery', true);
const imageList = images.keys().map(image => images(image));
const numOfImg = imageList.length;

export default function SlideCarousel() {
  const [currImg, setCurrImg] = React.useState(0);

  const ShowCurrImg = (incre) => {
      let curr = currImg + incre;
      if (curr == -1) {
        curr = numOfImg-1;
      } else if (curr == numOfImg ) {
        curr = 0;
      }
      setCurrImg(curr);
  }

  return (
    <div className='slideshow'>
      <div className="slideshow-container">
        {
          imageList.map((image, index) => (
            <div className="mySlides fade"
              key={index}
              style={{display: `${currImg == index? "block" : "none"}`}}
          >
              <div className="numbertext">{currImg+1} / {numOfImg}</div>
              <img className="slideimg" src={imageList[index]} />
              <div className="text">Caption Text</div>
            </div>
          ))
        }

        <a className="prev" onClick={() => ShowCurrImg(-1)}>❮</a>
        <a className="next" onClick={() => ShowCurrImg(1)}>❯</a>
      </div>
      <br/>

      <div text-align="center">
        {
          imageList.map((image, index) => (
            <span className="dot" key={index}
              onClick={() => ShowCurrImg(index-currImg)}>
            </span>
          ))
        }
      </div>

      <Reference
        title='Makeover in React'
        urlname='W3Schools How To: Slideshow/Carousel'
        url='https://www.w3schools.com/howto/howto_js_slideshow.asp'
      />

    </div>
  );
}
