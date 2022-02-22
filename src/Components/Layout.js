import { Component, Fragment } from "react";

class Layout extends Component {
   render(){
      return(
         <div style={styles.layout}>
            <div>{this.props.children}</div>            
         </div>
      )
   }
}

const styles = {
   layout:{
      backgroundColor:'#fff',
      color:'#0A283E',
      alignItems:'center',
      display:'flex',
      flexDirection:'column'
   },
   container:{
      width:'1200px'
   }
}

export default Layout;