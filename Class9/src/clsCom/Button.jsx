
import React from 'react';

class Button extends React.Component{
    
    render() {
        const { Count,Counter } = this.props;
        return (
            <div>
                <button onClick={()=>Counter('count')}>Click {Count} time</button>
            </div>
        )
    }
}
export default Button;