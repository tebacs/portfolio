import React from 'react'
import Etiqueta from '../Etiqueta/Etiqueta'
import herramientas from '../../../herramientas.json'

export default function Herramientas() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {herramientas.map((herramienta, index) => (
        <Etiqueta key={index} nombre={herramienta} />
      ))}
    </div>
  )
}
