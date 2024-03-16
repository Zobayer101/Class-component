import "./design/index.scss";
import Landin from "./components/Landin";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Notfound from "./components/Notfound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landin />} />
          <Route path="*" element={ <Notfound/>} />
        </Routes>
      </BrowserRouter>
     
    </>
  );
}

export default App;
