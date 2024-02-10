import React from "react"

class Clascom extends React.Component{
    constructor(props){
        super(props);
        this.state={ Date:new Date()}
    }
    componentDidMount(){
       this.myPropaty= setInterval(()=>{this.Tick()},1000)
    }
    componentWillUnmount(){
        clearInterval(this.myPropaty)
    }
    Tick(){
        this.setState({Date: new Date()})
    }
    render(){
        return(
            <div>
                <h1>
                   
                    <div className="clock">{this.state.Date.toLocaleTimeString(this.props.local)}</div>
                </h1>
            </div>
        )
    }
}

export default Clascom;