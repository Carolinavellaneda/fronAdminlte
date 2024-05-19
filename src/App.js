import React, {Fragment} from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Login from "./pagina/auth/Login";
import Registro from "./pagina/auth/Reqistro";
import Home from "./Home";
import MostrarClientes from "./pagina/modulos/MostrarClientes";
import AgregarClientes from "./pagina/modulos/AgregarClientes";
import EditarClientes from "./pagina/modulos/EditarClientes";



function App() {
  return (
    <div className="App">
      <Fragment>
        <Router>
          <Routes>
            <Route path="/" exact element ={<Login/>}></Route>
            <Route path="/Registro" exact element ={<Registro/>}></Route>
            <Route path="/home" exact element ={<Home/>}></Route>
            <Route path="/clientes" exact element ={<MostrarClientes/>}></Route>
            <Route path="/clientes/agregar" exact element ={<AgregarClientes/>}></Route>
            <Route path="/clientes/editar/:id" exact element ={<EditarClientes/>}></Route>

          </Routes>
        </Router>
      </Fragment>
    </div>
  );
}

export default App;
