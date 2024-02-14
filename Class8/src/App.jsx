import Click from "./clsCom/Click"
import Counter from "./clsCom/Counter"
import Hover from "./clsCom/Hover"
import Name from "./clsCom/Name"

function App() {
  //React Reander props pattern
  return (
    <>
    
    
    <Counter>
      {(counter,Incremant)=> (
        <Click Counter={counter} Incremant={Incremant}/>
        )}
    </Counter>


    <Counter>
      {(counter,Incremant)=>(
      <Hover Counter={counter} Incremant={Incremant}/>
    )}
    </Counter>
   
     

    <Name name={(login)=> login? "wellcome to new app":'first need to loggin'}></Name>
    </>
  )
}

export default App
