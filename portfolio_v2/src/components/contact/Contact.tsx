import React from "react";
import { Button } from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";
import { AiFillGithub, AiFillTwitterCircle, AiOutlineArrowRight } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
import "./Contact.css";

export type Contact = {
  name: string,
  info: string,
  icon: React.ReactElement,
  url: string,
}

export const contacts: Contact[] = [
  {
    name: "EMAIL:",
    info: "contactme@harisali",
    icon: <MdOutlineEmail className="contact-icon" />,
    url: "mailto:hariss.ali9211@gmail.com",
  },
  {
    name: "TWITTER:",
    info: "@hariss_ali9211",
    icon: <AiFillTwitterCircle className="contact-icon" />,
    url: "https://twitter.com/hariss_ali9211",
  },
  {
    name: "DISCORD:",
    info: "HA9211#9783",
    icon: <FaDiscord className="contact-icon" />,
    url: "https://discord.com/users/496726571202379816",
  },
  {
    name: "GitHub:",
    info: "@haris-ali9211",
    icon: <AiFillGithub className="contact-icon" />,
    url: "https://github.com/haris-ali9211",
  },
  {
    name: "LOCATION & ZONE:",
    info: "Pakistan, UTC+5",
    icon: <IoLocationOutline className="contact-icon" />,
    url: "https://www.timeanddate.com/time/zone/pakistan",
  },
];

const Contact = () => {
  return(
    <div className="bg-contact">
      <div className="contact-header">
        <p className="heading">Contacte Me</p>
        <p className="text">If you have any questions or want to hire me, please contact me:</p>
      </div>

      <div className="contact-grid">
        {contacts.map((contact: Contact) => {
          return(
            <a key={uuidv4()} href={contact.url} target="_blank">
              <div className="contact-section">
                  {contact.icon}
                  <div className="contact-text-div">
                    <p className="contact-title">{contact.name}</p>
                    <p className="contact-details">{contact.info}</p>
                  </div>
              </div>
            </a>
          )
        })}
      </div>

      <div className="button-container">
        <a href="mailto:hariss.ali9211@gmail.com">
          <Button size='lg' rightIcon={<AiOutlineArrowRight />} colorScheme="blue" variant='solid' className="contact-btn">
            Contact Me
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Contact;