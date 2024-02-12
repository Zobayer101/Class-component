import React from 'react'

export default class Hover extends React.Component {
  render() {
    const{Counter,Incremant}=this.props;
    return (
      <div>
        <h1 onMouseOver={Incremant}>Hover {Counter} time</h1>
      </div>
    )
  }
}
