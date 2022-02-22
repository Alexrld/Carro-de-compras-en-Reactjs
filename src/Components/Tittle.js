import { Component, Fragment } from "react";

class Tittle extends Component {
   render(){
      return(
         <Fragment>
            <h2 style={styles.title}>Tienda</h2>
         </Fragment>
      )
   }
}

const styles = {
   title:{
      marginBottom:'30px'
   }
}

export default Tittle;