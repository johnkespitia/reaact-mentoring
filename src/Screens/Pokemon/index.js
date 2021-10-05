
import React, { useState } from 'react'
import SearchComponent from './SearchComponent'
const PokemonScreen = () => {
    const [pokemon, setPokemon] = useState({})
    const getPokemon = async (nameToSearch) =>{
        await fetch(`https://pokeapi.co/api/v2/pokemon/${nameToSearch}`, {
            method:'GET', 
        }).then((response)=> response.json()).then(data=>{
            setPokemon(data)
        })        
    }

    return <div>
        <SearchComponent searchFunction={getPokemon} />
        <div>
            <h1>{pokemon.name}</h1>
            <img src={pokemon?.sprites?.front_default} alt={pokemon.name} />
            <ul>
                <li>Weight: {pokemon.weight}</li>
                <li>Width: {pokemon.height}</li>
            </ul>
        </div>
    </div>
} 

export default PokemonScreen