import React from 'react';
const Logo = ({ appName, clickAction }) => {
    return (
        < header >
            <h1>Welcome to the {appName}</h1>
            <img onClick={clickAction} alt="" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" />
        </header >)
}
Logo.defaultProps = { appName: "First React App" }
export default Logo;