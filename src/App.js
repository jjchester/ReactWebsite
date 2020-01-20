import React from 'react';
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Pages from './components/pages/pages'

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <Pages/>
      <Footer/>
    </div>
  );
}

export default App;
