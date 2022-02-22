import { Component } from "react";
import Carro from "./Carro";
import Logo from './Logo'

class Navbar extends Component {
   render(){
      const {carro, carroVisible, mostrarCarro} = this.props
      return(
         <nav style={styles.navbar}>
            <Logo/>
            <Carro 
               carro = {carro}
               carroVisible = {carroVisible}
               mostrarCarro = { mostrarCarro }
            />           
         </nav>
      )
   }
}

const styles = {
   navbar:{
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      height:'100px',
      justifyContent:'space-between',
      position:'relative',
      padding:'0 50px',
      boxShadow:'0 2px 3px rgb(0,0,0,0.1)' 
   }
}

export default Navbar;