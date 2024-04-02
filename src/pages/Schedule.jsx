import React, { useEffect, useState } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import "../style/schedule.css";
import { Navigate } from 'react-router-dom';
import courseData from '../data/courseData';

export default function Schedule({ isDayMode, user, handleLogout }) {
    const [expandedDay, setExpandedDay] = useState(null);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [showDetails, setShowDetails] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date());
        }, 60000);

        return () => clearInterval(interval);
    }, []);

    if (!user) {
        return <Navigate to="/" />;
    }

    const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

    const toggleDetails = (course) => {
        setShowDetails(showDetails === course ? null : course);
    };

    const toggleDay = (day) => {
        setExpandedDay(expandedDay === day ? null : day);
    };

    const getDayColor = (day) => {
        const dayIndex = daysOfWeek.indexOf(day);
        const todayIndex = (currentDate.getDay() + 6) % 7;
        if (dayIndex === todayIndex) return "yellow";
        if (dayIndex < todayIndex) return "red";
        return "green";
    };

    const getDayStatusText = (day) => {
        const dayIndex = daysOfWeek.indexOf(day);
        const todayIndex = (currentDate.getDay() + 6) % 7;

        if (dayIndex === todayIndex) return "Hoy";
        if (dayIndex < todayIndex) return "Pasado";
        return "Futuro";
    };

    const findCoincidences = (selectedCourse) => {
        const coincidences = courseData.filter(course => (
            course.courseName === selectedCourse.courseName && course.professor === selectedCourse.professor && course.day !== selectedCourse.day
        ));

        return coincidences.length > 0 ? coincidences : null;
    };

    return (
        <div>
            <div className="layout">
                <Sidebar isDayMode={isDayMode} user={user} handleLogout={handleLogout} />
                <div className="schedule-container">
                    <h1>Horario</h1>
                    <div className="time-grid">
                        {daysOfWeek.map((day, index) => (
                            <div key={index} className="day">
                                <h1 className='title-day' onClick={() => toggleDay(day)}>
                                    {day}
                                    <span className='alert-day' style={{ float: 'right', color: getDayColor(day) }}>
                                        {getDayStatusText(day)}
                                    </span>
                                </h1>
                                {expandedDay === day && (
                                    <div className="data-day">
                                        {courseData.filter(course => course.day === day).map((course, index) => (
                                            <div key={index} className='day-content'>
                                                <div className='day-schedule'>
                                                    <div className='head-day-content'>
                                                        <p className='data-day-t courseName'>{course.courseName}</p>
                                                        <p className='data-day-t Detalles' onClick={() => toggleDetails(course)}>Detalles</p>
                                                    </div>
                                                    <div className='data-day-t'>
                                                        <p className='data-text'>{course.professor}</p>
                                                        <p className='data-text'>{`${course.startTime} - ${course.endTime}`}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        {showDetails && (
                                            <div className="coincidencias-schedule">
                                                <div className="coincidencias-schedule-data">
                                                    <p>{showDetails.courseName}</p>
                                                    <div className="close-icon" onClick={() => setShowDetails(null)}>✖️</div>
                                                    {findCoincidences(showDetails) ? (
                                                        findCoincidences(showDetails).map((coincidence, i) => (
                                                            <div key={i}>
                                                                <p>{coincidence.day}</p>
                                                                <p>{`${coincidence.startTime} - ${coincidence.endTime}`}</p>
                                                            </div>
                                                        ))
                                                    ) : (
                                                        <div>
                                                            <p>No hay coincidencias</p>
                                                            <span>⚠️</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
