import React from 'react'
import Component2 from './Component2'

export default class Component1 extends React.Component {
    render() {
       
      return (
        <>
          <div>Component1</div>
          <Component2  ></Component2>
        </>
      );
  }
}
