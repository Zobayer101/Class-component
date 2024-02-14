import React from 'react';
class Text extends React.Component{
   
    render(){
        
        const {addEmoji}=this.props;
        let text='all are progrimming language'
        return (
            <div>
                <h3>Hellow world</h3>
                {
                   addEmoji ? addEmoji("taX",'(:') :text
                }
            </div>
        )
    }
}

export default Text;