import { useNavigate } from 'react-router-dom';

import './header.css';
import { MenuItemText, MenuItemPath } from '../comm/constants.js';
import IconArrowDown from '../icons/arrowdown.png';


export default function ResponsiveHeader() {

  const navigate = useNavigate();

  return (
    <div className="header">
      <div className='header-left'>
        <a className="sign"
          href="https://www.w3schools.com/howto/howto_css_responsive_header.asp"
        >
          W3Schools How To:<br/>Responsive Header
        </a>
      </div>
      <div className="header-right">
        <a href="#" className="menuitem" onClick={() => navigate(MenuItemPath.slideshow)}>{MenuItemText.slideshow}</a>
        <a href="#" className="menuitem" onClick={() => {navigate(MenuItemPath.layout);}}>{MenuItemText.layout}</a>
        <a href="#" className="menuitem" onClick={() => {navigate(MenuItemPath.excel);}}>{MenuItemText.excel}</a>
        <a href="#" className="menuitem" onClick={() => {navigate(MenuItemPath.accordion);}}>{MenuItemText.accordion}</a>
        <a href="#" className="menuitem" onClick={() => {navigate(MenuItemPath.quickbar);}}>{MenuItemText.quickbar}</a>
        <a href="#" className="menuitem" onClick={() => {navigate(MenuItemPath.expandinggrid);}}>{MenuItemText.expandinggrid}</a>

        <div className="dropdown">
          <button className="dropbtn">
            More&nbsp;
            <i className="fa fa-caret-down"></i>
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
<i className='icon' src={IconArrowDown} > </i>
*/
