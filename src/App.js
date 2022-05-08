import './App.css';
import React from 'react';
import {Blog, Features, Possibility, Footer, Header, WhatGPT3} from './container'
import {CTA, Brand, Navbar} from './components'


const App=()=> {
  return (
    <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
    </div>
  );
}

export default App;
