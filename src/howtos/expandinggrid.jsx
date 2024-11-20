import * as React from 'react';

import './expandinggrid.css';
import Reference from '../comm/reference.jsx';


export default function ExpandingGrid(){
  const [b1display, setB1display] = React.useState('none');
  const [b2display, setB2display] = React.useState('none');
  const [b3display, setB3display] = React.useState('none');

  const openTab = (tabno) => {
    switch (tabno) {
      case 1:
        setB1display('block');
        break;
      case 2:
        setB2display('block');
        break;
      case 3:
        setB3display('block');
        break;
      default:
    }
  }
  const closeTab = (tabno) => {
    switch (tabno) {
      case 1:
        setB1display('none');
        break;
      case 2:
        setB2display('none');
        break;
      case 3:
        setB3display('none');
        break;
      default:
    }
  }

  return (
    <div className='expandinggrid'>
      <div textAlign='center'>
        <h2>Expanding Grid</h2>
        <p>Click on the boxes below:</p>
      </div>

      <div className="row">
        <div className="column green" onClick={() => openTab(1)}>
          Box 1
        </div>
        <div className="column blue" onClick={() => openTab(2)}>
          Box 2
        </div>
        <div className="column red" onClick={() => openTab(3)}>
          Box 3
        </div>
      </div>

      <div id="b1" className="containerTab green" style={{display: `${b1display}`}}>
        <span onClick={() => closeTab(1)} className="closebtn">&times;</span>
        <h2>Box 1</h2>
        <p>Lorem ipsum dolor sit amet, te quo doctus abhorreant, et pri deleniti intellegat, te sanctus inermis ullamcorper nam. Ius error diceret deseruisse ad</p>
      </div>

      <div id="b2" className="containerTab blue" style={{display: `${b2display}`}}>
        <span onClick={() => closeTab(2)} className="closebtn">&times;</span>
        <h2>Box 2</h2>
        <p>Lorem ipsum dolor sit amet, te quo doctus abhorreant, et pri deleniti intellegat, te sanctus inermis ullamcorper nam. Ius error diceret deseruisse ad</p>
      </div>

      <div id="b3" className="containerTab red" style={{display: `${b3display}`}}>
        <span onClick={() => closeTab(3)} className="closebtn">&times;</span>
        <h2>Box 3</h2>
        <p>Lorem ipsum dolor sit amet, te quo doctus abhorreant, et pri deleniti intellegat, te sanctus inermis ullamcorper nam. Ius error diceret deseruisse ad</p>
      </div>

      <Reference
        title='Makeover in React'
        urlname='W3Schools How To: Expanding Grid'
        url='https://www.w3schools.com/howto/howto_js_expanding_grid.asp'
      />
    </div>
  )
}
