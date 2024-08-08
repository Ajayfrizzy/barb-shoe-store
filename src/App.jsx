import  './App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './login/login'
import Signup from './signup/signup'
import Single from './single-view/single'
import Adminlogin from './admin-section/login/adminLogin'
import Adminsignup from './admin-section/signup/adminSignup'
import Admin from './admin-section/admin'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/single' element={<Single/>}/>
      <Route path='/adminlogin' element={<Adminlogin/>}/>
      <Route path='/adminsignup' element={<Adminsignup/>}/>
      <Route path='/admin' element={<Admin/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App