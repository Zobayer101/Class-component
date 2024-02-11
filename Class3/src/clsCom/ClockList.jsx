
import React from 'react';
import Clascom from './Clascom';

class ClockList extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
    const {quantity}=this.props;
        return(
            <div>
                
               {
                quantity.map((value,i)=>(
                <Clascom key={i}/>
                ))
               }
                
            </div>
        )
    }
}

export default ClockList;