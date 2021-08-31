import React, { useEffect } from "react";
import Main from "./Main";
import HowToPlay from "./HowToPlay";
import LaunchApp from "./LaunchApp";
import EarlySupport from "./EarlySupport";
import { useLocation } from "react-router-dom";
function Home() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash.indexOf("howtoplay") !== -1) {
      document
        .getElementById("how-to-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }
    if (location.hash.indexOf("earlysupport") !== -1) {
      document
        .getElementById("early-support-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return (
    <>
      <Main />
      <HowToPlay />
      <LaunchApp />
      <EarlySupport />
    </>
  );
}

export default Home;
