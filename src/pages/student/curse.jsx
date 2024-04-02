import React from 'react'
import userscredential from '../../data/users-data/user';
import Sidebar from '../../components/sidebar/Sidebar';
import { Navigate } from 'react-router-dom';

export default function Course({ isDayMode, user, handleLogout }) {
    
  if (!user) {
    return <Navigate to="/" />;
  }
    return (
        <div>
            <div className="layout">
                <Sidebar
                    isDayMode={isDayMode}
                    user={user}
                    handleLogout={handleLogout}
                />
            </div>
        </div>
    )
}
