
console.log('Hola Mundo');


const nombre = 'Alexis'
const apellido = 'Escalante'

const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);


function getSaludo(input){
return 'Hola ' + input;
}

console.log(`Este es un texto: ${ getSaludo(nombreCompleto) }`);