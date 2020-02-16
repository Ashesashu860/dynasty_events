import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer_container">
      <img src={require("../assets/logo/logo_128x128.png")} alt="" />
      <aside>Div1</aside>
      <aside>Div2</aside>
      <aside>Div3</aside>
    </div>
  );
};

export default Footer;
