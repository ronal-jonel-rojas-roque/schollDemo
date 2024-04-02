import React from 'react';
import "./activeuser.css";

const ActiveUsers = ({ allUsers, user }) => {
  const docentes = allUsers.filter(user => user.tipoUsuario === 'Docente');
  const estudiantes = allUsers.filter(user => user.tipoUsuario === 'estudiante');

  return (
    <div>
      <div className='container-user-active'>
        <div className='user-active-div'>
          <div>
            <p className='title-user'>Docentes</p>
            {docentes.map((docente) => (
              <div key={docente.id} className='user-active'>
                <img src={docente.datos.imageperfil} alt="asda" className='image-user' />
                <p className='name-user-active'>
                  {docente.id === user.id && docente.tipoUsuario === user.tipoUsuario ?
                    <span className="highlight-text">{`${docente.datos.name} ${docente.datos.apellp}`} <span className="you-text">(Tú)</span></span>
                    : `${docente.datos.name} ${docente.datos.apellp}`
                  }
                </p>
              </div>
            ))}
          </div>
          <div>
            <p className='title-user'>Estudiantes</p>
            {estudiantes.map((estudiante) => (
              <div key={estudiante.id} className='user-active'>
                <img src={estudiante.datos.imageperfil} alt="asda" className='image-user' />
                <p className='name-user-active'>
                  {estudiante.id === user.id && estudiante.tipoUsuario === user.tipoUsuario ?
                    <span className="highlight-text">{`${estudiante.datos.name} ${estudiante.datos.apellp}`} <span className="you-text">(Tú)</span></span>
                    : `${estudiante.datos.name} ${estudiante.datos.apellp}`
                  }
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActiveUsers;
