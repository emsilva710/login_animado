import React from 'react';
import './LoginForm.css';
import { PiUserFill } from 'react-icons/pi';
import { IoLockClosed } from 'react-icons/io5';

const LoginForm = () => {
    return (

        <div className='container'>
            <div className="login-form-container">
                <div className="blob"></div>
                <div className="logo"></div>
                <div className="wrapper">

                    <form action="">
                        <div className="input-box">
                            <PiUserFill className="icon" />
                            <input type="text" required />
                            <label>Usuario</label>
                        </div>
                        <div className="input-box">
                            <IoLockClosed className="icon" />
                            <input type="password" required />
                            <label>Contraseña</label>
                        </div>
                        <div className="remember-forgot">
                            <label>
                                <input type="checkbox" />
                                Mostrar contraseña
                            </label>
                            <a href="#">Has olvidado tu contraseña?</a>
                        </div>
                        <button type="submit">Acceder</button>
                        <div className="register-link">
                            <p>Cooperativa 8 de Marzo Ltda.®</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default LoginForm;


