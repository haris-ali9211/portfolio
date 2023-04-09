import React from 'react'
import "./navbar.css"
import {AiOutlineHome} from 'react-icons/ai'
import {FaRegUser} from 'react-icons/fa'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageDetail} from 'react-icons/bi'

import { useState } from 'react'






const navbar = () => {

const [activeNav, setActiveNav] = useState('#')

  return (
    <>
    <nav>
      <a href='#home' title='Home' onClick={()=> setActiveNav('#')} className={activeNav=== '#' ? 'active' : ''} ><AiOutlineHome/></a>
      <a href='#about' title='About Me' onClick={()=> setActiveNav('#about')} className={activeNav=== '#about' ? 'active' : ''}><FaRegUser/></a>
      <a href='#experience' title='experience' onClick={()=> setActiveNav('#exp')} className={activeNav=== '#exp' ? 'active' : ''}><BiBook/></a>
      <a href='#portfolio' title='portfolio' onClick={()=> setActiveNav('#ser')} className={activeNav=== '#ser' ? 'active' : ''}><RiServiceLine/></a>
      <a href='#contact' title='Contact' onClick={()=> setActiveNav('#con')} className={activeNav=== '#con' ? 'active' : ''}><BiMessageDetail/></a>
    </nav>
    
    </>
  )
}

export default navbar