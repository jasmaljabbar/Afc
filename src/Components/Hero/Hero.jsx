import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark_arrow.jpeg";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="hero l-container" id="hero">
      <div className="hero-text">
        <h1>Fit with Ashmi in Just 15 Days </h1>
        <p>
          Welcome to the Ashmi Fitness Challenge, a transformative 15-day
          fitness challenge for women. With over 5,000 successful
          transformations and a team of dedicated nutritionists and fitness
          experts, we’re here to help you achieve your health and fitness goals.
          Join us today to start your journey toward a fitter, more confident
          you!
        </p>
        <span >
          <p className="contacts">
            Join now only WhatsApp: +91 9526622809, +971 521845251
          </p>
        </span>
        <Link className="btn" to="details" smooth={true} offset={-150} duration={500}>
          {" "}
          Explore more <img src={dark_arrow} alt="dark_arrow" width={"5%"} />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
