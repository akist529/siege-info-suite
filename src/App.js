import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/ui/nav-bar/NavBar.js'
import Operators from './pages/operators/Operators.js'

export default function App() {
  for (let i = 0; i < document.querySelectorAll('button').length; i++) {
    document.querySelectorAll('button')[i].addEventListener('click', (e) => e.preventDefault())
  }

  for (let i = 0; i < document.querySelectorAll('a').length; i++) {
    document.querySelectorAll('button')[i].addEventListener('click', (e) => e.preventDefault())
  }

  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Operators />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}