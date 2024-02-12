import Click from "./clsCom/Click"
import Counter from "./clsCom/Counter"
import Hover from "./clsCom/Hover"
import Name from "./clsCom/Name"

function App() {
  //React Reander props pattern
  return (
    <>
    
    
    <Counter RenderProp={(counter,Incremant)=> (
        <Click Counter={counter} Incremant={Incremant}/>
    )}/>

    
    <Counter RenderProp={(counter,Incremant)=> (
        <Click Counter={counter} Incremant={Incremant}/>
    )}/>


    <Counter RenderProp={(counter,Incremant)=>(
      <Hover Counter={counter} Incremant={Incremant}/>
    )}
    />


    <Counter RenderProp={(counter,Incremant)=>(
      <Hover Counter={counter} Incremant={Incremant}/>
    )}
    />

     
    <Name name={(login)=> login? "wellcome to new app":'first need to loggin'}></Name>
    </>
  )
}

export default App
