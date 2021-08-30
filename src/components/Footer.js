import React, { memo, useCallback } from "react";

import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import polygon from "../assets/polygon.svg";

const contractAddress = "0x1a4553f";
const URLS = {
  polygon: "https://polygon.technology/",
  contract: `https://polygonscan.com/address/${contractAddress}`,
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
          <span className="purple-text">
            {contractAddress.substr(0, 8)}...
            <OpenInNewIcon fontSize="inherit" />
          </span>
        </div>
        <div onClick={goTo.bind(null, "polygon")}>
          Built on <img class="polygonicon" src={polygon} alt="" />
          <span className="purple-text">Polygon</span>
        </div>

        <span style={{ marginLeft: "1rem" }}>Terms of service</span>
      </div>
    </div>
  );
}

export default memo(Footer);
