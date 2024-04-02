import React, { useEffect, useState } from 'react'
import "../style/home.css";
import Sidebar from '../components/sidebar/Sidebar';
import { Navigate } from 'react-router-dom';
import Posts from '../components/home/posts/Posts';
import ActiveUsers from '../components/home/usersactives/ActiveUsers';
import allUsersData from './../data/users-data/user';

const Home = ({ isDayMode, user, handleLogout }) => {
  const [usersVisible, setUsersVisible] = useState(window.innerWidth >= 1200);
  const [showToggleButton, setShowToggleButton] = useState(window.innerWidth < 1200);
  const [allUsers, setAllUsers] = useState([]);

  const toggleUsersVisibility = () => {
    setUsersVisible(!usersVisible);
  };

  useEffect(() => {

    setAllUsers(allUsersData);

    const handleResize = () => {
      const width = window.innerWidth;
      setShowToggleButton(width < 1200);
      if (width >= 1200) {
        setUsersVisible(true);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


/*  console.log('Usuarios en Home:', user); */

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
        <div className='container-home'>
          <div className='posts-container-home'>
            <Posts />
          </div>

          <div className={`users-container-home ${usersVisible ? 'visible' : 'hidden'}`}>
            <div>
              <h2 className='title-users-actives'>Usuarios</h2>
              <ActiveUsers allUsers={allUsers} user={user}/>
            </div>

          </div>
          {showToggleButton && (
            <p className="toggle-users-btn" onClick={toggleUsersVisibility}>
              {usersVisible ? 'Ocultar Usuarios' : 'Mostrar Usuarios'}
            </p>
          )}

        </div>

      </div>
    </div>
  )
}
export default Home;
