import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { v4 as uuidv4 } from 'uuid';

const FormularioDeseos = ({deseos, cambiarDeseos}) => {
    const [inputDeseo, cambiarInputDeseo] = useState('');
    
    const handleInput = (e) => {
        cambiarInputDeseo(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        cambiarDeseos([
            ...deseos
            , {
                id: uuidv4(),
                texto: inputDeseo,
                completada: false
            }
        ])

        cambiarInputDeseo('');
    }
    
    return(
        <form action="" className="container-form-deseos" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Ingrese deseo" 
                className="container-form-deseos__input"
                value={inputDeseo}
                onChange={(e) => handleInput(e)}>
            </input>

            <button type="submit" className="container-form-deseos__btn">
                <FontAwesomeIcon icon={faPaperPlane} 
                className="container-form-deseos__icono"/>
            </button>
        </form>
    );
}

export default FormularioDeseos;