import React from "react";
import Button from "../Button";

export default function Onboard() {
  return (
    <div className="onboard">
      <div className="box">
        <div className="container">
          <div
            className="title has-font-size-large"
            style={{ color: "var(--color-white)" }}
          >
            We'd love to have <br /> you on board!
          </div>
          <Button
            el="a"
            href="/"
            variant="white"
            className="has-font-size-medium"
          >
            Join us
          </Button>
        </div>
      </div>
    </div>
  );
}
