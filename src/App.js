import './App.css';
import Login from './Componentes/Login';
import React, {useState, useEffect} from 'react';
import ListaDeseos from './Componentes/ListaDeseos';
import Header from './Componentes/Header';
import FormularioDeseos from './Componentes/FormularioDeseos';
import ListaDeseosMostrar from './Componentes/ListaDeseosMostrar';
import CerrarSesion from "./Componentes/CerrarSesion";

const App = () => {
  const [sesion, cambiarEstadoSesion] = useState(true);

  const [usuario, cambiarUsuario] = useState('');
  const [password, cambiarPassword] = useState('');

  // const [deseos, cambiarDeseos] = useState([
  //   {
  //     id: 1,
  //     texto: 'Viajar a Machu Picchu',
  //     completada: true
  //   },
  //   {
  //     id: 2,
  //     texto: 'Comprar una casa',
  //     completada: false
  //   }
  // ])

  // PONIENDO EL LOCAL STORAGE A MOSTRAR COMPLETADAS
  let configMostrarCompletadas = '';
  if(localStorage.getItem('mostrarCompletadas') === null) {
    configMostrarCompletadas = 'true';
  }
  else {
    configMostrarCompletadas = localStorage.getItem('mostrarCompletadas') === 'true';
  }

  // const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(true);
  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(configMostrarCompletadas);

  useEffect(() => {
    localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString());
  }, [mostrarCompletadas])
  // ********************

  // PONIENDO EL LOCAL STORAGE A DESEOS COMPLETADOS
  const deseosGuardados = localStorage.getItem('deseos') ?
                          JSON.parse(localStorage.getItem('deseos'))
                          : [];

  const [deseos, cambiarDeseos] = useState(deseosGuardados);

  useEffect(() => {
    localStorage.setItem('deseos', JSON.stringify(deseos));
  }, [deseos])
  // ********************

  return (
    <>
      {sesion == true ?
        <div className='contenedor'>
          <Login cambiarEstadoSesion={cambiarEstadoSesion} usuario={usuario} password={password} cambiarUsuario={cambiarUsuario} cambiarPassword={cambiarPassword}/>
        </div>
      :
      <div className="contenedor2">
        <ListaDeseos usuario={usuario}/>
        <Header 
          mostrarCompletadas={mostrarCompletadas}
          cambiarMostrarCompletadas={cambiarMostrarCompletadas}
        />
        <FormularioDeseos deseos={deseos} cambiarDeseos={cambiarDeseos} />
        <ListaDeseosMostrar
          cambiarDeseos={cambiarDeseos}
          mostrarCompletadas={mostrarCompletadas}
          cambiarMostrarCompletadas={cambiarMostrarCompletadas}
          deseos={deseos}
        />
        <CerrarSesion 
          sesion={sesion} 
          cambiarEstadoSesion={cambiarEstadoSesion} 
          cambiarUsuario={cambiarUsuario}
          cambiarPassword={cambiarPassword}
          />
      </div>
    }
    </>
  );
}

export default App;
