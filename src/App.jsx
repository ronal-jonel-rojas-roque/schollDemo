import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
/* import './App.css'; */
import Home from './pages/Home';
import Login from "./pages/Login";
import Navbar from './components/nav/Navbar';
import Dashboard from './pages/Dashboard';
import Scrolltop from './components/scrolltop/Scrolltop';
import Schedule from './pages/Schedule';
import Course from './pages/student/curse';
import userCredentials from './data/users-data/user';

function App() {
  const [isDayMode, setIsDayMode] = useState(true);
  const [user, setUser] = useState(null);
  

  const handleLogin = (userData) => {
    const updatedUserCredentials = userCredentials.map((cred) => {
      if (cred.id === userData.id) {
        return { ...cred, online: true };
      }
      return cred;
    });
  

    setUser(userData);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userCredentials', JSON.stringify(updatedUserCredentials));

  };

  const handleLogout = () => {
    setUser(null);
  };

  const toggleDayNightMode = () => {
    setIsDayMode(prevMode => !prevMode);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Login onLogin={handleLogin} />}
        />
        <Route
          path="/Home"
          element={
            <>
              <Navbar
                isDayMode={isDayMode}
                toggleDayNightMode={toggleDayNightMode}
                user={user}
                handleLogout={handleLogout}
              />
              <Home isDayMode={isDayMode} user={user} handleLogout={handleLogout} />
            </>
          }
        />
        <Route
          path="/Dashboard"
          element={
            <>
              <Navbar
                isDayMode={isDayMode}
                toggleDayNightMode={toggleDayNightMode}
                user={user}
                handleLogout={handleLogout}
              />
              <Dashboard isDayMode={isDayMode} user={user} handleLogout={handleLogout} />
            </>
          }
        />

        <Route
          path="/Schedule"
          element={
            <>
              <Navbar
                isDayMode={isDayMode}
                toggleDayNightMode={toggleDayNightMode}
                user={user}
                handleLogout={handleLogout}
              />
              <Schedule isDayMode={isDayMode} user={user} handleLogout={handleLogout} />
            </>
          }
        />

        <Route
          path="/Course"
          element={
            <>
              <Navbar
                isDayMode={isDayMode}
                toggleDayNightMode={toggleDayNightMode}
                user={user}
                handleLogout={handleLogout}
              />
              <Course isDayMode={isDayMode} user={user} handleLogout={handleLogout} />
            </>
          }
        />
      </Routes>
      <Scrolltop />

    </>


  );
}

export default App;
