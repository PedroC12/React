import React, { Component } from 'react';
import './imagem.css';

class Imagens extends Component {
  render() {
    return (
        <div className="imagem">
            <img src={this.props.img}/>
            <p>{this.props.texto}</p>
        </div>
    );
  }
}

export default Imagens;