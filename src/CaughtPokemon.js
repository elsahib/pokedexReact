import React from 'react'

const CaughtPokemon = (props) => {
    return (<p>Caught 0 Pokemon on {props.todayDate}</p>)
}
CaughtPokemon.defaultProps = { todayDate: "11/07/2010" }
export default CaughtPokemon