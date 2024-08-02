import React, { useState, useEffect } from "react";
import ContentHeader from "../../componentes/ContentHeader";
import Footer from "../../componentes/Footer";
import Navbar from "../../componentes/Navbar";
import APIInvoke from "../../configuracion/APIInvoke";
import SidebarContainer from "../../componentes/SidebarContainer";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const AgregarMascota = () => {
    const navigate = useNavigate();

    const [mascotas, setMascotas] = useState({
        Nombre: "",
        Id: "",
        Propietario: "",
        Vacunas: "",
        Edad: "",

    })


    useEffect(() => {
        document.getElementById("Nombre").focus();
    }, []);


    const onChange = (e) => {
        const {name, value} = e.target
        setMascotas({
          ...mascotas,
          [name]:value,
        })

    }

    const CrearMascotas = async () => {
        const data = {

            Nombre: mascotas.Nombre,
            Id: mascotas.Id,
            Propietario: mascotas.Propietario,
            Vacunas: mascotas.Vacunas,
            Edad: mascotas.Edad

        }

        const response = await APIInvoke.invokePOST("/api/mascotas/", data);
        const idMascotas = response._id;

        if (idMascotas === '') {
            const msg = "Hubo un error al agregar una mascota";
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
            navigate("/mascotas");

            const msg = "la mascota fue agregado con exito";
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

            setMascotas({
                Nombre: "",
                Id: "",
                Propietario: "",
                Vacunas: "",
                Edad: "",

            });
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        CrearMascotas();
    }

    return (

        <div className="wrapper">
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>

            <div className="content-wrapper">

                <ContentHeader
                    titulo={"Agregar Mascotas"}
                    breadCrumb1={"Listado de Mascotas"}
                    breadCrumb2={"Agregar"}
                    ruta1={"/mascotas/agregar"}
                />

                <section className="content">
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
                            <div className="card-body" >
                                    <div className="form-group">
                                        <label htmlFor="Nombre">Nombre </label>
                                         <input type="text"
                                            className="form-control"
                                            id="Nombre"
                                            name="Nombre"
                                            placeholder="hola como estas"
                                            value={mascotas.Nombre}
                                            onChange={onChange}
                                            required
                                            />
                                           
                                    </div>
                                </div>

                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>

                                <div className="card-body" >
                                    <div className="form-group">
                                        <label htmlFor="Id">ID</label>
                                        <input type="number"
                                            className="form-control"
                                            id="Id"
                                            name="Id"
                                            placeholder="ingrese el Id de la mascota"
                                            value={mascotas.Id}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>
                                </div>

                               

                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>


                                <div className="card-body" >
                                    <div className="form-group">
                                        <label htmlFor="Vacunas">Vacunas</label>
                                        <input type="number"
                                            className="form-control"
                                            id="Vacunas"
                                            name="Vacunas"
                                            placeholder="Ingrese las Vacunas"
                                            value={mascotas.Vacunas}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>

                                <div className="card-body" >
                                    <div className="form-group">
                                        <label htmlFor="Edad">Edad</label>
                                        <input type="number"
                                            className="form-control"
                                            id="Edad"
                                            name="Edad"
                                            placeholder="Ingrese la Edad "
                                            value={mascotas.Edad}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>

                                <div className="card-body" >
                                    <div className="form-group">
                                        <label htmlFor="Propietario">Propietario</label>
                                        <input type="text"
                                            className="form-control"
                                            id="Propietario"
                                            name="Propietario"
                                            placeholder="ingrese el Propietario de la mascota"
                                            value={mascotas.Propietario}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>

                                <div className="card-footer">
                                    <button type="submit" className="btn btn-primary">
                                        Agregar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AgregarMascota