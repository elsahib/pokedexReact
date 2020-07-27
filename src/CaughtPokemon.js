import React, { useState } from 'react'

// Exercise C
// 1. Open the pokedex React application and open the CaughtPokemon.js file.
// 2. Create a new state variable called totalCaught and initialise it to 0
// 3. When you create the totalCaught state, you should also set the function that will update this state (hint: refer to the syntax of the useState hook).
// 4. Replace the number 0 in the JSX with your new totalCaught state.


const CaughtPokemon = ({ todayDate }) => {
    const [pokemonNameInput, setPokemonNameInput] = useState("");
    const [caughtPokemon, setCaughtPokemon] = useState([])

    const catchPokemon = () => {
        if (pokemonNameInput.trim() == "" || !pokemonNameInput) {
            setPokemonNameInput("")
            return;
        } else {
            setCaughtPokemon(caughtPokemon.concat([pokemonNameInput]))
            setPokemonNameInput("")
        }

    }

    const handleInputChange = (event) => {
        console.log(event.target.value);
        setPokemonNameInput(event.target.value)
    }
    return (
        <div>
            <input
                type="text"
                value={pokemonNameInput}
                onChange={handleInputChange}
            />
            <button onClick={catchPokemon}> Catch Pokemon!</button>
            <p>Caught {caughtPokemon.length} Pokemon on {todayDate}</p>
            They are :<ul>
                {caughtPokemon.map((pokemon, index) => <li key={index}>{pokemon}</li>)}
            </ul>
        </div>)
};

CaughtPokemon.defaultProps = { todayDate: "11/07/2010" }
export default CaughtPokemon