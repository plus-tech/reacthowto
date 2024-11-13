import { useNavigate } from 'react-router-dom';

import './header.css';

export default function ResponsiveHeader() {

  const navigate = useNavigate();

  return (
    <div className="header">
      <a href="#default" className="animation">Animation</a>
      <div className="header-right">
        <button onClick={() => navigate('/slidecarousel')}>Slide show</button>
        <button onClick={() => {navigate('/axios');}}>Axios</button>
        <button onClick={() => {navigate('/excel');}}>Excel</button>
        <a href="#functionA">Function A</a>
        <a href="#function B">Function B</a>
        <a href="#function C">Function C</a>
      </div>
    </div>
  );
}
