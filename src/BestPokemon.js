import React, { useState, useEffect } from 'react';

function BestPokemonSelector() {
    const [pokemonId, setPokemonId] = useState(null);

    function handleBulbasaurClick() {
        setPokemonId(1);
    }
    function handleCharmanderClick() {
        setPokemonId(4);
    }

    return (
        <div>
            <button onClick={handleBulbasaurClick}>Fetch Bulbasaur</button>
            <button onClick={handleCharmanderClick}>Fetch Charmander</button>
            {pokemonId ? <BestPokemonFetcher pokemonId={pokemonId} /> : null}
        </div>
    );
}

const BestPokemonFetcher = (props) => {
    const [bestPokemon, setBestPokemon] = useState(null)
    useEffect(() => {
        setBestPokemon(null)
        fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemonId}/`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBestPokemon(data)
            })
    }, [props.pokemonId])

    return !bestPokemon ? "Loading..." : <BestPokemon pokemon={bestPokemon} />
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

export default BestPokemonSelector