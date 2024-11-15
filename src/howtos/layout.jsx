import * as React from 'react';

import './layout.css';
import Reference from '../comm/reference.jsx';


export default function Layout(){
  return (
    <div className="layout">
      <div className="header">
        <h1>Header</h1>
        <p>Resize the browser window to see the responsive effect.</p>
      </div>

      <div className="topnav">
        <a href="#">Link</a>
        <a href="#">Link</a>
        <a href="#">Link</a>
      </div>

      <div className="row">
        <div className="column side">
          <h2>Side</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
        </div>

        <div className="column middle">
          <h2>Main Content</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
        </div>

        <div className="column side">
          <h2>Side</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
        </div>
      </div>

      <div className="footer">
        <p>Footer</p>
      </div>

      <Reference
        title='Makeover in React'
        urlname='W3Schools How To: CSS Website Layout'
        url='https://www.w3schools.com/css/css_website_layout.asp'
      />

    </div>
  )
}
