import React from 'react'
import ProductCard from './Componets/ProductCard/ProductCard'
import Menssage from './Componets/MenssageBox/Menssage'

export default function App() {
  let precio = 40000
  return (
    <div>
      <h1>holaesta es mi primera app en react</h1>
      <div>
        El valor del iva de ${precio} ARS es ${precio * 0.21} ARS
      </div>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <hr/>

      <Menssage
        author={"Yo"}
        menssage={"Hola,como estas?"}
      />

      <Menssage
        author={"Maria"}
        menssage={"Bien, vos?"}
      />
    </div>
  )
}

