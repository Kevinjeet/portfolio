import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Games from './components/Games'
import Tetris from './components/Games/Tetris'
import TicTacToe from './components/Games/TicTacToe'

import './App.scss'

function App() {
  return (

      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/tetris" element={<Tetris />} />
        <Route path="/games/tictactoe" element={<TicTacToe />} />
        </Route>
      </BrowserRouter>

  )
}

export default App;
