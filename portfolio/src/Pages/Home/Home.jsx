import React, {useState} from 'react'
import styles from './Home.module.css'
import Nav from '../../Components/Nav/Nav'
import Proyecto from '../../Components/Proyecto/Proyecto'

export default function Home() {
  return (
    <div>
      <Nav />
      <Proyecto></Proyecto>
    </div>
  )
}
