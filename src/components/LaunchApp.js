import { Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";

function LaunchApp() {
  return (
    <div className="launch-btn-big">
      <div
        className="launch-btn-big-inner"
        onClick={() => window.open("https://mumbai.crycto.io/")}
      >
        <span className="border" />
        <span className="border" />
        <span className="border" />
        <span className="border" />
        Try It Out
      </div>
    </div>
  );
}

export default LaunchApp;
