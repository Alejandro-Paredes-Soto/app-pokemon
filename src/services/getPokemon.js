
const baseUrl = 'https://pokeapi.co/api/v2/';
const getPokemon = async (name) =>{

    const promise =await fetch(baseUrl+`pokemon/${name.toLowerCase()}`);
    const data =  await promise.json();
    return data;
}


export default getPokemon;