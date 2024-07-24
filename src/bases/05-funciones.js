//Funciones en js


const saludar = function (nombre){
    return `Hola ${nombre}`;
}

const saludar2 =  (nombre) =>{
    return `Hola ${nombre}`;
}

const saludar3 =  (nombre) => `Hola ${nombre}`;
     
const saludar4 =  () => `Hola Mundo`;

console.log(saludar4());

function getUsuarioActivo(nombre){
    return{
        uid:"AABJ2E8",
        username: nombre,
    }
};



const usuarioActivo = getUsuarioActivo('Alexis');

console.log(usuarioActivo);


const getUsuarioActivo2 = (nombre)=>({
        uid:'AABJ2E8',
        username: nombre,
    });


console.log(getUsuarioActivo2('Alexis'));