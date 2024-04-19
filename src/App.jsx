import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/login/Login'
import Register from './pages/register/Register'

function App() {
  return (
    <Routes>
      <Route path='/signin' element={<Login />}/>
      <Route path='/' element={<Register />}/>
    </Routes>
  )
}

export default App
