import React from 'react';
import Logo from "./Logo"
import BestPokemon from "./BestPokemon"
import CaughtPokemon from "./CaughtPokemon"

function App() {
  const abilities = ['Anticipation', 'Adaptability', 'Run-Away']
  const todayDate = new Date().toLocaleDateString();

  return (
    <div>
      <Logo appName="Pokedex" />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon todayDate={todayDate} />
    </div>
  )
}

export default App;
