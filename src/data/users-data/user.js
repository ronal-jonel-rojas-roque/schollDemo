import docenteData from './docente';
import studentData from './student';

const generateDocenteCredentials = () => {
  const docenteCredentials = [];

  docenteData.items.forEach((docente) => {
    docenteCredentials.push({
      id: docente.id,
      correo: docente.correo,
      password: docente.password,
      tipoUsuario: 'Docente',
      datos: docente,
      estado: 'activo',
      online: false,
    });
  });

  return docenteCredentials;
};  

const generateStudentCredentials = () => {
  const studentCredentials = [];

  studentData.items.forEach((student) => {
    studentCredentials.push({
      id: student.id,
      correo: student.correo,
      password: student.password,
      tipoUsuario: 'estudiante',
      datos: student,
      estado: 'activo',
      online: false,
    });
  });

  return studentCredentials;
};  

const docenteCredentials = generateDocenteCredentials();
const studentCredentials = generateStudentCredentials();

const userCredentials = [...docenteCredentials, ...studentCredentials];

export default userCredentials;
