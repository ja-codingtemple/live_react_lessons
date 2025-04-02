import { useState, useEffect } from 'react'
import './App.css'
import DogFromAPI from './components/DogFromAPI'

function App() {

  useEffect(() => {
    document.body.classList.add('bg-dark', 'text-white');
  }, []);

  return (
    <>
      <DogFromAPI />
    </>
  )
}

export default App
