
import React from 'react'

class Emoji extends React.Component{
    addEmoji=(text,emoji)=>{

       var power = ` ${emoji} ${ text} ${emoji}`
       return (
        <h1>{power}</h1>
       )
    }
    render(){
        //let text='hellow I am a javaScript programming language';
        

        return this.props.children({addEmojiX:this.addEmoji})
    }
}

export default Emoji;