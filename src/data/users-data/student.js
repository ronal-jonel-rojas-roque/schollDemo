import { calcularEdad } from '../../utils/calculateedad';

const student = {
    status: "success",
    items: [


        /* ====================================================================*/
        /* =============================== estudiantes ==========================*/
        /* ====================================================================*/

        /* ---------------------------------Hombres----------------------*/
        {
            id: 1,
            name: "Ronal",
            apellp: "Rojas",
            apellm: "Roque",
            gender: "men",
            correo: "ronalrojasroquej@gmail.com",
            password: "12345",
            fechaN: "14/05/2020",
            edad: "",
            imageperfil: require('../../assets/images/users/docentes/hombre/dh01.jpg'),
            clases: ["Matemáticas II", "Programación", "Desarrollo Web", "Diseño Web", "Estructura de datos"],
        },
        {
            id: 2,
            name: "Christian",
            apellp: "Colunga",
            apellm: "Coronado",
            gender: "men",
            correo: "Christiancolunga@gmail.com",
            password: "12345",
            fechaN: "03/01/1997",
            edad: "",
            imageperfil: require('../../assets/images/users/docentes/hombre/dh02.jpg'),
            clases: ["Matemáticas III", "Videojuegos"],
        },
        {
            id: 3,
            name: "Pedro",
            apellp: "Vaca",
            apellm: "Del Campo",
            gender: "men",
            correo: "Pedro@gmail.com",
            password: "12345",
            fechaN: "24/08/1990",
            edad: "",
            imageperfil: require('../../assets/images/users/docentes/hombre/dh01.jpg'),
            clases: ["Matemáticas II", "Programación", "Desarrollo Web", "Diseño Web", "Estructura de datos"],
        },


        /* ====================================================================*/
        /* =============================== estudiantes ==========================*/
        /* ====================================================================*/

        /* ---------------------------------Mujer----------------------*/

        {
            id: 4,
            name: "Fabiola",
            apellp: "Suarez",
            apellm: "Vertiz",
            gender: "women",
            correo: "Fabiolasuarez@gmail.com",
            password: "12345",
            fechaN: "24/08/1990",
            edad: "",
            imageperfil: require('../../assets/images/users/docentes/hombre/dh01.jpg'),
            clases: ["Matemáticas II", "Programación", "Desarrollo Web", "Diseño Web", "Estructura de datos"],
        },
        {
            id: 5,
            name: "Cristina",
            apellp: "Contreras",
            apellm: "Obispo",
            gender: "women",
            correo: "CristinaObispo@gmail.com",
            password: "12345",
            fechaN: "24/08/1995",
            edad: "",
            imageperfil: require('../../assets/images/users/docentes/hombre/dh01.jpg'),
            clases: ["Matemáticas II", "Programación", "Desarrollo Web", "Diseño Web", "Estructura de datos"],
        }
    ],
};

student.items.forEach((student) => {
    student.edad = parseInt(calcularEdad(student.fechaN), 10);
});

export default student;