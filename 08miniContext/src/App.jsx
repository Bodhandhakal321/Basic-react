import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextprovider'

function App() {
  

  return (
    <UserContextProvider>
    <h1>React with chai and share is important</h1>
    <Login />
    <Profile />
    </UserContextProvider>
  )
}

export default App