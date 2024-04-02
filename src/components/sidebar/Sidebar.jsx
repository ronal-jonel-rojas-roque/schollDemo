import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../../style/sidebar.css";
import { PiHouseSimple } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { PiSignpostThin } from "react-icons/pi";
import { AiOutlineSchedule } from "react-icons/ai";
import { ImStatsBars } from "react-icons/im";
import { SlArrowLeft } from "react-icons/sl";
import { LuLogOut } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineContactSupport } from "react-icons/md";

const Sidebar = ({ isDayMode, user, handleLogout }) => {
    const [audienceActive, setAudienceActive] = useState(false);
    const [incomeActive, setIncomeActive] = useState(false);
    const [sidebarActive, setSidebarActive] = useState(false);

    const toggleAudience = () => {
        setIncomeActive(false);
        setAudienceActive(!audienceActive);

    };

    const toggleIncome = () => {
        setAudienceActive(false);
        setIncomeActive(!incomeActive);
    };

    const toggleSidebar = () => {
        setSidebarActive(!sidebarActive);
    };

    const logout = () => {
        handleLogout();
    };

    useEffect(() => {
        let audienceTimeout;
        let incomeTimeout;

        if (sidebarActive && audienceActive) {
            audienceTimeout = setTimeout(() => {
                setAudienceActive(false);
            }, 5000);
        }

        if (sidebarActive && incomeActive) {
            incomeTimeout = setTimeout(() => {
                setIncomeActive(false);
            }, 5000);
        }

        return () => {
            clearTimeout(audienceTimeout);
            clearTimeout(incomeTimeout);
        };
    }, [audienceActive, incomeActive, sidebarActive]);

    return (
        <div className={`container ${isDayMode ? 'day-mode' : 'night-mode'} ${sidebarActive ? 'active' : ''}`}>
            <div className={`sidebar ${sidebarActive ? 'active' : ''}`}>
                <div>
                    <div className="menu-btn" onClick={toggleSidebar}>
                        <SlArrowLeft className={`icon ${sidebarActive ? 'active' : ''}`} />
                    </div>
                    <div className="head">
                        <div className="user-img">
                            <img src={user.datos.imageperfil} alt={user.datos.name} />
                        </div>
                        <div className="user-details">
                            <p className="title">{user.tipoUsuario}</p>
                            <p className="name">{user.datos.name} {user.datos.apellp}</p>
                        </div>
                    </div>
                </div>

                <div className="nav">
                    <div className="menu">
                        <p className="title">Menú</p>
                        <ul>
                            <li className={`${isDayMode ? 'day-mode' : 'night-mode'}`}>
                                <Link to="/Dashboard" className="link-content">
                                    <PiHouseSimple className="icon" />
                                    <span className="text">Dashboard</span>
                                </Link>
                            </li>
                            <li onClick={toggleAudience} className={audienceActive ? 'active' : ''}>
                                <Link to="#" className="link-content">
                                    <CiUser className='icon' />
                                    <span className="text">Información</span>
                                    <FaAngleDown className={`arrow ${audienceActive ? 'rotate' : ''}`} />
                                </Link>
                                <ul className={`sub-menu ${isDayMode ? 'day-mode' : 'night-mode'} ${audienceActive ? 'active' : ''}`}>
                                    <li >
                                        <Link to="/Course" className="link-content">
                                            <span className="text">Mis Cursos</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="link-content">
                                            <span className="text">Tareas</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/Home" className="link-content">
                                    <PiSignpostThin className='icon' />
                                    <span className="text">Publicaciones</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/Schedule" className="link-content">
                                    <AiOutlineSchedule className='icon' />
                                    <span className="text">Horarios</span>
                                </Link>
                            </li>

                            <li onClick={toggleIncome} className={incomeActive ? 'active' : ''}>
                                <Link to="#" className="link-content">
                                    <ImStatsBars className="icon" />
                                    <span className="text">Estadisticas</span>
                                    <FaAngleDown className={`arrow ${incomeActive ? 'rotate' : ''}`} />
                                </Link>
                                <ul className={`sub-menu ${isDayMode ? 'day-mode' : 'night-mode'} ${incomeActive ? 'active' : ''}`}>
                                    <li>
                                        <Link to="#" className="link-content">
                                            <span className="text">Completadas</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="link-content">
                                            <span className="text">Pendientes</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="link-content">
                                            <span className="text">No realizadas</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="link-content">
                                            <span className="text">Resumen de Notas</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="menu">
                        <p className="title">Configuración</p>
                        <ul>
                            <li>
                                <Link to="#" className={`link-content ${isDayMode ? 'day-mode' : 'night-mode'}`} >
                                    <IoSettingsOutline className="icon" />
                                    <span className="text">Configuración</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="menu">
                        <p className="title">Cuenta</p>
                        <ul>
                            <li>
                                <Link to="#" className="link-content">
                                    <MdOutlineContactSupport className="icon" />
                                    <span className="text">Ayuda</span>
                                </Link>
                            </li>
                            <li onClick={logout}>
                                <Link to="#" className={`link-content ${isDayMode ? 'day-mode' : 'night-mode'}`}>
                                    <LuLogOut className="icon" />
                                    <span className="text">Cerrar Sesión</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Sidebar;
