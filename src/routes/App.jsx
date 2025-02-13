import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Sugestion from "../Pages/Sugestion";
import Sobre from "../Pages/Sobre";

export default function App() {
  return(
    <Router>
      <Routes>
        
        <Route path="/" element={<Home />} />
        
        <Route path="/sugestao" element={<Sugestion />} />
        
        <Route path="/sobre" element={<Sobre />} />

      </Routes>
    </Router>
  )
}