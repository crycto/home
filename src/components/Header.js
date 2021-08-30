import React from "react";
import logo from "../assets/logo.png";

const navigateTo = (section) =>
  document
    .getElementById(section === 2 ? "early-support-section" : "how-to-section")
    .scrollIntoView({ behavior: "smooth" });

function Header() {
  return (
    <div class="header">
      <a class="appName" href="/">
        crycto
      </a>
      <div class="links">
        <a href="javascript:void(0)" onClick={navigateTo.bind(null, 1)}>
          How to play ?
        </a>
        <a href="javascript:void(0)" onClick={navigateTo.bind(null, 2)}>
          I'm interested
        </a>

        <a target="_blank" href="https://mumbai.crycto.io">
          Launch Testnet App
        </a>
      </div>
    </div>
  );
}

export default Header;
