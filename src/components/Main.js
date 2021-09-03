import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import player from "../assets/player.svg";

const URLS = {
  twitter: "https://twitter.com/crycto_io",
  instagram: "https://www.instagram.com/crycto.io",
  linkedin: "https://www.linkedin.com/company/crycto",
  github: "https://github.com/crycto/smart-contracts",
  polygon: "https://polygon.technology/",
};

const goTo = (name) => {
  window.open(URLS[name], "_blank", "noopener");
};

function Main() {
  return (
    <div class="main-wrapper">
      <div class="container">
        <span class="desc">
          Fantasy <span>Cricket</span> Is Now On The <span>Blockchain</span>
        </span>

        <span class="caption">Play'n win crypto. Start with as low as ₹1</span>

        <div class="actions">
          <a
            target="_blank"
            href="https://mumbai.crycto.io"
            class="launch-btn"
            rel="noreferrer"
          >
            Launch Testnet App
          </a>
          {/* <span class="how-to-link" onClick={navigateToHowToSection}>
            How to play ?
          </span> */}
        </div>
        <div className="social">
          <span onClick={goTo.bind(null, "twitter")}>
            <TwitterIcon fontSize="inherit" />
          </span>
          <span onClick={goTo.bind(null, "instagram")}>
            <InstagramIcon fontSize="inherit" />
          </span>
          <span onClick={goTo.bind(null, "linkedin")}>
            <LinkedInIcon fontSize="inherit" />
          </span>
          <span onClick={goTo.bind(null, "github")}>
            <GithubIcon fontSize="inherit" />
          </span>
        </div>
      </div>
      <div className="bg-player">
        <img src={player} alt="" />
      </div>
    </div>
  );
}

export default Main;
