import "../index.css";
import "./Home.css";

import { graphql } from "gatsby";
import React, { Fragment } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Testimonials from "../component/Testimonials";
import FAQs from "../component/FAQs";
import ProjectShowcase from "../component/ProjectShowcase";
import Nav from "../component/Nav";
import FirstPhotoChallenge from "../images/FirstPhotoChallenge.jpg";
import SecondPhotoChallenge from "../images/SecondPhotoChallenge.jpg";
import ImageBackground from "../images/ImageBackground.png";
import ImageFooter from "../images/ImageFooter.jpg";
import Campers1 from "../images/Campers1.jpg";
import ThreeDee from "../component/ThreeDee";

function JoinUs() {
  return (
    <div className="join-us">
      <div className="container content">
        <div className="columns">
          <div className="left">
            <h2 className="title has-font-size-xlarge">Join us</h2>
          </div>

          <div className="right">
            <div className="item">
              <h2 className="has-font-size-xlarge ">
                <span>on a </span>
                <span className="has-text-blue has-font-family-secondary">
                  hands-on
                </span>
                <br />
                <span>approach</span>
              </h2>
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
              <h2 className="title has-font-size-xlarge">
                <span>to get a </span>
                <span className="has-text-blue has-font-family-secondary">
                  real work
                </span>
                <br />
                <span>experience</span>
              </h2>
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
              <h2 className="title has-font-size-xlarge ">
                <span> with the support of</span>
                <br />
                <span>a </span>
                <span className="has-text-blue has-font-family-secondary">
                  great team
                </span>
              </h2>
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

function AreYouUp() {
  return (
    <div className="are-you-up">
      <div className="container">
        <div className="challenge">
          <div className="columns">
            <div className="header">
              <h2 className="title has-font-size-xlarge">
                Are you up to this challenge?
              </h2>
              <div className="content has-font-size-small">
                <p>
                  Here you will meet other Campers that share your passion for
                  technology, and who will work alongside you to create a cool
                  new product from scratch.
                </p>
              </div>
            </div>
            <div className="firstphoto">
              <img src={FirstPhotoChallenge} aria-hidden="true" alt="" />
            </div>

            <div className="secondphoto">
              <img src={SecondPhotoChallenge} aria-hidden="true" alt="" />
            </div>
          </div>
        </div>
        <div className="if-you-like">
          <div className="columns">
            <div className="left">
              <h2 className="title has-font-size-large">If you like</h2>
            </div>

            <div className="right has-text-blue has-font-family-secondary has-font-size-large">
              <div className="item">
                <div class="line"></div>
                <p>product design</p>
              </div>
              <div className="item">
                <div class="line"></div>
                <p>product management</p>
              </div>
              <div className="item">
                <div class="line"></div>
                <p>programming</p>
              </div>
            </div>
          </div>
        </div>
        <div className="your-opportunity">
          <div className="header">
            <h2 className="title has-font-size-large">
              This is your opportunity to
            </h2>
          </div>
          <div className="columns">
            <div className="item has-background-blue has-font-size-medium ">
              <div className="title ">01</div>
              <p>Get professional experience</p>
            </div>
            <div className="item has-background-blue-dark has-font-size-medium">
              <div className="title">02</div>
              <p>Meet other talented people</p>
            </div>
            <div className="item has-background-purple has-font-size-medium">
              <div className="title">03</div>
              <p>Learn with experienced mentors</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DontJustTake({ testimonials }) {
  return (
    <div className="dont-just-take" id="testimonials">
      <div className="container">
        <div className="columns">
          <div className="top has-font-size-large">
            <h2>
              But don't just take our
              <br />
              word for it
            </h2>
          </div>
          <div className="bottom">
            <Testimonials testimonials={testimonials} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Showcase({ projects }) {
  return (
    <div className="showcase" id="projects">
      <div className="container">
        <div className="columns">
          <div className="header has-font-size-large">
            <h2 className="title">
              Here's what our campers have done in the past years
            </h2>
          </div>
        </div>
        <div className="projects">
          <ProjectShowcase projects={projects} />
        </div>
      </div>
    </div>
  );
}

function HowItWorks() {
  return (
    <div className="how-it-works" id="how-it-works">
      <div className="container">
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

function SomeQuestions({ faqs }) {
  return (
    <div className="some-questions" id="faqs">
      <div className="container">
        <div className="columns">
          <div className="top">
            <h2 className="title has-font-size-large">
              Some questions we are usually asked
            </h2>
          </div>
          <div className="bottom">
            <FAQs faqs={faqs} />
          </div>
        </div>
      </div>
    </div>
  );
}

function TalkToUs() {
  return (
    <div className="talk-to-us">
      <div className="container">
        <div className="title has-font-size-large">Still got questions?</div>
        <a href="/" className="button">
          Talk to us
        </a>
      </div>
    </div>
  );
}

function Onboard() {
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
          <a href="/" className="button has-font-size-medium">
            Join us
          </a>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer has-font-size-small">
      <div className="container">
        <div className="columns">
          <div className="left">
            <div className="go-to has-text-blue has-font-size-medium">
              Go to
            </div>
            <div className="go-to-content">
              <div className="item1">Subvisual</div>
              <div className="item2">Blog</div>
            </div>
          </div>

          <div className="right">
            <div className="we-social has-text-blue has-font-size-medium">
              We're social
            </div>
            <div className="we-social-content">
              <div className="item">Md</div>
              <div className="item">Be</div>
              <div className="item">Git</div>
              <div className="item">Dri</div>
              <div className="item">In</div>
              <div className="item">Fb</div>
              <div className="item">Tw</div>
              <div className="item">Ins</div>
            </div>
          </div>

          <div className="left">
            <div className="contact-us has-text-blue has-font-size-medium">
              Contact us
            </div>
            <div className="contact-us content">contact@subvisual.co</div>
          </div>

          <div className="right">
            <div className="offices has-text-blue has-font-size-medium">
              Offices
            </div>
            <div className="offices-content">
              Remote.Work anywhere in Europe.
              <br />
              Or join our mothership,landed in Braga, Portugal.
            </div>
            {/* <div className="image">
              <img src={ImageFooter} alt="" />
            </div> */}
          </div>
        </div>

        <div className="left">
          <div className="image">
            <img
              src={ImageFooter}
              alt="Os logotipos Norte 2020, Portugal 2020 e União Europeia"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

function filterContentType(data, contentType) {
  return data.allMarkdownRemark.edges.filter(
    (i) => i.node.frontmatter.contentType === contentType
  );
}

function toFaq({ node }) {
  return {
    id: node.id,
    title: node.frontmatter.title,
    text: node.html,
  };
}

function toProject({ node }) {
  return {
    id: node.id,
    title: node.frontmatter.title,
    description: node.html,
    image: node.frontmatter.image,
  };
}

function toTestimonial({ node }) {
  return {
    id: node.id,
    author: node.frontmatter.title,
    info: node.frontmatter.info,
    quote: node.html,
  };
}

function Home(props) {
  const faqs = props.data.faqs.edges.map(toFaq);
  const projects = props.data.projects.edges.map(toProject);
  const testimonials = props.data.testimonials.edges.map(toTestimonial);

  return (
    <Fragment>
      <div className="fold has-background-blue-light">
        <div className="background">
          <ThreeDee />
        </div>
        <Nav />
        <JoinUs />
      </div>
      <AreYouUp />
      <DontJustTake testimonials={testimonials} />
      <Showcase projects={projects} />
      <HowItWorks />
      <SomeQuestions faqs={faqs} />
      <TalkToUs />
      <div className="fold has-background-blue Position-background">
        <div className="backgroundImage"></div>
        <Onboard />
      </div>
      <Footer />
    </Fragment>
  );
}

export default Home;

export const pageQuery = graphql`
  query IndexQuery {
    faqs: allMarkdownRemark(
      filter: { frontmatter: { contentType: { eq: "faq" } } }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
          }
        }
      }
    }
    projects: allMarkdownRemark(
      filter: { frontmatter: { contentType: { eq: "project" } } }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            image
          }
        }
      }
    }
    testimonials: allMarkdownRemark(
      filter: { frontmatter: { contentType: { eq: "testimonial" } } }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            info
          }
        }
      }
    }
  }
`;
