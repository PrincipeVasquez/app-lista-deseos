import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const Header = ({mostrarCompletadas, cambiarMostrarCompletadas}) => {
    const toggleCompletadas = () => {
        cambiarMostrarCompletadas(!mostrarCompletadas);
    }
    
    return(
        <header>
            <div className="header">
                <h2>Lista de deseos</h2>
                {mostrarCompletadas ?
                    <button className="header__boton" onClick={() => toggleCompletadas()}>
                    Mostrar hechas
                    <FontAwesomeIcon icon={faEye} className="header__icono"/>
                    </button>
                :
                    <button className="header__boton" onClick={() => toggleCompletadas()}>
                    No mostrar hechas
                    <FontAwesomeIcon icon={faEyeSlash} className="header__icono"/>
                    </button>
                }                
            </div>
        </header>
    );
}

export default Header;