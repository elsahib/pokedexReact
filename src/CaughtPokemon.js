import React, { useState } from 'react'

// Exercise C
// 1. Open the pokedex React application and open the CaughtPokemon.js file.
// 2. Create a new state variable called totalCaught and initialise it to 0
// 3. When you create the totalCaught state, you should also set the function that will update this state (hint: refer to the syntax of the useState hook).
// 4. Replace the number 0 in the JSX with your new totalCaught state.


const CaughtPokemon = ({ todayDate }) => {
    const [totalCaught, setTotalCaught] = useState(0);
    const [pokemonNameInput, setPokemonNameInput] = useState("");
    const [caughtPokemon, setCaughtPokemon] = useState([])

    const catchPokemon = () => {
        setCaughtPokemon(caughtPokemon.concat([pokemonNameInput]))
    }
    const incrementTotal = () => {
        setTotalCaught(totalCaught + 1);

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
            <p>Caught {totalCaught} Pokemon on {todayDate}</p>
        </div>)
};

CaughtPokemon.defaultProps = { todayDate: "11/07/2010" }
export default CaughtPokemon