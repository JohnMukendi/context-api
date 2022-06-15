import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from '../comps/banner'
import January from '../comps/january'
import {useContext} from 'react'
import { userContext } from './Context'

export default function Home() {

const {color, setColor , username,flasher,setFlasher} = useContext(userContext)
  
const toggle = ()=>{
  setColor(!color)
}


  return (
    <>
    <h1 style={{background:color?'blue':'red'}}>
      {username}
    </h1>
    <button onClick={toggle}
        style={{background:color?'black':'grey',
        color:color?'white':'black',
        padding:'20px',margin:'20px'
      }}
    >
      click me
    </button>



    </>
  )
}

