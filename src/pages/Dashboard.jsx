import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import RightSide from '../components/dashboard/rightside/RightSide'
import MainDash from '../components/dashboard/maindash/MainDash'
import "../style/dashboard.css";
import { Navigate } from 'react-router-dom';
const Dashboard = ({ isDayMode, user, handleLogout, sidebarActive  }) => {
    if (!user) {
        return <Navigate to="/" />;
    }
    return (
        <div >
            <div className="layout">
                <Sidebar
                    isDayMode={isDayMode}
                    user={user}
                    handleLogout={handleLogout}
                />
                <div className='App'>
                    <div className="AppGlass">
                        <MainDash />
                        <RightSide />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
