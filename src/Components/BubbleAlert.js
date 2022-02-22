import { Component, Fragment } from "react";

class BubbleAlert extends Component {
   getNumber(number){
      if(!number) return '0';
      return number > 9 ? '9+' : number;
   }
   render(){
      const {cantidad} = this.props;
      return(
         <span style={styles.bubbleAlert}>
            {this.getNumber(cantidad)}
         </span>
      )
   }
}

const styles = {
   bubbleAlert:{
      backgroundColor:'#e9725e',
      borderRadius:'15px',
      color:'#fff',
      padding:'2px 10px',
      fontSize:'0.9rem',
      width:'20px'
   }
}

export default BubbleAlert;