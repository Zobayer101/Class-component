import React from "react"
import Button from "./Button";
class Clascom extends React.Component{
    constructor(){
        super()
        this.state={Date: new Date(),
                    local:'en-US',
                   };
        //this.Change=this.Change.bind(this)
    }
    componentDidMount(){
        this.myCom=setInterval(()=>{this.Tick()},1000)
    }

    Tick(){

        this.setState({
            Date: new Date()
        })
    }
    //click method
    
    Change=()=>{
        
        if(this.state.local=='bn-BD'){
            var bd="en-US"
        }else{
            var bd="bn-BD"
        }
        this.setState((pre)=>({
            ...pre,
            local:bd
        }))
        
    }
    render(){
        console.log(`clock render`)
        return(
            <div>
                 <h1>{this.state.Date.toLocaleTimeString(this.state.local)}</h1>
                 <Button change={ this.Change} ></Button>
            </div>
        )
    }
}

export default Clascom;