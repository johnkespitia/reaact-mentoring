
import React, { useEffect, useState } from 'react'
import { gql, useQuery} from '@apollo/client'
import SearchComponent from './SearchComponent'
const PokemonScreen = () => {
    const [pokemon, setPokemon] = useState({})
    const [pokemonName, setPokemonName] = useState("bulbasaur")
    const GetPokemon = async (nameToSearch) =>{
        /*await fetch(`https://pokeapi.co/api/v2/pokemon/${nameToSearch}`, {
            method:'GET', 
        }).then((response)=> response.json()).then(data=>{
            setPokemon(data)
        })  
        */
        setPokemonName(nameToSearch)
    }
    const query = gql`
    query samplePokeAPIquery {
        pokemon_v2_pokemon(where: {name: {_eq: "${pokemonName}"}}) {
          name
          height
          pokemon_v2_pokemontypes {
            pokemon_v2_type {
              name
            }
          }
          pokemon_v2_pokemonsprites {
            sprites
          }
        }
      }
    `
    const result = useQuery(query)
    console.log(result.data?.pokemon_v2_pokemon[0].name)
    if(pokemon == null || (Object.keys(pokemon).length === 0 || pokemon.name != pokemonName)){
        setPokemon(result.data?.pokemon_v2_pokemon[0])
    }

    return <div>
        <SearchComponent searchFunction={GetPokemon} />
        {pokemon != null && Object.keys(pokemon).length > 0 && <div>
            <h1>{pokemon.name}</h1>
            <img src={pokemon?.sprites?.front_default} alt={pokemon.name} />
            <ul>
                <li>Weight: {pokemon.weight}</li>
                <li>Width: {pokemon.height}</li>
            </ul>
        </div>}
    </div>
} 

export default PokemonScreen