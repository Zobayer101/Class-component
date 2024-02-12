import withCounter from '../HOC/withCounter';
import React from 'react';
class HoverCounter extends React.Component{
  
    render(){
        // eslint-disable-next-line react/prop-types
        const {Count,IncriMant}=this.props;
        return (
            <div>
                <h1 onMouseOver={IncriMant}>Hello world {Count} time</h1>
            </div>
        )
    }
}

// eslint-disable-next-line react-refresh/only-export-components
export default withCounter(HoverCounter);