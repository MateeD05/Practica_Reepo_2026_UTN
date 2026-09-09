import React from 'react'
import { Link } from 'react-router'
import Sidebar from '../../Components/Sidebar/Sidebar'

export default function HomeScreen() {
  return (
    <div>
      <Link to={'/login'}>Iniciar sesion</Link>
      <h1>Bienvenido</h1>
      <Sidebar />
    </div>
  )
}
