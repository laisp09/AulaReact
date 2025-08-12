import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Paginas/Home";
import SaoPaulo from "./Paginas/SaoPaulo";
import RioJaneiro from "./Paginas/RioJaneiro";
import MinasGerais from "./Paginas/MinasGerais";
import EspiritoSanto from "./Paginas/EspiritoSanto";
import "./App.css";
import Parana from "./Paginas/Parana";
import SantaCatarina from "./Paginas/SantaCatarina";
import RioGrandeSul from "./Paginas/RioGrandeSul";
import DistritoFederal from "./Paginas/DistritoFederal";
import Goias from "./Paginas/goias";
import MatoGrosso from "./Paginas/MatoGrosso";
import MatoGrossoSul from "./Paginas/MatoGrossoSul";
import Acre from "./Paginas/Acre";
import Amapá from "./Paginas/Amapa";
import Para from "./Paginas/Para";
import Rondonia from "./Paginas/Rondonia";
import Roraima from "./Paginas/Roraima";
import Tocantins from "./Paginas/Tocantins";
import Alagoas from "./Paginas/Alagoas";
import Bahia from "./Paginas/Bahia";
import Ceará from "./Paginas/Ceara";
import Maranhao from "./Paginas/Maranhao";
import Paraiba from "./Paginas/Paraiba";
import Pernambuco from "./Paginas/Pernambuco";
import Piaui from "./Paginas/Piaui";
import RioGrandeNorte from "./Paginas/RioGrandeNorte";
import Sergipe from "./Paginas/Sergipe";

export default function App()
{
    return (
       
       <BrowserRouter>
           <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sp" element={<SaoPaulo />}   />
              <Route path="/rj" element={<RioJaneiro />}   />
              <Route path="/mg" element={<MinasGerais />}   />
              <Route path="/es" element={<EspiritoSanto />}   />
              <Route path="/pr" element={<Parana />}   />
              <Route path="/sc" element={<SantaCatarina />}   />
              <Route path="/rs" element={<RioGrandeSul />}   />
              <Route path="/df" element={<RioGrandeSul />}   />
              <Route path="/go" element={<SaoPaulo />}   />
              <Route path="/mt" element={<RioJaneiro />}   />
              <Route path="/ms" element={<MinasGerais />}   />
              <Route path="/ac" element={<EspiritoSanto />}   />
              <Route path="/ap" element={<Parana />}   />
              <Route path="/pa" element={<SantaCatarina />}   />
              <Route path="/ro" element={<RioGrandeSul />}   />
              <Route path="/rr" element={<RioGrandeSul />}   />
              <Route path="/to" element={<RioGrandeSul />}   />
           </Routes> 
       </BrowserRouter>
    );
}