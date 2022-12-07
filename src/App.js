import './App.css'
import {
  Route,
  Routes,
} from "react-router-dom"
import Home from "./Components/Home.js"
import Inicial from "./Components/Inicial.js"
import Primaria from "./Components/Primaria.js"
import Secundaria from "./Components/Secundaria.js"
import Colegio from "./Components/Colegio.js"
import Private from "./Components/Private.js"
import AllPublicaciones from './Components/Publicaciones/AllPublicaciones'
import AllDates from './Components/AllDates'
import Login from './Components/Login'
import NuevaPublicacion from './Pages/NuevaPublicacion.js'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Inicial" element={<Inicial />}></Route>
      <Route path="/Primaria" element={<Primaria />}></Route>
      <Route path="/Secundaria" element={<Secundaria />}></Route>
      <Route path="/Colegio" element={<Colegio />}></Route>
      <Route path="/Publicaciones" element={<AllPublicaciones />}></Route>
      <Route path="/Calendario" element={<AllDates />}></Route>

      <Route path="/Login" element={<Login />}></Route>



      <Route path="/Private" element={<Private />}>
        <Route path="NuevaPublicacion" element={<NuevaPublicacion />} ></Route>
        <Route path="EditarPublicacion"></Route>
        <Route path="EditarCalendario"></Route>
        <Route path="EditarUsuarios"></Route>
      </Route>

    </Routes>
  );
}
export default App;