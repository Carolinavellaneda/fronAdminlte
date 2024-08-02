import React, { useState, useEffect } from "react";
import ContentHeader from "../../componentes/ContentHeader";
import Footer from "../../componentes/Footer";
import Navbar from "../../componentes/Navbar";
import APIInvoke from "../../configuracion/APIInvoke";
import SidebarContainer from "../../componentes/SidebarContainer";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const AgregarClientes = () => {
const navigate = useNavigate();

const [clientes, setClientes] = useState ({
    Nombre: "",
    apellidos:"",
    cedula:"",
    correo:"", 
    telefono:"",
    direccion:""
  
    
})

const {Nombre, apellidos,cedula,correo,telefono,direccion} = clientes
useEffect(()=>{
    document.getElementById("Nombre").focus();
},[])

const onChange =(e) =>{
    setClientes({
        ...clientes,
    [e.target.name]: e.target.value
    })

}

    const CrearClientes = async () => {

        const data = {
            Nombre: clientes.Nombre,
            apellidos: clientes.apellidos,
            cedula: clientes.cedula,
            correo: clientes.correo,
            telefono: clientes.telefono,
            direccion: clientes.direccion

        }

        const response = await APIInvoke.invokePOST('/api/clientes', data);
        const idCliente = response._id;

        if (idCliente === ''){
            const msg = "Hubo un error al agregar un cliente";
            swal({
                title: 'Error',
                text: msg,
                icon: 'error',
                buttons: {
                    confirm: {
                        text: 'OK',
                        value: true,
                        visible: true,
                        className: 'btn btn-danger',
                        closeModal: true
                    }
                }

                
            });

        } else {
            navigate("/clientes");

            const msg = "El cliente fue agregado con exito";
            swal({
                title: 'Informacion',
                text: msg,
                icon: 'success',
                buttons: {
                    confirm: {
                        text: 'OK',
                        value: true,
                        visible: true,
                        className: 'btn btn-primary',
                        closeModal: true
                    }
                }              
            });

            setClientes({
                Nombre: "",
                apellidos:"",
                cedula:"",
                correo:"", 
                telefono:"",
                direccion:""
            });

        }
    }

    const onSubmit =(e) => {
        e.preventDefault();
        CrearClientes();
    }

  return (

    <div className="wrapper">
    <Navbar></Navbar>
    <SidebarContainer></SidebarContainer>

    <div className="content-wrapper">

        <ContentHeader
            titulo={"Agregar Clientes"}
            breadCrumb1={"Listado de Clientes"}
            breadCrumb2={"Agregar"}
            ruta1={"/clientes/agregar"} 
        />
        

        <seccion className="content">
                    <div className="card">
                        <div className="card-header">
                            <div className="card-tools">

                                <button type="button" className="btn btn-tool" data-card-widget="collapse"
                                    title="collapse">
                                    <i className="fas fa-item" />
                                </button>


                                <button type="button" className="btn btn-tool" data-card-widget="remove"
                                    title="Remove">
                                    <i className="fas fa-item" />
                                </button>
                            </div>
                        </div>

                        <div className="card-body">
                            <form onSubmit={onSubmit}>

                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="Nombre">Nombre</label>
                                        <input type="text"
                                        className="form-control"
                                        id='Nombre'
                                        name='Nombre'
                                        placeholder="Ingrese los Nombre del Cliente"
                                        value={Nombre}
                                        onChange={onChange}
                                        required                                        
                                        />                                  
                                    </div>
                                </div>

                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope"/>
                                    </div>
                                </div>


                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="apellidos">Apellidos</label>
                                        <input type="text"
                                        className="form-control"
                                        id='apellidos'
                                        name='apellidos'
                                        placeholder="Ingrese el apellido del Cliente"
                                        value={apellidos}
                                        onChange={onChange}
                                        required                                        
                                        />                                  
                                    </div>
                                </div>

                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope"/>
                                    </div>
                                </div>

                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="cedula">Cedula</label>
                                        <input type="number"
                                        className="form-control"
                                        id='cedula'
                                        name='cedula'
                                        placeholder="Ingrese la cedula del Cliente"
                                        value={cedula}
                                        onChange={onChange}
                                        required                                        
                                        />                                  
                                    </div>
                                </div>

                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope"/>
                                    </div>
                                </div>

                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="email">Correo</label>
                                        <input type="text"
                                        className="form-control"
                                        id='correo'
                                        name='correo'
                                        placeholder="Ingreso el correo del Cliente"
                                        value={correo}
                                        onChange={onChange}
                                        required                                        
                                        />                                  
                                    </div>
                                </div>

                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope"/>
                                    </div>
                                </div>

                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="telefono">Telefono</label>
                                        <input type="number"
                                        className="form-control"
                                        id='telefono'
                                        name='telefono'
                                        placeholder="Ingreso el telefono del Cliente"
                                        value={telefono}
                                        onChange={onChange}
                                        required                                        
                                        />                                  
                                    </div>
                                </div>

                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope"/>
                                    </div>
                                </div>

                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="direccion">direccion</label>
                                        <input type="text"
                                        className="form-control"
                                        id='direccion'
                                        name='direccion'
                                        placeholder="Ingrese la direccion del Cliente"
                                        value={direccion}
                                        onChange={onChange}
                                        required                                        
                                        />                                  
                                    </div>
                                </div>

                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope"/>
                                    </div>
                                </div>

                                <div className="card-footer">
                                    <button type="submit" className="btn btn-primary">Agregar</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </seccion>
            </div>
            <Footer></Footer>
        </div>
  )
}

export default AgregarClientes