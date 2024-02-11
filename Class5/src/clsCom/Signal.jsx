
import React from 'react';

class Signal extends React.Component{
    render(){
        const{scale}=this.props;
       
      
               
               if(Number(scale)){
                if(scale >=100){
                    return <h3>Water is boile</h3>
                }else{
                    return <h2>water not boile</h2>
                }
                
               }else{
               return( <h1>Enter number on the filed</h1>)
               }
 
    }
}
export default Signal;