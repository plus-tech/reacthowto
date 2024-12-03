import * as React from 'react';

import './compareimg.css';
import LeftImg from '../img/alpsrange.webp';
import RightImg from '../img/mountainandcity.webp';

export default function CompareImg(){

  return (
    <div className='compareimg'>
      <h1>Compare Two Images</h1>

      <p>Click and slide the blue slider to compare two images:</p>

      <div className="img-comp-container">
        <div className="img-comp-img">
          <img src={LeftImg} />
        </div>
        <div className="img-comp-img img-comp-overlay">
          <img src={RightImg} />
        </div>
      </div>
    </div>
  )
}
