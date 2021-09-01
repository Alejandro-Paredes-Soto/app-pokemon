import React from'react';
import './Card.css';


const Card  = ({pokemons})=>{

  
  
return(


  
   pokemons && 
    
  
    <div className="my-card">
 
     
<div className="head" >
{
    pokemons.sprites ? (
        <img src={pokemons.sprites.front_default} alt="imagen"/>

    ):('')
}
</div>

<div className="content">

    <div className="name">
     <h3>Nombre:</h3>
     <strong>{pokemons.name}</strong>
    </div>
    <div className="move">
    <h3>Movimientos:</h3>
    {
        pokemons.moves ?(
            <strong>{pokemons.moves[0].move.name}</strong>
        ):('')
    }


   </div>
   <div className="ability">
   <h3>Abilidades:</h3>
   {
       pokemons.abilities ? (
           <strong>{pokemons.abilities[0].ability.name}</strong>
       ):('')
   }


   </div>

   <div className="ability">
   <h3>Tipo:</h3>
   {
       pokemons.types ? (
           <strong>{pokemons.types[0].type.name}</strong>
       ):('')
   }


   </div>
  
  


</div>


</div>

   
  
);

}



export default Card;