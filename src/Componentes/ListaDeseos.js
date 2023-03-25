import React from "react";

const ListaDeseos = ({usuario}) => {
    return(
        <div className="contenedor-listadeseos">
            <h1>Hola {usuario}</h1>
            <div className="contenedor-listadeseos__parrafo">
                <p>Queremos que siempre tengas en cuenta las metas que quieres cumplir, recuerda
                    , solo somos huéspedes en el hotel de la vida. Por eso acá te brindamos
                    una forma de anotar todas las metas que quieres cumplir, y asi hacer de
                    tu vida un alojamiento mucho mas placentero.
                </p>
            </div>
        </div>
    );
}

export default ListaDeseos;