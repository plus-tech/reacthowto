//-------------- Portfolio Gallery
import './portfoliogallery.css';

import ImageA from '../imggallery/akagiyamaflower.webp';
import ImageB from '../imggallery/alpsrange.webp';
import ImageC from '../imggallery/daibosatsuryo.webp';
import ImageD from '../imggallery/lakeonuma.webp';
// import ImageE from '../imggallery/daisy.webp';
import ImageE from '../imggallery/mizugakiyama.webp';


export default function PortfolioGallery(){

  return (
    <div className='portfgallery'>

    {/* MAIN (Center website) */}
    <div className="main">

    <h1>MYLOGO.COM</h1>
    <hr/>

    <h2>PORTFOLIO</h2>
    <p>Resize the browser window to see the responsive effect.</p>

    {/* Portfolio Gallery Grid */}
    <div className="row">
      <div className="column">
        <div className="content">
          <img src={ImageA} alt="Mountains" style={{width:'100%'}} />
          <h3>My Work</h3>
          <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
        </div>
      </div>
      <div className="column">
        <div className="content">
        <img src={ImageB} alt="Lights" style={{width:"100%"}} />
          <h3>My Work</h3>
          <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
        </div>
      </div>
      <div className="column">
        <div className="content">
        <img src={ImageC} alt="Nature" style={{width:"100%"}} />
          <h3>My Work</h3>
          <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
        </div>
      </div>
      <div className="column">
        <div className="content">
        <img src={ImageD} alt="Mountains" style={{width:"100%"}} />
          <h3>My Work</h3>
          <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
        </div>
      </div>
    {/* END GRID */}
    </div>

    <div className="content">
      <img src={ImageE} alt="Bear" style={{width:"100%"}} />
      <h3>Some Other Work</h3>
      <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
      <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
    </div>

    {/* END MAIN */}
    </div>
    </div>
  )
}
