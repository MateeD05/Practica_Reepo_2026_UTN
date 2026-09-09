import React from 'react'
import { useParams } from 'react-router'
import { contact_list } from '../../Components/ContactsList/ContactsList'

export default function ContactDetailScreen() {
  const { contact_id } = useParams()
  const contactId = Number(contact_id)

  const contact = contact_list.find((item) => item.id === contactId)

  if (!contact) {
    return <div>No se encontró el contacto.</div>
  }

  return (
    <div>
      <h1>Detalle del contacto</h1>
      <h2>{contact.nombre}</h2>
      <p>Último mensaje: {contact.ultimo_mensaje}</p>
      <p>Fecha: {contact.fecha_ultimo_mensaje}</p>
    </div>
  )
}
