import { getHeroeById, heroes } from './bases/08-imp-exp';

const promesa = new Promise((resolve, reject) => {
   setTimeout(() => {
      const heroe = getHeroeById(2);
      console.log(heroe);
      resolve(heroe);    
   }, 2000);

});

promesa.then( (heroe) =>{
   console.log(heroe);
});
