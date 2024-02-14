
class Contex {
    constructor(value ) {
        this.value=value
    }
    //Provider 
    Provider = ({children,value}) => {
        this.value = value;
        return children;
    }
    //Consumer
    Consumer=({children})=> children(this.value)
}

const CreateContex = (value = null) => {
    const contex = new Contex(value)
    return {
        Provider: contex.Provider,
        Consumer:contex.Consumer,
    }
}
export default CreateContex;