import * as React from 'react'
import * as XLSX from 'xlsx';
import {BrowserRouter} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <header className="App-header" > </header>

        <div className="header">
          <a href="#default" className="animation">Animation</a>
          <div className="header-right">
            <a className="active" href="#reactrouter">React Router</a>
            <a href="#axios">Axios</a>
            <a href="#excel">Excel</a>
            <a href="#functionA">Function A</a>
            <a href="#function B">Function B</a>
            <a href="#function C">Function C</a>
          </div>
        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;
