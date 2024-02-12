
import React from 'react';
import withCounter from '../HOC/withCounter';

class ClickCounter extends React.Component{
    
   
    render(){
        // eslint-disable-next-line react/prop-types
        const {Count,IncriMant}=this.props;
       
        return(
            <div>
                <button onClick={IncriMant}>Click {Count} time</button>
            </div>
        )
    }
}

// eslint-disable-next-line react-refresh/only-export-components
export default withCounter(ClickCounter);