const calculateAcademicHours = (startTime, endTime) => {
    const startHour = parseInt(startTime.split(':')[0]);
    const startMinute = parseInt(startTime.split(':')[1]);
    const endHour = parseInt(endTime.split(':')[0]);
    const endMinute = parseInt(endTime.split(':')[1]);

    let totalMinutes = 0;
    let currentHour = startHour;
    let currentMinute = startMinute;
    let academicHours = [];

    while (currentHour < endHour || (currentHour === endHour && currentMinute < endMinute)) {
        const hourRangeStart = `${currentHour.toString().padStart(2, '0')}:${currentMinute.toString().padStart(2, '0')}`;
        const nextMinute = currentMinute + 45;
        if (nextMinute < 60) {
            const hourRangeEnd = `${currentHour.toString().padStart(2, '0')}:${nextMinute.toString().padStart(2, '0')}`;
            academicHours.push({ fullHour: `${hourRangeStart} - ${hourRangeEnd}`, startHour: hourRangeStart, endHour: hourRangeEnd });
            currentMinute = nextMinute;
        } else {
            currentHour++;
            currentMinute = nextMinute - 60;
            const hourRangeEnd = `${currentHour.toString().padStart(2, '0')}:${currentMinute.toString().padStart(2, '0')}`;
            academicHours.push({ fullHour: `${hourRangeStart} - ${hourRangeEnd}`, startHour: hourRangeStart, endHour: hourRangeEnd });
        }
    }

    return academicHours;
};
export default calculateAcademicHours;
// Ejemplo de uso:
/* const startTime = '08:00';
const endTime = '23:00';
const academicHours = calculateAcademicHours(startTime, endTime);
console.log(academicHours); */
