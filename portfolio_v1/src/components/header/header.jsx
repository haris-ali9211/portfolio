import React from 'react'
import CTA from './CTA'
import "./header.css"
import TypeWriterEffect from 'react-typewriter-effect';
import ME from "../../assets/image/me.png"
import HeaderSocials from "./headerSocials"
import { Fade } from 'react-reveal';

const header = () => {

  var data1 = "<"
  var data2 = "/>"

  return (
    <>
      <header id='home'>
        <div className="container header_container">
          <h5>Hello I'm</h5>
          <Fade top><h1 className='myname'><span className='sym'>{data1}</span> Haris ALi <span className='sym'>{data2}</span></h1></Fade>
          {/* <p style={{display:inline-block}}>{data}</p><h1>{data1}</h1><p></p> */}
          <h5 className="text-light post">

            <TypeWriterEffect
              textStyle={{
                textAlign: 'center',
                fontFamily: 'Poppins',
                color: 'var(--color-light)',
                fontWeight: 400,
                fontSize: '1.25em',
              }}
              startDelay={2000}
              cursorColor="var(--color-light)"
              multiText={[
                'FOOTBALLER',
                'MERN STACK DEVELOPER',
                'REACT NATIVE DEVELOPER',
              ]}

              loop={true}
              nextTextDelay={2000}

              typeSpeed={50}
            />
          </h5>
          <Fade top><CTA /></Fade>
          <HeaderSocials />

          <Fade bottom><div className="me">
            <Fade bottom delay={500}><img src={ME} alt="me" /></Fade>
          </div></Fade>
          <a href="#contact" className='scroll_down'>Scroll Down </a>
        </div>
      </header>
    </>
  )
}

export default header