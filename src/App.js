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
import Dashboard from "./Components/Dashboard.js"
import AllPublicaciones from './Components/AllPublicaciones'
import AllDates from './Components/AllDates'

function App() {

  return (
    <Routes>

      <Route path="/" element={<Home />}></Route>
      <Route path="/Inicial" element={<Inicial />}></Route>
      <Route path="/Primaria" element={<Primaria />}></Route>
      <Route path="/Secundaria" element={<Secundaria/>}></Route>
      <Route path="/Colegio" element={<Colegio />}></Route>
      <Route path="/Publicaciones" element={<AllPublicaciones />}></Route>
      <Route path="/Calendario" element={<AllDates />}></Route>

      <Route path="/Dashboard" element={<Dashboard />}></Route>
      <Route path="/NuevaPublicacion"></Route>
      <Route path="/EditarPublicacion"></Route>
      <Route path="/EditarCalendario"></Route>
      <Route path="/EditarUsuarios"></Route>

    </Routes>
  );
}
export default App;