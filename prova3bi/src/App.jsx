import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Paginas/Home";
import "./App.css";

import Moranguinho from "./Paginas/Moranguinho";
import Uvinha from "./Paginas/Uvinha";
import Framboesa from "./Paginas/Framboesa";
import Cerejinha from "./Paginas/Cerejinha";

export default function App()
{
    return (
       
       <BrowserRouter>
           <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/mo" element={<Moranguinho />}   />
              <Route path="/uv" element={<Uvinha />}   />
              <Route path="/fr" element={<Framboesa />}   />
              <Route path="/ce" element={<Cerejinha />}   />
              </Routes> 
       </BrowserRouter>
    );
}