import { heroes } from "../data/heroes";


console.log(heroes);

export const getHeroeById = (id)=>{
   return heroes.find((heroe) => heroe.id === id); 
};

//console.log(getHeroeById(2));


const getHeresbyOwner = (owner)=>{
   return heroes.filter((heroe)=> heroe.owner === owner);
};

//console.log(getHeresbyOwner('DC'));