import React from 'react'

export default function Etiqueta({nombre}) {
  return (
    <div>
      <span class="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
        {nombre}
      </span>
    </div>
  )
}
