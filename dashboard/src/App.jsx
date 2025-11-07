import './App.css'
// import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import CreateAccount from './pages/CreateAccount'
import DisplayAccount from './pages/DisplayAccount'
import UpdateAccount from './pages/UpdateAccount'
import UserContext from './context/user-context'
import { InitialUser } from './constants'
import { useEffect, useMemo, useState } from 'react'


function App() {
  const [user, setUser] = useState(() => {
    const currentUser = localStorage.getItem('user')

    return currentUser ? JSON.parse(currentUser) : InitialUser
  })
  
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])

  const contextValue = useMemo(() => ({user, setUser}), [user, setUser])

  
  return (
    <UserContext.Provider value={contextValue}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<CreateAccount />}/>
      <Route path='/display' element={<DisplayAccount/>}/>
      <Route path='/update' element={<UpdateAccount/>}/>
    </Routes>
  </BrowserRouter>
  </UserContext.Provider>
  )
}

export default App
