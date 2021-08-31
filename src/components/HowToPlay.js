import React from "react";
import metamask from "../assets/metamask.svg";
import blockchain from "../assets/blockchain.svg";
import polygon from "../assets/polygon.svg";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import Card from "./Card";

function HowToPlay() {
  return (
    <section id="how-to-section" class="crycto-how-section">
      {/* <img class="background" src={bat} alt="" /> */}

      <div class="prerequiste">
        <label>HOW TO GET STARTED</label>
        <div className="content">
          <Card
            image={metamask}
            title="Crypto Wallet"
            content="You'd need a crypto wallet like MetaMask to be able to interact with
            the game"
            action="Install MetaMask"
            handleAction={() =>
              window.open(
                "https://metamask.io/index.html",
                "_blank",
                "noopener noreferrer"
              )
            }
          />

          <Card
            image={blockchain}
            title="Polygon Network"
            content="Connect your wallet to Polygon Network (Previously Matic)"
            action="How to configure polygon network ?"
            handleAction={() =>
              window.open(
                "https://docs.matic.network/docs/develop/metamask/config-polygon-on-metamask/",
                "_blank",
                "noopener noreferrer"
              )
            }
          />

          <Card
            image={polygon}
            title="Add funds to your wallet"
            content="You can add MATIC to your wallet directly using Transak or thro' exchanges like WazirX"
            links={[
              { text: "Transak", href: "https://global.transak.com/" },
              { text: "WazirX", href: "https://wazirx.com/" },
            ]}
            action2="WazirX"
          />
        </div>
      </div>
      <div className="gameplay">
        <label>HOW TO PLAY</label>
        <div class="content">
          <Card
            step="1"
            content="Choose an upcoming round that you'd like to play"
          />
          <DoubleArrowIcon color="inherit" fontSize="inherit" />
          <Card
            step="2"
            content="Use your pitch reading skills to predict the right score range"
          />
          <DoubleArrowIcon color="inherit" fontSize="inherit" />
          <Card
            step="3"
            content="Place your bet with desired amount in MATIC"
          />
          <DoubleArrowIcon color="inherit" fontSize="inherit" />
          <Card
            step="4"
            content="When you win, claim your reward share based on your bet amount"
          />
        </div>
      </div>
    </section>
  );
}

// const Card = ({ image, title, content }) => <div className="card"></div>;

export default HowToPlay;
