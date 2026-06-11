import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
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

  const contextValue = useMemo(() => ({ user, setUser }), [user, setUser])

  // Determine if user already has a profile (all required fields filled)
  const hasProfile = user.firstname && user.lastname && user.email

  return (
    <UserContext.Provider value={contextValue}>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={hasProfile ? <Navigate to='/display' replace /> : <CreateAccount />}
          />
          <Route path='/display' element={<DisplayAccount />} />
          <Route path='/update' element={<UpdateAccount />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App
