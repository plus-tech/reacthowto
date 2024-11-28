import './columncards.css';
import Reference from '../comm/reference.jsx';
import Hardanger from '../img/plant.webp';

export default function ColumnCards(){

  return (
    <div className='columncards'>
      <h2>Responsive Column Cards</h2>
      <p>Resize the browser window to see the effect.</p>

      <div className="row">
        <div className="column">
          <div className="card">
            <img className='cardimg' src={Hardanger}></img>
            <h3>Card 1</h3>
            <p>Some text</p>
            <p>Some text</p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img className='cardimg' src={Hardanger}></img>
            <h3>Card 2</h3>
            <p>Some text</p>
            <p>Some text</p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img className='cardimg' src={Hardanger}></img>
            <h3>Card 3</h3>
            <p>Some text</p>
            <p>Some text</p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img className='cardimg' src={Hardanger}></img>
            <h3>Card 4</h3>
            <p>Some text</p>
            <p>Some text</p>
          </div>
        </div>
      </div>

      <Reference
        title='Makeover in React'
        urlname='W3Schools How To: Responsive Column Cards'
        url='https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_column_cards'
      />
    </div>
  )
}

/*
<div class="polaroid">
  <img src="rock600x400.jpg" alt="Norway" style="width:100%">
  <div class="container">
    <p>Hardanger, Norway</p>
  </div>
</div>
*/
