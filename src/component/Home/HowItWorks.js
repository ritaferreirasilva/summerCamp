import React from "react";

export default function HowItWorks() {
  return (
    <div className="how-it-works" id="how-it-works">
      <div className="container without-padding">
        <div className="background has-background-blue-dark">
          <div className="columns">
            <div className="top">
              <h2 className="title has-font-size-large ">How it works</h2>
            </div>
            <div className="content has-font-size-medium">
              <div className="row">
                <div className="box">
                  <p>
                    01 <br />
                    <br /> You submit your application.
                  </p>
                </div>
                <div className="box">
                  <p>
                    02 <br />
                    <br /> We check your profile.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="box">
                  <p>
                    03 <br />
                    <br /> We schedule
                    <br /> a call to meet you*.
                  </p>
                </div>
                <div className="box">
                  <p>
                    04 <br />
                    <br /> You join the program!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
