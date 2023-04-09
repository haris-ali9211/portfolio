import React from "react";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/harisaali/" target="_blank">
        <FiLinkedin />
      </a>
      <a href="https://github.com/haris-ali9211" target="_blank">
        <FiGithub />
      </a>
      <a href="https://www.facebook.com/haris9211ali" target="_blank">
        <FiFacebook />
      </a>
      <a href="https://twitter.com/hariss_ali9211" target="_blank">
        <FiTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
