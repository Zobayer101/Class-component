import React from 'react'

export default class Counter extends React.Component {
    state={count:0}
    Incrimant=()=>{
        this.setState((pre)=>({
            count:pre.count+1
        }))
    }
  render() {
    const {RenderProp}=this.props;
    const {count}=this.state;
    return RenderProp(count,this.Incrimant)
  }
}
