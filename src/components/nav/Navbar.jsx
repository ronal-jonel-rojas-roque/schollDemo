import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../style/navbar.css";
import logo from "../../assets/logo/logo.png"
import { BiBellOff } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import { IoIosContact } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { FaSun } from "react-icons/fa6";
import { GiNightSky } from "react-icons/gi";
import { LuLogOut } from "react-icons/lu";

const Navbar = ({ isDayMode, toggleDayNightMode, user, handleLogout }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [notifications, setNotifications] = useState(0);
    /* const [isDayMode, setIsDayMode] = useState(true); */
    /* const [modeText, setModeText] = useState('Modo noche'); */
    const [contactMenuOpen, setContactMenuOpen] = useState(false);
    const modeText = isDayMode ? 'Modo noche' : 'Modo día';
    /* const toggleDayNightMode = () => {
        setIsDayMode(!isDayMode);
        setModeText(isDayMode ? 'Modo dia' : 'Modo noche');
    }; */

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };



    const resetNotifications = () => {
        setNotifications(0);
    };

    const toggleContactMenu = () => {
        setContactMenuOpen(!contactMenuOpen);
    };
    const logout = () => {
        handleLogout();
    };
    return (
        <div className='container-navbar'>
            <nav className={`navbar ${isDayMode ? 'day-mode' : 'night-mode'}`}>
                <div className="navbar-left">
                    <Link to="/Home">
                        <img src={logo} alt="portada" />
                    </Link>

                </div>
                <div className="navbar-content">
                    <div className={`navbar-right ${isDayMode ? 'day-mode' : 'night-mode'}`}>
                        {menuOpen ? (
                            <Link to="#" className={`navbar-link ${isDayMode ? 'day-mode' : 'night-mode'}`}><BiBellOff /></Link>
                        ) : (
                            notifications > 0 ? (
                                <Link to="#" className={`navbar-link cart ${isDayMode ? 'day-mode' : 'night-mode'}`} onClick={resetNotifications}>
                                    <IoIosNotifications />
                                    <span className="item-total">{notifications}</span>
                                </Link>
                            ) : (
                                <Link to="#" className={`navbar-link ${isDayMode ? 'day-mode' : 'night-mode'}`}>
                                    <BiBellOff />
                                </Link>
                            )
                        )}

                    </div>
                    <div className={`mode-contact ${isDayMode ? 'day-mode' : 'night-mode'}`} onClick={toggleContactMenu}>
                        <IoIosContact />
                        {contactMenuOpen && (
                            <div className={`contact-menu ${isDayMode ? 'day-mode' : 'night-mode'}`}>
                                <div className={`contact-option ${isDayMode ? 'day-mode' : 'night-mode'}`}>
                                    <Link to="/Perfil" className={`navbar-link ${isDayMode ? 'day-mode' : 'night-mode'}`}>
                                        <IoSettingsOutline />
                                        <div className="text-container">
                                            <span>Mi perfil</span>
                                        </div>
                                    </Link>
                                </div>
                                <div className="contact-option">
                                    <Link to="/EditarPerfil" className={`navbar-link ${isDayMode ? 'day-mode' : 'night-mode'}`}>
                                        <IoSettingsOutline />
                                        <span>Editar Perfil</span>
                                    </Link>
                                </div>
                                <div className="contact-option" onClick={logout}>
                                    <Link to="#" className={`navbar-link ${isDayMode ? 'day-mode' : 'night-mode'}`}>
                                        <LuLogOut />
                                        <span>Cerrar Sesión</span>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={`mode-toggle ${isDayMode ? 'day-mode' : 'night-mode'}`} onClick={toggleDayNightMode}>
                        {isDayMode ? <GiNightSky className={isDayMode ? '' : 'night-mode'} /> :
                            <FaSun className={isDayMode ? '' : 'night-mode'} />}
                    </div>
                </div>
                <div className="hamburger-menu" onClick={toggleMenu}>
                    {menuOpen ? <MdClose /> : <GiHamburgerMenu />}
                </div>
                {menuOpen && (
                    <div className={`mobile-menu ${isDayMode ? 'day-mode' : 'night-mode'}`}>
                        {notifications > 0 ? (
                            <Link to="/notificaciones" className={`mobile-menu-link cart-mobile ${isDayMode ? 'day-mode' : 'night-mode'}`} onClick={resetNotifications}>
                                <div className='icon-container'>
                                    <IoIosNotifications />
                                    <span className="item-total-mobile">{notifications}</span>
                                </div>
                                <span>Notificaciones</span>
                            </Link>
                        ) : (
                            <Link to="#" className={`mobile-menu-link ${isDayMode ? 'day-mode' : 'night-mode'}`}>
                                <div className='icon-container'>
                                    <BiBellOff />
                                </div>
                                <span>Notificaciones</span>
                            </Link>
                        )}
                        <div className={`mode-contacts ${isDayMode ? 'day-mode' : 'night-mode'}`} onClick={toggleContactMenu}>
                            <div className='icon-container'>
                                <IoIosContact />
                                {contactMenuOpen && (
                                    <div className={`contact-menu-mobile ${isDayMode ? 'day-mode' : 'night-mode'}`}>
                                        <div className={`contact-option-mobile ${isDayMode ? 'day-mode' : 'night-mode'}`}>
                                            <Link to="/Perfil" className={`navbar-link ${isDayMode ? 'day-mode' : 'night-mode'}`}>
                                                <IoSettingsOutline />
                                                <div className="text-container">
                                                    <span>Mi perfil</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="contact-option-mobile">
                                            <Link to="/EditarPerfil" className={`navbar-link ${isDayMode ? 'day-mode' : 'night-mode'}`}>
                                                <IoSettingsOutline />
                                                <span>Editar Perfil</span>
                                            </Link>
                                        </div>
                                        <div className="contact-option-mobile" onClick={logout}>
                                            <Link to="#" className={`navbar-link ${isDayMode ? 'day-mode' : 'night-mode'}`}>
                                                <LuLogOut />
                                                <span>Cerrar Sesión</span>
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <span>Perfil</span>
                        </div>
                        <div className={`mode-toggles ${isDayMode ? 'day-mode' : 'night-mode'}`} onClick={toggleDayNightMode}>
                            <div className='icon-container'>
                                {isDayMode ? <GiNightSky /> : <FaSun />}
                            </div>
                            <span className={`${isDayMode ? 'day-mode' : 'night-mode'}`}>{modeText}</span>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;

