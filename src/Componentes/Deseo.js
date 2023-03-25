import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch, faCircleCheck, faPencil, faCircleXmark } from '@fortawesome/free-solid-svg-icons'

const Deseo = ({deseo, toggleCompletada, editarDeseo, borrarTarea}) => {
    const [editandoDeseo, cambiarEditandoDeseo] = useState(false);
    const [nuevoDeseo, cambiarNuevoDeseo] = useState(deseo.texto);

    const handleSubmit = (e) => {
        e.preventDefault();
        editarDeseo(deseo.id, nuevoDeseo);
        cambiarEditandoDeseo(false);
    }

    return(
        <li className="lista-deseos__deseo">
            <FontAwesomeIcon icon={deseo.completada ? faCircleCheck : faCircleNotch} 
                className="lista-deseos__icono lista-deseos__icono-check"
                onClick={() => toggleCompletada(deseo.id)}
            />
            <div className="lista-deseos__texto">
                {editandoDeseo ?
                    <form action="" className="formulario-editar-tarea" onSubmit={handleSubmit}>
                        <input 
                            type="text"
                            className="formulario-editar-tarea__input"
                            value={nuevoDeseo}
                            onChange={(e) => {cambiarNuevoDeseo(e.target.value)}}>
                        </input>
                        <button 
                            type="submit"
                            className="formulario-editar-tarea__btn">
                        Listo
                        </button>
                    </form>
                :
                deseo.completada ? <del>{deseo.texto}</del> : deseo.texto
                }
            </div>
            <div className="lista-deseos__contenedor-botones">
                <FontAwesomeIcon icon={faPencil} 
                    className="lista-deseos__icono-accion"
                    onClick={() => cambiarEditandoDeseo(!editandoDeseo)}/>

                <FontAwesomeIcon icon={faCircleXmark} 
                    className="lista-deseos__icono-accion"
                    onClick={() => borrarTarea(deseo.id)}/>
            </div>
        </li>
    );
}

export default Deseo;