
import React from 'react'

export default class Click extends React.Component {
  render() {
    const {Counter,Incremant}=this.props;
    return (
        
      <div>
        <button onClick={Incremant}>Click {Counter} time</button>
      </div>
    )
  }
}
