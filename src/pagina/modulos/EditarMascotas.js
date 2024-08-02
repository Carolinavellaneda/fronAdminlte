import React, { useState, useEffect } from "react";
import ContentHeader from "../../componentes/ContentHeader";
import Footer from "../../componentes/Footer";
import Navbar from "../../componentes/Navbar";
import APIInvoke from "../../configuracion/APIInvoke";
import SidebarContainer from "../../componentes/SidebarContainer";
//import swal from "sweetalert";
import { useNavigate,useParams } from "react-router-dom";



function EditarMascotas() {


      const [Nombre , setNombre] = useState('');
      const [Id, setId] = useState('');
      const [Propietario, setPropietario] = useState('');
      const [Vacunas, setVacunas] = useState('');
      const [Edad, setEdad] = useState('');
      const navigate = useNavigate();
      const {id }= useParams();

        
        // creamos la funcion actualizar

        const editarMascotas = async(e) => {
            e.preventDefault();
            await APIInvoke.invokePUT(`/api/mascotas/${id}`, {
                 Nombre: Nombre,
                 Id:Id,
                 Propietario:Propietario,
                 Vacunas:Vacunas,
                 Edad:Edad, 
             })
             navigate("/mascotas");

            }
        useEffect (() =>{
            getmascotasID();
          // eslint-disable-next-line
        },[]);
        const getmascotasID = async () => {
          const resul = await APIInvoke.invokeGET(`/api/mascotas/${id}`)
          setNombre(resul.Nombre)
          setId(resul.Id)
          setVacunas(resul.Vacunas)
          setPropietario(resul.Propietario)
          setEdad(resul.Edad)
        }

  return (
    <div className="wrapper">
    <Navbar></Navbar>
    <SidebarContainer></SidebarContainer>

    <div className="content-wrapper">

        <ContentHeader
            titulo={"Editar Mascotas"}
            breadCrumb1={"Listado de Mascotas"}
            breadCrumb2={"Editar"}
            ruta1={"/mascotas/editar"} 
        />

        <section className="content">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">
              </h3>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                  title="Collapse"
                >
                  <i className="fas fa-items"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                  title="Remove"
                >
                  <i className="fas fa-items"></i>
                </button>
              </div>
            </div>
            <div className="card-body">
                <form onSubmit={editarMascotas}>

                    <div className="card-body" >
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text"
                            className="form-control"
                            id="nombre"
                            name="nombre"
                            placeholder="ingrese la nombre de la mascota"
                            value={Nombre}
                            onChange={(e)=>setNombre(e.target.value)}
                            required
                            />
                        </div>
                    </div>
                    <div className="input-group-append">
                        <div className="input-group-text">
                            <span className="fas fa-envelope"/>
                        </div>
                    </div>

                    <div className="card-body" >
                        <div className="form-group">
                            <label htmlFor="Id">ID</label>
                            <input type="text"
                            className="form-control"
                            id="Id"
                            name="Id"
                            placeholder="ingrese el Id de la mascota"
                            value={Id}
                            onChange={(e)=>setId(e.target.value)}
                            required
                            />
                        </div>
                    </div>
                    <div className="input-group-append">
                        <div className="input-group-text">
                            <span className="fas fa-envelope"/>
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
                            value={Vacunas}
                            onChange={(e)=>setVacunas(e.target.value)}
                            required
                            />
                        </div>
                    </div>
                    <div className="input-group-append">
                        <div className="input-group-text">
                            <span className="fas fa-envelope"/>
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
                            value={Edad}
                            onChange={(e)=>setEdad(e.target.value)}
                            required
                            />
                        </div>
                    </div>
                    <div className="input-group-append">
                        <div className="input-group-text">
                            <span className="fas fa-envelope"/>
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
                            value={Propietario}
                            onChange={(e)=>setPropietario(e.target.value)}
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
                        <button type="submit" className="btn btn-primary">
                            Editar
                        </button>
                    </div>
                </form>
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default EditarMascotas
