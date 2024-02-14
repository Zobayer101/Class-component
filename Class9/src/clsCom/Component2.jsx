import React from 'react'
import Hover from './Hover';
import CreateContex from '../lib/Context';
export default class Component2 extends React.Component {
    render() {
      
      return (
        <>
          <div>Component2</div>
          <CreateContex.Consumer>
            {(hover) => <Hover Count={hover}></Hover>}
          </CreateContex.Consumer>
        </>
      );
  }
}
