
import React from 'react';

class FromControl extends React.Component{
    constructor(props){
        super(props)
       
    }
    state={
        texts:'',
        Textarea:'only JavaScrip and TypeScript',
        gender:'',
        box:'true',
        country:''
    }
    Changes=(fildName,value)=>{
        
        this.setState((pre)=>({
            ...pre,
            [fildName]:value
        }))
    }
    Submit=()=>{
        
        alert(JSON.stringify(this.state))
        console.log(this.state)
    }

    
    render(){
        const {texts,Textarea,gender,box,country}=this.state;
        var Nbox
        if(box=='true'){
            Nbox='false'
        }else{
             Nbox='true'
        }

        return (
            <div>
               <form action="#" >
                <input type="text" onChange={ (e)=> this.Changes('texts',e.target.value)} placeholder='Enter your text' value={texts} />
               <br />
               <br />
               <textarea name="textarea" onChange={(e)=> this.Changes('Textarea',e.target.value)} cols="30" rows="10" value={Textarea}> </textarea>
               </form>
               <br /><br />
               <label htmlFor="Male">   Male </label>
               <input type="radio" onChange={()=> this.Changes('gender','Male')}  name='gender' checked={gender=="Male"} /><br /><br />
               <label htmlFor="Female">Female</label>
               <input type="radio" name='gender' onChange={()=> this.Changes('gender','Female')}  checked={gender=="Female"} />
                <br /><br />
                
                <label htmlFor="JS">JavaScript</label>
                <input type="checkbox" checked={box=='true'} onChange={()=>(this.Changes('box',Nbox))} /><br />
                <br /><br />

                <select name="country" value={country} onChange={(e)=> this.Changes('country',e.target.value)}>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="India">India</option>
                    <option value="China">China</option>
                    <option value="Packistan">packistan</option>
                </select>
                <br /><br />
                <button type='submit' onClick={this.Submit} >Submit</button>

            </div>
        )
    }
}

export default FromControl;