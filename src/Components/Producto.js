import { Component, Fragment } from "react";
import Button from "./Button";


class Producto extends Component {
   render() {
      //console.log(this.props)
      const { producto, agregarAlCarro } = this.props;
      return (
         <Fragment>
            <div style={styles.producto}>
               <h3>{producto.name}</h3>
               <img style={styles.img} src={producto.img} alt={producto.name}></img>
               <p>Precio: {producto.price}</p>
               <Button onClick={ () => agregarAlCarro(producto) }>Agregar al Carro</Button>
            </div>
         </Fragment>
      )
   }
}

const styles = {
   producto: {
      border: 'solid 1px #eee',
      boxShadow: '0 5px 5px rgb(0,0,0,0.1)',
      width: '30%',
      padding:'10px 15px',
      borderRadius:'5px'
   },
   img:{
      width:'100%'
   }
}

export default Producto;