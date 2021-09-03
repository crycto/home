import React, { memo, useCallback } from "react";

import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import polygon from "../assets/polygon.svg";
import { Link } from "react-router-dom";

const contractAddress = "0xADA6Fc084d4b1Fd4a15e4A040FD1d8E303EE3Da4";
const URLS = {
  polygon: "https://polygon.technology/",
  contract: `https://polygonscan.com/address/${contractAddress}#code`,
};

function Footer() {
  const goTo = useCallback((name) => {
    window.open(URLS[name], "_blank", "noopener");
  }, []);

  return (
    <div className="footer">
      <div className="copyright">
        Copyright &#169; 2021 Crycto. All Rights Reserved.
      </div>

      <div className="right">
        <div onClick={goTo.bind(null, "contract")}>
          Contract &nbsp;
          <span className="purple-text cp">
            {contractAddress.substr(0, 8)}...
            <OpenInNewIcon fontSize="inherit" />
          </span>
        </div>
        <div onClick={goTo.bind(null, "polygon")}>
          Built on <img class="polygonicon" src={polygon} alt="" />
          <span className="purple-text">Polygon</span>
        </div>

        <Link to="/terms" style={{ marginLeft: "1rem" }}>
          Terms of service
        </Link>
      </div>
    </div>
  );
}

export default memo(Footer);
