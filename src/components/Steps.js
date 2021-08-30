import React from "react";

function Steps() {
  return (
    <div className="steps">
      <Step step={1} text="Choose an upcoming round that you'd like to play" />
      <Step
        step={2}
        text="Use your skills to predict the right range of score"
      />
      <Step step={3} text="Place your bet with desired amount in MATIC" />
      <Step
        step={4}
        text="When you win, claim your reward share based on your bet amount"
      />
    </div>
  );
}

const Step = ({ step, text }) => (
  <div className="step">
    <span>{text}</span>
    <b className="number">{step}</b>
  </div>
);

export default Steps;
