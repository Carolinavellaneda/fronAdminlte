import React, {useEffect, useState} from 'react';
import { Navigate } from "react-router-dom";
import swal from 'sweetalert';


const RutasProtegitas = ({ element }) => {
const [redirec , setRedirec ] = useState (false);

// funciaon que nos dice si el token expiro
const TokenExpirado = () => {
    const token = localStorage.getItem("token");
if (!token){
    // si no tenemos un token nos enviara a la pagina principal
    setRedirec(true);
    return;
    }
    // decodificar el token para obtener la fecha que expiro
    const tokenD = JSON.parse(atob(token.split(".")[1]));
    const timeexp = tokenD.exp * 1000; // convertimos a milisegundos

    // obtener la hora actual
    const actualTime = Date.now();

    if(actualTime >= timeexp ){
        swal({
            title: 'Expiro su sesion',
            text: 'su secion expiro vuelva a iniciar sesion',
            icon: 'warning',
            buttons: {
                confirm: {
                    text: 'ok',
                    value: true,
                    visible: true,
                    className: 'btn btn-danger',
                    closeModal: true
                }
            }
        });

        setTimeout(() => {
            localStorage.removeItem("token");
            setRedirec(true);
        }, 1000);
        return;
}
};
   // verificamos tiempo de expiracion cuando se monta el componente
useEffect(() =>{
    const timeout = setInterval(TokenExpirado, 100);
    return() =>clearInterval(timeout); // limpia al desmontar el componente
}, []);

if(redirec){
    return <Navigate to="/login/"/>
}
    return element;
};

export default RutasProtegitas

