import * as React from 'react'
import * as XLSX from 'xlsx';
import {BrowserRouter} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import AppRouter from './nav/approuter.jsx';
import ResponsiveHeader from './nav/header.jsx';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header" > </header>
        <ResponsiveHeader />

        <AppRouter />

      </div>
    </BrowserRouter>
  );
}

export default App;

/*
    <BrowserRouter>
    </BrowserRouter>

  <ResponsiveHeader />

  <SlideCarousel />
 */
