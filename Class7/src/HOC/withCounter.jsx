
import React from 'react';

const withCounter=(NewComponent)=>{

    class OriginalCom extends React.Component{
        state={
            count:0
        }
        Incrimant=()=>{
            this.setState((pre)=>({
                count:pre.count+1
            }))
        }
        render(){
            const {count}=this.state;
            return <NewComponent IncriMant={this.Incrimant} Count={count}/>
        }
    }

    return OriginalCom
}

export default withCounter;