import React, { Component } from 'react';
import Header from './Header'
import Noticias from './Noticias'
import Form from './Form'

class App extends Component {

  state = {
    noticias : []
  }

  componentDidMount(){
    this.consultarNoticias();
  }

  consultarNoticias = (categoria = 'general') => {

    let url =`http://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=f973e27a21884de3b7d8c1bdcba75f77`
  
  fetch(url)
  .then(respuesta => {
    return respuesta.json()
  })
  .then(noticias => {
    this.setState({
      noticias : noticias.articles
    })
  })
  }

  render() {
    return (
      <div className="contenedor-app">
          <Header
            titulo='Noticias'
          />
        <div className="container white contenedor-noticias">
          <Form
            consultarNoticias={this.consultarNoticias}
          />
          <Noticias
            noticias = {this.state.noticias}
          />
        </div> 
      </div>
    );
  }
}

export default App;
