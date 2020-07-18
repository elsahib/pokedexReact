import React from 'react';
import Logo from "./Logo"
import BestPokemon from "./BestPokemon"
import CaughtPokemon from "./CaughtPokemon"

function logWhenClicked() {
  console.log("The logo is Clicked!");
}

function App() {
  const abilities = ['Anticipation', 'Adaptability', 'Run-Away']
  const todayDate = new Date().toLocaleDateString();

  return (
    <div>
      <Logo appName="Pokedex" clickAction={logWhenClicked} />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon todayDate={todayDate} />
    </div>
  )
}

export default App;
