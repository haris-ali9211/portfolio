import React from "react";
import "./Footer.css";

const Footer = () => {
  var d = new Date(); 
  let year = d.getFullYear(); 

  return(
    <div className="bg-footer">
      <p className="footer-text">&copy; Copyright {year}, Haris Ali</p>
    </div>
  )
}

export default Footer;