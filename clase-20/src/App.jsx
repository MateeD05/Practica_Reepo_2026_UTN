import React from 'react'
import './global.css'
import { Route, Routes } from 'react-router'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import LoginScreen from './Screens/LoginScreen/LoginScreen'
import ContactDetailScreen from './Screens/ContactDetailScreen/ContactDetailScreen'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeScreen />} />
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/contact/:contact_id' element={<ContactDetailScreen />} />
    </Routes>
  )
}