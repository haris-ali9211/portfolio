import React from 'react'
import './footer.css'
import {FiTwitter} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'
import {FaFacebook} from 'react-icons/fa'

const footer = () => {
  return (
    <>
    <footer>
    <a href="#" className="footer_logo"> UMER FAROOQ <span className="wave">👋🏼</span> </a>
    <ul className='permalinks'>
       <li><a href="#"> Home </a></li>
       <li><a href="#about"> About </a></li>
       <li><a href="#experience">Experience </a></li>
       <li><a href="#portfolio">Portfolio </a></li>
       <li><a href="#contact"> Contact </a></li>
    </ul>
    <div className="footer_socials">
       <a href="https://www.facebook.com/umer.pharooq"><FaFacebook/></a>
       <a href="https://www.instagram.com/umer_pharooq"><FiInstagram/></a>
       <a href="https://twitter.com/umerpharooq"><FiTwitter/></a>
    </div>

          <div className="footer_copyright">
            <small>&copy; Umer Farooq RUAR enterprises. All rights reserved.</small>
          </div>
      </footer>
    </>
  )
}

export default footer