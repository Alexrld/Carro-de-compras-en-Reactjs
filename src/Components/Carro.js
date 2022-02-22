import { Component } from "react";
import BubbleAlert from "./BubbleAlert";
import DetallesCarro from "./DetallesCarro";

class Carro extends Component {
   render(){
      const {carro, carroVisible, mostrarCarro} = this.props
      const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)
      return(
         <div>
            <span style={styles.bubble}>
               {
                  cantidad > 0 ? <BubbleAlert cantidad = {cantidad}/> : null
               }           
            </span>
            <button style={styles.carro} onClick={mostrarCarro}>
               Carro
            </button>
            {
               carroVisible ? <DetallesCarro carro = {carro}/> : null
            }
            {/* <DetallesCarro carro = {carro}/> */}
         </div>
      )
   }
}

export default Carro;

const styles={
   carro:{
      backgroundColor:'#359A2C',
      color:'white',
      border:'none',
      padding:'10px 10px',
      borderRadius:'10px',
      cursor:'pointer'
   },
   bubble:{
      position:'relative',
      left:12,
      top:15
   }
}