import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContentHeader from "../../componentes/ContentHeader";
import Footer from "../../componentes/Footer";
import Navbar from "../../componentes/Navbar";
import SidebarContainer from "../../componentes/SidebarContainer";
import APIInvoke from "../../configuracion/APIInvoke";
import swal from "sweetalert";

const MostrarMascotas = () => {
  const [mascotas, setMascotas] = useState([]);

  const getMascotas = async () => {
    const res = await APIInvoke.invokeGET("/api/mascotas/");
    setMascotas(res.mascotas);
    console.log(res.mascotas);

  };

  useEffect(() => {
    getMascotas();
  }, []);

  const eliminarMascotas= async (e, idMascota) => {
    e.preventDefault();
    const response = await APIInvoke.invokeDELETE(`/api/mascotas/${idMascota}`);
    
    if (response.msg === "la mascota se ha eliminado") {
      const msg = "la mascota es eliminada Correctamente";
      swal({
        title: "informacion",
        text: msg,
        icon: "success",
        buttons: {
          confirm: {
            text: "OK",
            value: true,
            visible: true,
            className: "btn btn-primary",
            closeModal: true,
          },
        },
      });
      getMascotas();
      
    } else {
      const msg = "La mascota NO Fue eliminado Correctamente";
      swal({
        title: "Error",
        text: msg,
        icon: "error",
        buttons: {
          confirm: {
            text: "OK",
            value: true,
            visible: true,
            className: "btn btn-danger",
            closeModal: true,
          },
        },
      });
    }
  };
  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>
      <div className="content-wrapper">

        <ContentHeader
          titulo={"Listado de mascotas"}
          breadcrumb1={"Inicio"}
          breadcrumb2={"Mascotas"}
          ruta1={"/home"}
        />
        <section className="content">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">
                <Link
                  to={"/mascotas/agregar"}
                  className="btn btn-block btn-primary btn-sm"
                >
                  Agregar mascota
                </Link>
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
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th style={{ width: "15%" }}>Nombre</th>
                    <th style={{ width: "20%" }}>Id</th>
                    <th style={{ width: "20%" }}>Propietario</th>
                    <th style={{ width: "20%" }}>Vacunas</th>
                    <th style={{ width: "20%" }}>Edad</th>
                  </tr>
                </thead>
                <tbody>
                  {mascotas.map((mascota, index) => (
                    <tr key={index}>
                      <td>{mascota.Nombre}</td>
                      <td>{mascota.Id}</td>
                      <td>{mascota.Propietario}</td>
                      <td>{mascota.Vacunas }</td>
                      <td>{mascota.Edad}</td>
                      <td>
                        <Link
                          to={`/mascotas/editar/${mascota._id}`}
                          className="btn btn-sm btn-primary"
                        >
                          Editar
                        </Link>
                        <button
                          onClick={(e) => eliminarMascotas(e, mascota._id)}
                          className="btn btn-sm btn-danger"
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MostrarMascotas;
