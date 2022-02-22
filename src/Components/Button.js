import { Component, Fragment } from "react";

class Button extends Component {
   render(){
      return(
         <Fragment>
            <button style={styles.button} {...this.props}/> {/* con ...this.props estamos pasando todas las propiedades de Button */}
         </Fragment>
      )
   }
}

const styles = {
   button:{
      backgroundColor:'#0A283E',
      color:'white',
      border:'none',
      borderRadius:'5px',
      padding:'10px 5px',
      cursor:'pointer'
   }
}

export default Button;