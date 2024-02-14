import React from 'react';
import Button from './Button';
import CreateContex from "../lib/Context";
import Component1 from './Component1';

class Common extends React.Component{
    state = {
        count: 0,
        hover: 0
    }
    Incremant = (StaTe) => {
        this.setState((pre) => ({
            [StaTe]:pre[StaTe]+1
        }))
    }
    render() {
        const { count,hover} = this.state;
        return (
          <div>
            <Button Count={count} Counter={this.Incremant}></Button>

            <CreateContex.Provider value={hover}>
              <Component1></Component1>
            </CreateContex.Provider>
          </div>
        );
    }
}
export default Common;