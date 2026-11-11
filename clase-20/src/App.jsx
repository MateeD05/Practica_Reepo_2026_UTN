import React, { useContext } from 'react'
import './global.css'
import { Route, Routes } from 'react-router'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import LoginScreen from './Screens/LoginScreen/LoginScreen'
import ContactDetailScreen from './Screens/ContactDetailScreen/ContactDetailScreen'
import { ThemeContext } from './Context/ThemeContext'
import { LangContext } from './LangContext/LangContext'

export default function App() {
  const { theme } = useContext(ThemeContext)
  console.log("[App.jsx]", theme)

  const {langSelect} = useContext(LangContext)
  console.log("[langContext.jsx]", langSelect)
  return (
    <Routes>
      <Route path='/' element={<HomeScreen />} />
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/contact/:contact_id' element={<ContactDetailScreen />} />
    </Routes>
  )
}