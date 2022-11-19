import { Routes, Route, Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/ui/nav-bar/NavBar'
import Operators from './pages/operators/Operators'
import Maps from './pages/maps/Maps'
import Weapons from './pages/weapons/Weapons'
import Quizzes from './pages/quizzes/Quizzes'
import StratBuilder from './pages/strat-builder/StratBuilder'
import MyStats from './pages/my-stats/MyStats'
import NoPage from './pages/no-page/NoPage'

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route index path="operators" element={<Operators />} />
        <Route path="maps" element={<Maps />} />
        <Route path="weapons" element={<Weapons />} />
        <Route path="quizzes" element={<Quizzes />} />
        <Route path="stratbuilder" element={<StratBuilder />} />
        <Route path="mystats" element={<MyStats />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Outlet />
    </div>
  );
}