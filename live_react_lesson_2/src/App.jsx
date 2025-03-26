import { useState } from 'react'
import './App.css'
import Character from './components/Character'
import DogDisplay from './components/DogDisplay'

function App() {

  return (
    <>
      <DogDisplay/>
      <Character name="Ghor" type="Weaponmaster" />
      <Character name="Cassiel" type="Mage" />
      <Character name="James" type="Fighter" />
    </>
  )
}

export default App
