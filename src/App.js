import * as React from 'react'
import * as XLSX from 'xlsx';
import {BrowserRouter} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import AppRouter from './nav/approuter.jsx';
import ResponsiveHeader from './nav/header.jsx';
import SideNav from './nav/sidenav.jsx';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header" > </header>
        <ResponsiveHeader />
        <SideNav />
        <AppRouter />

      </div>
    </BrowserRouter>
  );
}

export default App;

/*
        <SideNav />
  <SidenavButtons />

    <BrowserRouter>
    </BrowserRouter>

  <ResponsiveHeader />

  <SlideCarousel />
*/
