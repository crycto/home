import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const navigateTo = (section) =>
  document
    .getElementById(section === 2 ? "early-support-section" : "how-to-section")
    .scrollIntoView({ behavior: "smooth" });

function Header() {
  const location = useLocation();

  return (
    <div class="header">
      <a class="appName" href="/">
        crycto
      </a>
      <div class="links">
        {location?.pathname?.indexOf("terms") !== -1 ? (
          <>
            <Link to={{ pathname: "/", hash: "#howtoplay" }}>
              How to play ?
            </Link>
            <Link to={{ pathname: "/", hash: "#earlysupport" }}>
              I'm interested
            </Link>
            <a target="_blank" href="https://mumbai.crycto.io" rel="noreferrer">
              Launch Testnet App
            </a>
            <a
              className="header-main-launch"
              target="_blank"
              href="https://app.crycto.io"
              rel="noreferrer"
            >
              Launch App
            </a>
          </>
        ) : (
          <>
            <Link
              to={{ hash: "#howtoplay" }}
              onClick={navigateTo.bind(null, 1)}
              rel="noreferrer"
            >
              How to play ?
            </Link>
            <Link
              to={{ hash: "#earlysupport" }}
              onClick={navigateTo.bind(null, 2)}
              rel="noreferrer"
            >
              I'm interested
            </Link>
            <a target="_blank" href="https://mumbai.crycto.io" rel="noreferrer">
              Launch Testnet App
            </a>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
