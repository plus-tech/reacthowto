import { useNavigate } from 'react-router-dom';

import './header.css';

export default function ResponsiveHeader() {

  const navigate = useNavigate();

  return (
    <div className="header">
      <a href="https://www.w3schools.com/howto/howto_css_responsive_header.asp"
        className="sign">W3Schools How To:<br/>Responsive Header
      </a>
      <div className="header-right">
        <a href="#" className="menuitem" onClick={() => navigate('/slidecarousel')}>SlideShow</a>
        <a href="#" className="menuitem" onClick={() => {navigate('/layout');}}>Layout</a>
        <a href="#" className="menuitem" onClick={() => {navigate('/excel');}}>Excel</a>
        <a href="#" className="menuitem" onClick={() => {navigate('/accordion');}}>Accordion</a>
        <a href="#functionB" className="menuitem" >Function B</a>
        <a href="#functionC" className="menuitem" >Function C</a>

        <div className="dropdown">
          <button className="dropbtn">HowTOs
          </button>
          <div className="dropdown-content">
            <a href="#">How To A</a>
            <a href="#">How To B</a>
            <a href="#">How To C</a>
          </div>
        </div>

      </div>
    </div>
  );
}

/*
<i className="fa fa-caret-down"></i>
*/
