import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Navbar from './components/navbar/Navbar'
import Landing from './components/landing/Landing'

function App() {
  return (
    <Routes>
      <Route path='/signin' element={
        <>
          <Navbar />
          <Login />
        </>
      }/>
      <Route path='/register' element={
        <>
          <Navbar />
          <Register />
        </>
      }/>
      <Route path='/' element={
        <>
          <Navbar />
          <Landing />
        </>
      }/>
      <Route path='/hobbies' element={<Navbar />}/>
    </Routes>
  )
}

export default App