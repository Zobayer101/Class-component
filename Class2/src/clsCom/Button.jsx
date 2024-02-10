import React from 'react';

class Button extends React.Component{
    shouldComponentUpdate(nextprops){
        // eslint-disable-next-line react/prop-types
        const {change:currentChange,lock:currentProps}=this.props;
        const {change:nextChange,lock:nextLock}=nextprops;
        if(currentChange==nextChange  && currentProps===nextLock){
            return false
        }else{
            return true
        }
    }
    render(){
        console.log(`Button is reander `)
        
        // eslint-disable-next-line react/prop-types
        const {change,lock} =this.props;
        return(
            <div>
                <button onClick={()=> {change(lock)} }>Clickme</button>
            </div>
        )
    }
}

export default Button;