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
    componentWillUnmount(){
        clearInterval(this.myCom)
    }

    Tick(){

        this.setState({
            Date: new Date()
        })
    }
    //click method
    
    Change=(bd)=>{
        
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
                 <Button change={ this.Change} lock={"bn-BD"}></Button>
            </div>
        )
    }
}

export default Clascom;