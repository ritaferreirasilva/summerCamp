import React from "react";

export default function JoinUs() {
  return (
    <div className="join-us">
      <div className="container content">
        <div className="columns">
          <div className="left">
            <h2 className="title has-font-size-xlarge">Join us</h2>
          </div>

          <div className="right">
            <div className="item">
              <h3 className="title has-font-size-xlarge">
                <span class="sr-only">on a hands-on approach</span>
                <span aria-hidden="true">
                  on a{" "}
                  <span className="has-text-blue has-font-family-secondary">
                    hands-on
                  </span>{" "}
                  approach
                </span>
              </h3>
              <div className="text has-font-size-small">
                <p>
                  We created SummerCamp back in 2016 as a way to foster talent,
                  get new work perspectives and contribute to boosting new
                  career opportunities. We believe in continuous learning and
                  improvement, so SummerCamp is yet another way of us acting on
                  those values.
                </p>
              </div>
            </div>
            <div className="item">
              <h3 className="title has-font-size-xlarge">
                <span class="sr-only">to get a real work experience</span>
                <span aria-hidden="true">
                  <span>to get a </span>
                  <span className="has-text-blue has-font-family-secondary">
                    real work
                  </span>
                  <br />
                  <span>experience</span>
                </span>
              </h3>
              <div className="text has-font-size-small">
                <p>
                  Whether you want to follow a career in technology or product,
                  during your time at SummerCamp you'll get access to a real use
                  case that will help you understand how a job in that area
                  could be like.
                </p>
              </div>
            </div>
            <div className="item">
              <h3 className="title has-font-size-xlarge ">
                <span>with the support of</span> <span>a</span>{" "}
                <span className="has-text-blue has-font-family-secondary">
                  great team
                </span>
              </h3>
              <div className="text has-font-size-small">
                <p>
                  Our team members will be your mentors during the entire
                  program, wich means that you will always have someone to back
                  your decisions and help you choose wich path to follow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
