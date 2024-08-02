import { Fragment } from "react";
import './App.css'
import Home from "./Home";
import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Login from "./pagina/auth/Login";
import Registro from "./pagina/auth/Reqistro";
import MostrarClientes from "./pagina/modulos/MostrarClientes";
import AgregarClientes from "./pagina/modulos/AgregarClientes";
import EditarClientes from "./pagina/modulos/EditarClientes";
import MostrarMascotas from "./pagina/modulos/MostrarMascotas";
import AgregarMascotas from "./pagina/modulos/AgregarMascota";
import EditarMascotas from "./pagina/modulos/EditarMascotas";
import RutasProtegitas from "./pagina/auth/RutasProtegitas";



// importamos el componente

function App() {

  return (
    <div className="App">
      <Fragment>
    <BrowserRouter>
    <Routes>
    <Route path='/' element= {<Navigate to="/login"/>}/>
            <Route path="/login" exact element  ={ <Login/>}/>
            <Route path="/Registro" exact element ={<Registro/>}/>
            <Route path="/home" exact element ={<RutasProtegitas element={<Home/>}/>}/>
            <Route path="/clientes" exact element = { <RutasProtegitas element={<MostrarClientes />}/>}></Route>
            <Route path="/clientes/agregar" exact element ={ <RutasProtegitas element={<AgregarClientes />}/>}></Route>
            <Route path="/clientes/editar/:id" exact element = {<RutasProtegitas element={<EditarClientes/>}/>}></Route>
            <Route path="/mascotas" exact element = { <RutasProtegitas element={<MostrarMascotas/>}/>}></Route>
            <Route path="/mascotas/agregar" exact element ={<RutasProtegitas element= {<AgregarMascotas/>}/>}></Route>
            <Route path="/mascotas/editar/:id" exact element = {<RutasProtegitas element= {<EditarMascotas/>}/>}></Route>
          </Routes>
        </BrowserRouter>
      </Fragment>
    </div>
  );
}

export default App;
