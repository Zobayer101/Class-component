import React from 'react';
class Text extends React.Component{
   
    render(){
        
        const {Emo,taX,EmoJi}=this.props;
        let text='all are progrimming language'
        return (
            <div>
                <h3>Hellow world</h3>
                {
                   Emo ? Emo(taX,EmoJi):text
                }
            </div>
        )
    }
}

export default Text;