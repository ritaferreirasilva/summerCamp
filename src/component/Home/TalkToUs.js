import React from "react";
import Button from "../Button";

export default function TalkToUs() {
  return (
    <div className="talk-to-us">
      <div className="container">
        <div className="title has-font-size-large">Still got questions?</div>
        <Button el="a" href="/">
          Talk to us
        </Button>
      </div>
    </div>
  );
}
