import { Routes, Route} from "react-router-dom";
import Bmidiyet from "./components/Bmidiyet";
import Bmihesap from "./components/Bmihesap";
import AnaContextProvider from "./context/Anacontext";
import './Appsass.scss';

function App() {

  return (
    <div className="App">
    <AnaContextProvider>
      <Routes>
          <Route path="/" element={<Bmihesap />} />
          <Route path="diyet" element={<Bmidiyet />} />
      </Routes>
    </AnaContextProvider>
    </div>
  );
}

export default App;
