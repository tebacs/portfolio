import React from 'react'
import Boton from '../Boton/Boton'

export default function Nav() {
  return (
    <div>
      <nav class="flex space bg-gray-400 text-black 
      dark:bg-gray-800 dark:text-white dark:text-font-bold">
        <ul class="flex space-x-5 height-full items-center">
          <li class="hover:bg-blue-500"><a href="#home">Home</a></li>
          <li class="hover:bg-blue-500"><a href="#about">About</a></li>
          <li class="hover:bg-blue-500"><a href="#contact">Contact</a></li>
          <li class="hover:bg-blue-500"><a href="#projects">Projects</a></li>
        </ul>
        <Boton 

          class="bg-red-300 bg-[url(../../public/moon.svg)] bg-no-repeat bg-center w-10 h-10 rounded-full ml-auto dark:bg-[url(../../public/sun.svg)]"
          onClick={() => {
            document.documentElement.classList.toggle('dark');
          }}
        />
      </nav>
    </div>
  )
}
