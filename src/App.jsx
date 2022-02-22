import { Component, Fragment } from "react";
import Layout from "./Components/Layout";
import Navbar from "./Components/Navbar";
import Productos from './Components/Productos'
import Tittle from "./Components/Tittle";

class App extends Component {
  state = {
    productos: [
      { name: 'Tomate', price: 1500, img: '../productos/tomate.jpg' },
      { name: 'Arbejas', price: 2500, img: '../productos/arbejas.jpg' },
      { name: 'Lechuga', price: 1500, img: '../productos/lechuga.jpg' }
    ],
    carro:[],
    carroVisible:false
  }

  mostrarCarro = () => {
    this.setState({carroVisible: !this.state.carroVisible})
  }

  agregarAlCarro = (producto) => {
    const { carro } = this.state;
    if(carro.find(x => x.name === producto.name)){
      const newCarro = carro.map(x => x.name === producto.name ? ({...x, cantidad: x.cantidad + 1}) : x) //TODO: buscar una manera mas sencilla de incrementar cantidad.
      return this.setState({carro: newCarro})
    }         
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1
      })
    })
  }

  render() {
    //console.log(this.state.carro)
    const {carroVisible} = this.state
    return (
      <Fragment>
        <Navbar 
          carro={this.state.carro} 
          carroVisible={carroVisible} 
          mostrarCarro={this.mostrarCarro}
        />
        <Layout>
          <Tittle />
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
      </Fragment>
    )
  }
}

export default App;
