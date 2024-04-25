import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Navbar from './components/navbar/Navbar'
import Categories from './components/categories/Categories'
import Profile from './pages/profile/Profile'
import Privacy from './pages/privacy/Privacy'
import Home from './pages/home/Home'
import HobbyPage from './pages/hobbyPage/HobbyPage'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/signin' element={<Login />}/>

        <Route path='/register' element={<Register />}/>

        <Route path='/' element={<Home />}/>

        <Route path='/profile' element={<Profile />}/>

        <Route path='/privacy' element={<Privacy />}/>
        
        <Route path='/hobbies' element={
          <div className="hobby__page">
            <Categories />
          </div>
        }/>

        <Route path='/hobbies/:hobbyName' element={
          <HobbyPage />
        }/>
      </Routes>
    </>
  )
}

export default App
