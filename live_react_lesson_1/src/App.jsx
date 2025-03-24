import { useState } from 'react'
import './App.css'
import Character from './components/Character'

function App() {

  return (
    <>
      <h1 className='title'>My First React Project</h1>
      <div className="container">
        <Character />
        <Character />
        <Character />
        <Character />
      </div>
    </>
  )
}

export default App
