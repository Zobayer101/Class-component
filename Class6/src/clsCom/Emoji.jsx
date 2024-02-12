
import React from 'react'
import Text from './Text';
class Emoji extends React.Component{
    addEmoji=(text,emoji)=>{

       var power = ` ${emoji} ${ text} ${emoji}`
       return (
        <h1>{power}</h1>
       )
    }
    render(){
        let text='hellow I am a javaScript programming language';
    
        return (
            <div>
                {text}
                <Text Emo={ this.addEmoji} taX={'I am super power'} EmoJi={'(:'} ></Text>
            </div>
        )
    }
}

export default Emoji;