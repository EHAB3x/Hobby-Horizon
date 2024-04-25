import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Navbar from './components/navbar/Navbar'
import Landing from './components/landing/Landing'
import Categories from './components/categories/Categories'
import Team from './components/team/Team'
import Features from './components/features/Features'
import Footer from './components/footer/Footer'
import Profile from './pages/profile/Profile'
import Privacy from './pages/privacy/Privacy'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/signin' element={
          <>
            <Login />
          </>
        }/>

        <Route path='/register' element={
          <>
            <Register />
          </>
        }/>

        <Route path='/' element={
          <>
            <Landing />
            <Categories />
            <Team />
            <Features />
            <Footer />
          </>
        }/>

        <Route path='/profile' element={
          <Profile />
        }/>

        <Route path='/privacy' element={<Privacy />}/>
      </Routes>
    </>
  )
}

export default App
