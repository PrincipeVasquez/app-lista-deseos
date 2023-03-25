import React from "react";
import Deseo from "./Deseo";

const ListaDeseosMostrar = ({deseos, cambiarDeseos, mostrarCompletadas, cambiarMostrarCompletadas}) => {
    const toggleCompletada = (id) => {
        cambiarDeseos(deseos.map((deseo) => {
            if(deseo.id === id) {
                return{...deseo, completada: !deseo.completada}
            }
            else {
                return deseo;
            }
        }));
    }

    const editarDeseo = (id, nuevoTexto) => {
        cambiarDeseos(deseos.map((deseo) => {
            if(deseo.id === id) {
                return{...deseo, texto: nuevoTexto}
            }
            else {
                return deseo;
            }
        }));
    }

    const borrarTarea = (id) => {
        cambiarDeseos(deseos.filter((deseo) => {
            if(deseo.id !== id) {
                return deseo;
            }
            else {
                return;
            }
        }))
    }
    
    return(
        <ul className="container-lista-deseos">
            {/* {deseos.map((deseo) => {
                // return <li>{deseo.texto}</li>;
                return <Deseo deseo={deseo}/>
            })} */}

            {deseos.length > 0 ?
                deseos.map((deseo) => {
                    // return <li>{deseo.texto}</li>;
                    if(mostrarCompletadas) {
                        return <Deseo key={deseo.id}
                            deseo={deseo}
                            toggleCompletada={toggleCompletada}
                            editarDeseo={editarDeseo}
                            borrarTarea={borrarTarea}
                            />
                    }
                    else if(!deseo.completada){
                        return <Deseo key={deseo.id}
                            deseo={deseo}
                            toggleCompletada={toggleCompletada}
                            editarDeseo={editarDeseo}
                            borrarTarea={borrarTarea}
                            />
                    }
                    else {
                        return;
                    }
                })
            :
            <div className="container-lista-deseos__mensaje">
                <p>No hay deseos cargados</p>
            </div>
            }
        </ul>
        // <div>
        //     <CerrarSesion />
        // </div>
    );
}

export default ListaDeseosMostrar;