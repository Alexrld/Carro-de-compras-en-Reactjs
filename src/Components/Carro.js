import { Component } from "react";
import BubbleAlert from "./BubbleAlert";

class Carro extends Component {
   render(){
      const {cantidadCarro} = this.props
      const c = 0;
      return(
         <div>
            <span style={styles.bubble}>
               <BubbleAlert value={c + cantidadCarro}/>
            </span>
            <button style={styles.carro}>
               Carro
            </button>
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