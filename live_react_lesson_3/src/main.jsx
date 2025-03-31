import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ConditionalWithAnd from './components/ConditionalWithAnd.jsx'
import ConditionalWithTernary from './components/ConditionalWithTernary.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ternary" element={<ConditionalWithTernary />} />
        <Route path="/and" element={<ConditionalWithAnd />} />
      </Routes>
    </Router>
  </StrictMode>,
)
