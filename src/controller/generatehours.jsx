import React from 'react';
import { format, addMinutes } from 'date-fns';

export default function GenerateHours() {

    const generateHours = () => {
        const hours = [];
        let currentPosition = new Date(0, 0, 0, 8, 0);
        let nextPosition;
        let cellCount = 0;

        for (let i = 0; i <= 19; i++) {
            nextPosition = new Date(currentPosition.getTime() + 45 * 60000);

            const startHour = formatHour(currentPosition.getHours(), currentPosition.getMinutes());
            const endHour = formatHour(nextPosition.getHours(), nextPosition.getMinutes());
            const hourRange = `${startHour} - ${endHour}`;

            hours.push(
                <div key={`${startHour}-${endHour}`} className="hour-rage">
                    {hourRange}
                </div>
            );

            currentPosition = nextPosition;
            cellCount++;
        }
        console.log(cellCount)
        return hours;
    };

    const formatHour = (hour, minute) => {
        const formattedHour = hour < 10 ? `0${hour}` : hour;
        const formattedMinute = minute < 10 ? `0${minute}` : minute;
        return `${formattedHour}:${formattedMinute}`;
    };

    return (
        <div className="time-column">
            {generateHours()}
        </div>
    );
}
