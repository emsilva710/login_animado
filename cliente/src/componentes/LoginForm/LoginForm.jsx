import React from 'react';
import './LoginForm.css';
import { MdEmail } from "react-icons/md";
import { GiPadlock } from "react-icons/gi";

const LoginForm = () => {
  return (
    <body>
        <div className='blob'></div>

        <div className='wrapper'>
        <form action="">
            <h2>Login</h2>
            <div className='input-box'>
                <MdEmail className='icon' />
                <input type="email" required/>
                <label>Email</label>
            </div>
            <div className='input-box'>
                <GiPadlock className='icon' />
                <input type="password" required/>
                <label>Contraseña</label>
            </div>
            <div className='remember-forgot'>
                <label><input type="checkbox" />
                     Mostrar contraseña
                </label>
                <a href="#">Has olvidado tu contraseña?</a>
            </div>
            <button type='submit'>Acceder</button>
            <div className="register-link">
                <p>No tiene una cuenta?<a href="#">Registrarse</a></p>
            </div>
        </form>
    </div>
    </body>
    
  );
};

export default LoginForm
