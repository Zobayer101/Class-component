
import React from 'react';

class InputeConverter extends React.Component{
    render(){
        // eslint-disable-next-line react/prop-types
        const {calculate,scale,Stype}=this.props;
        return (
            <div>
                <fieldset>
                    <legend>Enter your Calcus value</legend><br />
                    <input type="text" onChange={(e) => calculate(Stype,e.target.value)} value={scale} placeholder={'Enter '+Stype+" value"} />
                </fieldset>
            </div>
        )
    }
}

export default InputeConverter;