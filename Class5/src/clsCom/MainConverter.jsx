import InputeConverter from './InputConverter';
import Signal from './Signal';
import React from 'react';

class MainConverter extends React.Component{
        state={
            celsius:'',
            fahrenheit:''
        }
        Calculate=(scale,value)=>{
            
            var NewScale,calCulateValue;
            if(Number(value)){
                
                if(scale=='celsius'){
                    calCulateValue=(9/5*value)+32;
                    NewScale='fahrenheit'
                }else{
                    calCulateValue=(value-32)+5/9;
                    NewScale='celsius'
                }
              
            }else{
              calCulateValue='404'
            }

            this.setState((previus)=>({
                ...previus,
                [scale]:value,
                [NewScale]:calCulateValue,
            }))
        }

    render(){
        const {celsius,fahrenheit}=this.state;
        return(
            <div>

            <InputeConverter calculate={this.Calculate} scale={celsius} Stype={'celsius'}></InputeConverter>    
            <InputeConverter calculate={this.Calculate} scale={fahrenheit} Stype={'fahrenheit'}></InputeConverter>    
            <Signal scale={celsius}></Signal>
            </div>
        )
    }
}

export default MainConverter;