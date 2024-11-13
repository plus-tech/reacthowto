import * as React from 'react';

import './slidecarousel.css';


const images = require.context('../imgs', true);
const imageList = images.keys().map(image => images(image));

export default function SlideCarousel() {
  const [currImg, setCurrImg] = React.useState(0);

  const numOfImg = imageList.length;

  console.log('# of images: ', numOfImg, ' current: ', currImg);
  console.log(imageList[0]);

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
    <div>
      <div className="slideshow-container">
        {
          imageList.map((image, index) => (
            <div className="mySlides fade"
              key={index}
              style={{display: `${currImg == index? "block" : "none"}`}}
          >
              <div className="numbertext">{currImg+1} / {numOfImg}</div>
              <img src={imageList[index]} object-fit='contain' />
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

    </div>
  );
}
