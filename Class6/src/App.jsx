
import Emoji from './clsCom/Emoji';
import Text from './clsCom/Text'
function App() {

//Composition vs Inheritaance

  return (
    <>
   <Emoji> 
    {({addEmojiX}) => 
    <Text addEmoji={addEmojiX}></Text>
    }
   </Emoji>
    </>
  )
}

export default App
