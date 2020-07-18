import React, { useState, useEffect } from 'react';
const BestPokemonFetcher = () => {
    const [bestPokemon, setBestPokemon] = useState(null)
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/1/`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBestPokemon(data)
            })
    }, [])

    return !bestPokemon ? null : <BestPokemon pokemon={bestPokemon} />
}

const BestPokemon = (props) => {
    return (
        <div>
            <p>My favourite Pokemon is Squirtle</p>
            <ul>
                {props.pokemon.abilities.map((item, index) => <li key={index}>{item.ability.name}</li>)}
            </ul>
        </div>
    )
}

export default BestPokemonFetcher