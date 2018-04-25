import React, { Component } from 'react';
import Navbar from './navbar';
import Banner from './banner';
import Imagens from './imagem';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
        
          <Navbar/>
          <Banner/>

          <div className="imagens">
            <Imagens img=""/>
            <Imagens img=""/>
            <Imagens img=""/>
            <Imagens img=""/>
          </div>
        </header>
      </div>
    );
  }
}

export default App;