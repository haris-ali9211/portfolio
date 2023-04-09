import React, { useState } from "react";
import { Heading, Text, Button, CloseButton } from '@chakra-ui/react';
import { AiFillGithub, AiFillTwitterCircle, AiOutlineArrowRight } from "react-icons/ai";
import { BsInstagram,BsLinkedin, BsChevronDown } from "react-icons/bs";
import { FaDiscord  } from "react-icons/fa";
import avatar from "./../../images/1676226862178.jpg";
import "./About.css";


const About = () => {
  
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const hide = () => setIsVisible(false);

  const getFontSize = () => {
    let width = window.innerWidth;
    if(width < 450) return "5rem";
    if(width < 1250) return "6rem";
    return "8rem";
  }

  const getAlertSize = () => {
    let width = window.innerWidth;
    if(width < 1275) return "md";
    return "lg";
  }

  const Alert = () => {
    if(isVisible) {
      return(
        <div className="alert">
          <Heading as="h3" size={getAlertSize()}>💻{"   "}<a href="rabeebaqdas@gmail.com" className="contact-link">Hire Me!</a></Heading>
          <CloseButton size='lg' className="close-btn" onClick={() => hide()} />
        </div>
      )
    }else{
      return null
    }
  }

  return(
    <>
    <Alert />
    <div className="bg">
      <div className="about-wrapper">
        <div className="about-text"  >
          <div className="about-title">
            <Heading as='h1' fontSize={getFontSize()} size='4xl'>
              Hi! 👋
            </Heading>
            <Heading as='h1' fontSize={getFontSize()} size='4xl'>
              I'm <span className="name">Haris</span>
            </Heading>
          </div>
          <div className="about-text-desc">
            <Text fontSize='3xl'>passionate <span className="name">Blockchain and MERN Developer</span> hailing from Pakistan. With nearly a year of hands-on experience in blockchain development, I'm deeply passionate about the web3 industry and committed to expanding my knowledge every day.</Text>
          </div>

          <div className="icons">
            <a href="https://github.com/haris-ali9211" target="_blank">
              <AiFillGithub className="icon" />
            </a>
            <a href="https://twitter.com/hariss_ali9211" target="_blank">
              <AiFillTwitterCircle className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/harisaali/" target="_blank">
              <BsLinkedin className="icon" />  
            </a>
          </div>

          <a href="mailto:hariss.ali9211@gmail.com">
            <Button size='lg' rightIcon={<AiOutlineArrowRight />} colorScheme="blue" variant='solid'>
              Contact Me
            </Button>
          </a>
        </div>
        <div className="about-avatar">
          <img src={avatar} className="avatar" alt="Rabeeb Bitmoji" />
        </div>
      </div>

      <div className="icon-wrapper">
        <div className="bottom-icon">
          <BsChevronDown />
        </div>
      </div>
    </div>
    </>
  )  
}

export default About;