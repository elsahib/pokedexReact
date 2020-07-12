import React from 'react';
const Logo = (props) => {

    return (
        < header >
            <h1>Welcome to the {props.appName}</h1>
            <img alt="" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" />
        </header >)
}
Logo.defaultProps = { appName: "First React App" }
export default Logo;