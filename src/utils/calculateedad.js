export const calcularEdad = (fechaNacimiento) => {
    const partesFecha = fechaNacimiento.split('/');

    const fechaN = new Date(partesFecha[2], partesFecha[1] - 1, partesFecha[0]);
    const fechaActual = new Date();
    let edad = fechaActual.getFullYear() - fechaN.getFullYear();

    if (fechaActual.getMonth() < fechaN.getMonth() || (fechaActual.getMonth() === fechaN.getMonth() && fechaActual.getDate() < fechaN.getDate())) {
        edad--;
    }
    return edad;
};
