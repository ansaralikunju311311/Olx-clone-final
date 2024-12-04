import NavBar from "./Components/NavBar/NavBar"
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Sell from "./Components/Sell/Sell";

const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/sell" element={<Sell />}/>
      </Routes>
    </div>
  )
}

export default App
