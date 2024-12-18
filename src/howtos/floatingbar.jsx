import * as React from 'react';

import './floatingbar.css';
import { HeaderHeight } from '../comm/constants.js';


export default function FloatingBar(){
  const [top, setTop] = React.useState(HeaderHeight);

  React.useEffect(() => {
    //
    // define a function to handle scroll event
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setTop(HeaderHeight+scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='quickbarpage'>
      <div className='quickbar' style={{top: `${top}px`}}>
        <div className='quickbar-title'>Floating Bar</div>
        <div className='quickbar-container'>
          <a href='#' onClick={() => {setTop(top+100);}}>Shortcut</a>
          <a href='#' onClick={() => {setTop(top-100);}}>Shortcut</a>
          <a href='#'>Shortcut</a>
          <a href='#'>Shortcut</a>
        </div>
      </div>
      <div className='content'>
        <p>
          scroll up and down this page<br/><br/><br/><br/>
          scroll up and down this page<br/><br/><br/><br/>
          scroll up and down this page<br/><br/><br/><br/>
          scroll up and down this page<br/><br/><br/><br/>
          scroll up and down this page<br/><br/><br/><br/>
          scroll up and down this page<br/><br/><br/><br/>
          scroll up and down this page<br/><br/><br/><br/>
          scroll up and down this page<br/><br/><br/><br/>
          scroll up and down this page<br/><br/><br/><br/>
          scroll up and down this page<br/><br/><br/><br/>
          scroll up and down this page<br/><br/><br/><br/>
          scroll up and down this page<br/><br/><br/><br/>
          scroll up and down this page<br/><br/><br/><br/>
          scroll up and down this page<br/><br/><br/><br/>
          scroll up and down this page<br/><br/><br/><br/>
          scroll up and down this page<br/><br/><br/><br/>
          scroll up and down this page<br/><br/><br/><br/>
          scroll up and down this page<br/><br/><br/><br/>
          scroll up and down this page<br/><br/><br/><br/>
          scroll up and down this page<br/><br/><br/><br/>
        </p>
      </div>
    </div>
  )
}
