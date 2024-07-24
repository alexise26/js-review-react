//Desestructuracion o asignacion Desestructurante


const persona = {
    nombre:'Tony',
    edad:45,
    clave:'Ironman'
}


const {nombre, apellido, clave} = persona;

console.log(nombre);


const UseContext = ({nombre, edad, rango = 'Cap'})=>{
    console.log(nombre, edad, rango);

    return {
        nombreClave:clave,
        anios:edad
    }
}

const {nombreClave, anios} = UseContext(persona);

console.log(nombreClave, anios);
