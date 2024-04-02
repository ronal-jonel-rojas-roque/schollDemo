import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import "../style/login.css";
import userCredentials from '../data/users-data/user';

import Swal from 'sweetalert2';
import { MdOutlineContactMail } from "react-icons/md";
import { RiEyeCloseFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";

const Login = ({ onLogin }) => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if (!email.trim() && !password.trim()) {
            Swal.fire({
                title: 'Advertencia',
                text: 'Por favor, completa todos los campos',
                icon: 'warning',
                timer: 1000,
                timerProgressBar: true,
            });
            return;
        }
        if (!email.trim()) {
            Swal.fire({
                title: 'Advertencia',
                text: 'Por favor, ingrese su correo',
                icon: 'warning',
                timer: 1000,
                timerProgressBar: true,
            });
            return;
        }
        if (!password.trim()) {
            Swal.fire({
                title: 'Advertencia',
                text: 'Por favor, ingrese la contraseña',
                icon: 'warning',
                timer: 1000,
                timerProgressBar: true,
            });
            return;
        }
        const lowercaseEmail = email.toLowerCase();

        const foundUser = userCredentials.find(item => item.correo.toLowerCase() === lowercaseEmail && item.password === password);

        if (foundUser) {

            onLogin(foundUser);
            Swal.fire({
                title: 'Inicio de Sesión Exitoso',
                text: `Bienvenido ${foundUser.datos.name}`,
                icon: 'success',
                timer: 2000,
                timerProgressBar: true,

             }).then(() => {
                localStorage.setItem('isLoggedIn', 'true');
                navigate('/Home');
            });
        } else {
            Swal.fire({
                title: 'Error',
                timer: 2000,
                text: 'Correo o contraseña incorrectos',
                icon: 'error',
            });
        }
        localStorage.setItem('isLoggedIn', 'true');
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <section>
                <div className="form-box">
                    <div className="form-value">
                        <form>
                            <h2>Inicio de Sesión</h2>
                            <div className="inputbox">
                                <MdOutlineContactMail className='icon-login' />
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <label htmlFor="">Correo</label>
                            </div>
                            <div className="inputbox">
                                {showPassword ? (
                                    <FaEye className='icon-login' onClick={togglePasswordVisibility} />
                                ) : (
                                    <RiEyeCloseFill className='icon-login' onClick={togglePasswordVisibility} />
                                )}
                                <input
                                    type={showPassword ? "text" : "password"}
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />


                                <label htmlFor="">Contraseña</label>
                            </div>
                            <div className="forget">
                                <label htmlFor="">
                                    <input type="checkbox" />Recordarme
                                    <a href="#">Recordar Contraseña</a></label>
                            </div>
                            <button className="button" onClick={onSubmit} >INGRESAR</button>
                            {error && <p className="error">{error}</p>}
                            <div className="register">
                                <p>No tengo una cuenta <a href="#">Registrarme</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login
