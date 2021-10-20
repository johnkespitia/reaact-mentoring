import React, { useEffect, useState } from 'react'
import { gql, useQuery} from '@apollo/client'

const GetPokemon = ({pokemonName}) => {
    const [pokemon, setPokemon] = useState({})
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
    
   let result = useQuery(query)
    useEffect(()=>{ 
        if(pokemon == null || (Object.keys(pokemon).length === 0 || pokemon.name !== pokemonName)){
                setPokemon(result.data?.pokemon_v2_pokemon[0])
        }
    },[pokemonName, result, pokemon])
    
    if(pokemon !== null && pokemon !== undefined ){
        return <div>
        <h1>{pokemon.name}</h1>
        <img src={pokemon?.sprites?.front_default} alt={pokemon.name} />
        <ul>
            <li>Weight: {pokemon.weight}</li>
            <li>Width: {pokemon.height}</li>
        </ul>
    </div>
    }else{
        return <h2>Input a Pokemon Name</h2>
    }
    
}

export default GetPokemon