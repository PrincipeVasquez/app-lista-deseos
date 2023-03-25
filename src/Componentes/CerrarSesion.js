import React from "react";

const CerrarSesion = ({sesion, cambiarEstadoSesion, cambiarUsuario, cambiarPassword}) => {
    const handleCloseSubmit = () => {
        cambiarEstadoSesion(true);

        cambiarUsuario('');
        cambiarPassword('');
    }
    
    return(
        <form action="" 
            className="container-form-cerrar-sesion" 
            onSubmit={handleCloseSubmit}>
            <button type="submit" className="container-form-cerrar-sesion__btn">
                Cerrar Sesión
            </button>
        </form>
    );
}

export default CerrarSesion;