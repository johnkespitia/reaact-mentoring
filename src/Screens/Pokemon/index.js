
import React, { useState } from 'react'
import SearchComponent from './SearchComponent'
import GqlQuery from './GqlQuery'
const PokemonScreen = () => {
    
    const [pokemonName, setPokemonName] = useState("bulbasaur")
    const GetPokemon = (nameToSearch) =>{
        /*await fetch(`https://pokeapi.co/api/v2/pokemon/${nameToSearch}`, {
            method:'GET', 
        }).then((response)=> response.json()).then(data=>{
            setPokemon(data)
        })  
        */
        setPokemonName(nameToSearch)
    }
    return <div>
        <SearchComponent searchFunction={GetPokemon} />
        <GqlQuery pokemonName={pokemonName} />
    </div>
} 

export default PokemonScreen