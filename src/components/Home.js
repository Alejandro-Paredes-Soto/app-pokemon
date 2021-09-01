import React from 'react';
import {useState} from 'react';
import getPokemon from './../services/getPokemon';
import Card from './Card';
import './Home.scss';

import './../Responsives/ResponsiveHome.css';

const Home = () =>{

const [searchPokemon, setSearchPokemon] = useState('');
const [pokemons,setPokemons] =useState([]);


const fnSubMenu = () =>{

    const submenu = document.getElementById('submenu');
    submenu.classList.toggle('show')
    
}

const fnSearch = async () =>{
 
    if(searchPokemon.length <=3 || !searchPokemon){

         return alert('escribe el nombre bien');
    }

    await getPokemon(searchPokemon)
    .then(response => setPokemons(response))
    
}

const preventDefault = (e) =>{ 
    e.preventDefault();
     fnSearch()
    }


return(
    <div className="Home">

   <div className="content">
       <nav className="navbar">
       
            
             <img className="head-pikachu" alt="img-pikachu" src="data:image/png;base64,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"/>
    
     <form action="/" onSubmit={preventDefault}>

           <input className="form-control border-0" 
                  placeholder="Ingresa el nombre de tu pokemon"
                  onChange={(e)=> setSearchPokemon(e.target.value)}/>
           <button>Buscar

           <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-search"  viewBox="0 0 16 16">
           <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
           </svg>

           </button>

       </form>

       <div className="options">
           <a href="/home">Buscar pokemon</a>

       </div>

       <button className="btn-hambur" onClick={()=>fnSubMenu()}>
       <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
      </svg>
       </button>

       <div className="sub-menu" id="submenu">
           <a href="/home">Buscar pokemon</a>

       </div>

       </nav>

       <div className="info-pokemon">
           <Card pokemons={pokemons}/>

       </div>

       <footer >

           <div className="redes">
               <h5>Que hago?</h5>
               <h6>Paginas Web</h6>
               <h6>Aplicaciones Web</h6>
               
           </div>

           <div className="contactos">
                 <h5>Contactame a mis correos electronicos</h5>
               <strong>alejandroparedessoto18@gmail.com</strong>
               <strong>alejandro_paredes_soto@hotmail.com</strong>

           </div>

        
       </footer>

   </div>

    </div>
);


}


export default Home;