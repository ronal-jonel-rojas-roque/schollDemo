import { calcularEdad } from '../../utils/calculateedad';

const docente = {
    status: "success",
    items: [


        /* ====================================================================*/
        /* =============================== Docente ==========================*/
        /* ====================================================================*/

        /* ---------------------------------Hombres----------------------*/
        {
            id: 1,
            name: "Roberto",
            apellp: "Gutierres",
            apellm: "Esperm",
            gender: "men",
            correo: "rgutierres@gmail.com",
            password: "12345",
            fechaN: "14/05/1999",
            edad: "",
            imageperfil: require('../../assets/images/users/docentes/hombre/dh01.jpg'),
            cursos: ["Matemáticas II", "Programación", "Desarrollo Web", "Diseño Web", "Estructura de datos"],
            cantidad_alumnos: 30,
        },
        {
            id: 2,
            name: "Luis",
            apellp: "Colunga",
            apellm: "Coronado",
            gender: "men",
            correo: "luiscolunga@gmail.com",
            password: "12345",
            fechaN: "03/01/1997",
            edad: "",
            imageperfil: require('../../assets/images/users/docentes/hombre/dh02.jpg'),
            cursos: ["Matemáticas III", "Videojuegos"],
            cantidad_alumnos: 10,
        },
        {
            id: 3,
            name: "Rodrigo",
            apellp: "Vaca",
            apellm: "Del Campo",
            gender: "men",
            correo: "rodrigovaca@gmail.com",
            password: "12345",
            fechaN: "24/08/1990",
            edad: "",
            imageperfil: require('../../assets/images/users/docentes/hombre/dh01.jpg'),
            cursos: ["Matemáticas II", "Programación", "Desarrollo Web", "Diseño Web", "Estructura de datos"],
            cantidad_alumnos: 10,
        },


        /* ====================================================================*/
        /* =============================== Docente ==========================*/
        /* ====================================================================*/

        /* ---------------------------------Mujer----------------------*/

        {
            id: 4,
            name: "Fiorella",
            apellp: "Suarez",
            apellm: "Vertiz",
            gender: "women",
            correo: "fiorellasuarez@gmail.com",
            password: "12345",
            fechaN: "24/08/1990",
            edad: "",
            imageperfil: require('../../assets/images/users/docentes/hombre/dh01.jpg'),
            cursos: ["Matemáticas II", "Programación", "Desarrollo Web", "Diseño Web", "Estructura de datos"],
            cantidad_alumnos: 10,
        },
        {
            id: 5,
            name: "Stephani",
            apellp: "Contreras",
            apellm: "Obispo",
            gender: "women",
            correo: "StephaniObispo@gmail.com",
            password: "12345",
            fechaN: "24/08/1995",
            edad: "",
            imageperfil: require('../../assets/images/users/docentes/hombre/dh01.jpg'),
            cursos: ["Matemáticas II", "Programación", "Desarrollo Web", "Diseño Web", "Estructura de datos"],
            cantidad_alumnos: 10,
        }
    ],
};
docente.items.forEach((docente) => {
    docente.edad = parseInt(calcularEdad(docente.fechaN), 10);
});
export default docente;