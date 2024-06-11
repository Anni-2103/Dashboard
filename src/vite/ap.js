
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Login'
import Home from './Home';
import Sidebar from './Sidebar'
 
 

function App() {
   

  return (
    <div>
      <BrowserRouter>
      <div className="app-container">
      <Sidebar />
      <Routes>
       
        
        <Route path="/" element={<Home />} />
        
       
        <Route path='/register' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
         
      </Routes>
      </div>
      </BrowserRouter>
       
     </div>
 
  )
}

export default App 