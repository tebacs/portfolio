import React from 'react'

export default function Boton({texto, ...props}) {
  return (
    <div>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" {...props}>
        {texto}
      </button>
    </div>
  )
}
