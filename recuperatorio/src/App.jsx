import React, {useState} from 'react';
import './App.css'
import Card from './components/Card'

function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }


  return (
    <div className={`App ${theme}`}>
    <h1>Bienvenidos!</h1>
    <h2>Contanos, Cual es tu plataforma favorita?</h2>
    <Card></Card>
    <button onClick={toggleTheme}>Cambiar Tema</button>
    </div>
  )
}

export default App
