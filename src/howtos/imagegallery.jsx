//-------------- Image Gallery
import './imagegallery.css';

import Reference from '../comm/reference.jsx';

import ImageA from '../imggallery/akagiyamaflower.webp';
import ImageB from '../imggallery/alpsrange.webp';
import ImageC from '../imggallery/daibosatsuryo.webp';
import ImageD from '../imggallery/lakeonuma.webp';
// import ImageE from '../imggallery/daisy.webp';
import ImageF from '../imggallery/mizugakiyama.webp';

export default function ImageGallery(){

  return(
    <div className='imggallery'>
      <h2>Responsive Image Gallery</h2>

      <h4>Resize the browser window to see the effect.</h4>

      <div className='imgcontainer'>

        <div className="responsive">
          <div className="gallery">
            <a target="_blank" href={ImageA}>
              <img src={ImageA} alt="Cinque Terre" />
            </a>
            <div className="desc">Add a description of the image here</div>
          </div>
        </div>

        <div className="responsive">
          <div className="gallery">
            <a target="_blank" href={ImageB}>
              <img src={ImageB} alt="Forest" />
            </a>
            <div className="desc">Add a description of the image here</div>
          </div>
        </div>

        <div className="responsive">
          <div className="gallery">
            <a target="_blank" href={ImageC}>
              <img src={ImageC} alt="Northern Lights" />
            </a>
            <div className="desc">Add a description of the image here</div>
          </div>
        </div>

        <div className="responsive">
          <div className="gallery">
            <a target="_blank" href={ImageD}>
              <img src={ImageD} alt="Mountains" />
            </a>
            <div className="desc">Add a description of the image here</div>
          </div>
        </div>

        <div className="responsive">
          <div className="gallery">
            <a target="_blank" href={ImageF}>
              <img src={ImageF} alt="Mountains" />
            </a>
            <div className="desc">Add a description of the image here</div>
          </div>
        </div>

      </div>

      <div className="clearfix"></div>

      <div style={{padding:'6px'}}>
        <p>This example use media queries to re-arrange the images on different screen sizes:
          for screens larger than 700px wide, it will show four images side by side,
          for screens smaller than 700px, it will show two images side by side.
          For screens smaller than 500px, the images will stack vertically (100%).
        </p>
      </div>

      <Reference
        title='Makeover in React'
        urlname='W3Schools How To: Image Gallery'
        url='https://www.w3schools.com/howto/howto_css_image_gallery.asp'
      />
    </div>
  );
}

/*
        <div className="responsive">
          <div className="gallery">
            <a target="_blank" href={ImageE}>
              <img src={ImageE} alt="Mountains" />
            </a>
            <div className="desc">Add a description of the image here</div>
          </div>
        </div>
*/
