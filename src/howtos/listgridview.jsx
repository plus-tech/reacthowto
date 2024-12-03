import * as React from 'react';

import './listgridview.css';
import Reference from '../comm/reference.jsx';

export default function ListGridView(){
  const [activebtn, setActivebtn] = React.useState('Grid');
  const [colwidth, setColwidth] = React.useState('50%');

  const showBtn = (activebtn) => {
    if (activebtn=='Grid') {
      return (
        <div id="btnContainer">
          <button className="btn" onClick={listView}>
            <i className="fa fa-bars"></i>
            List
          </button>
          <button className="btn active" onClick={gridView}>
            <i className="fa fa-th-large"></i>
            Grid
          </button>
        </div>
      )
    } else {
      return (
        <div id="btnContainer">
          <button className="btn active" onClick={listView}>
            <i className="fa fa-bars"></i>
            List
          </button>
          <button className="btn" onClick={gridView}>
            <i className="fa fa-th-large"></i>
            Grid
          </button>
        </div>
      )
    }
  }

  // List View
  const listView = () => {
    setColwidth("100%");
    setActivebtn('List');
  }

  // Grid View
  const gridView = () => {
    setColwidth("50%");
    setActivebtn('Grid');
  }

  return (
    <div className='listgridview'>
      <h2>List View or Grid View</h2>

      <p>Click on a button to choose list view or grid view.</p>

      {showBtn(activebtn)}

      <br/>
      <div className="row">
        <div className="column" style={{backgroundColor:'#aaa', width:`${colwidth}`}}>
          <h2>Column 1</h2>
          <p>Some text..</p>
        </div>
        <div className="column" style={{backgroundColor:'#bbb', width:`${colwidth}`}}>
          <h2>Column 2</h2>
          <p>Some text..</p>
        </div>
      </div>

      <div className="row">
        <div className="column" style={{backgroundColor:'#ccc', width:`${colwidth}`}}>
          <h2>Column 3</h2>
          <p>Some text..</p>
        </div>
        <div className="column" style={{backgroundColor:'#ddd', width:`${colwidth}`}}>
          <h2>Column 4</h2>
          <p>Some text..</p>
        </div>
      </div>

      <Reference
        title='Makeover in React'
        urlname='W3Schools How To: List Grid View'
        url='https://www.w3schools.com/howto/howto_js_list_grid_view.asp'
      />
    </div>
  );
}
