import NavBar from "./Components/NavBar/NavBar"
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";

const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<NavBar />}/> 
        <Route path="/home" element={<Home />}/>
      </Routes>
    </div>
  )
}

export default App
