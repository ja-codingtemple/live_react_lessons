import { useState } from 'react'
import './App.css'
import ConditionalWithAnd from './components/ConditionalWithAnd'
import ConditionalWithTernary from './components/ConditionalWithTernary'
import Navigation from './components/Navigation'

function App() {

  return (
    <>
    <Navigation/>
    <h1>Welcome!</h1>
    <p>This is a simple React project which showcases how to use React Router to build navigation into your website, as well as a couple examples of conditional rendering.</p>
    </>
  )
}

export default App
