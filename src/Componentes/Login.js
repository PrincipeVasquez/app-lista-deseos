import React, {useState} from "react";

const Login = ({cambiarEstadoSesion, usuario, password, cambiarUsuario, cambiarPassword}) => {

    const handleUsuarioChange = (e) => {
        cambiarUsuario(e.target.value);
    }

    const handlePasswordChange = (e) => {
        cambiarPassword(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        // if(usuario === 'principe' && password === '123') {
        if(password === '123') {
            cambiarEstadoSesion(false);
        }
        else {
            alert('Clave o usuario incorrecto');
            cambiarUsuario('');
            cambiarPassword('');
        }
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <form action="" className="login__formulario" onSubmit={onSubmit}>
                <label htmlFor="name">Nombre:</label>
                <input 
                    type="text" 
                    placeholder="Ingrese su nombre" 
                    id="name"
                    name="usuario"
                    value={usuario}
                    onChange={handleUsuarioChange}>
                </input>

                <label htmlFor="password">Contraseña:</label>
                <input 
                    type="password" 
                    placeholder="Ingrese su contraseña" 
                    id="password"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}>
                </input>
                
                <button type="submit">Login</button>
            </form>
            <p>Creado por Príncipe Vásquez</p>
        </div>
    );
}

export default Login;