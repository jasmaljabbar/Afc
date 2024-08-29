import React from "react";
import "./About.css";
import thee from "../../assets/about-us-side.jpg";

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-background"></div>
      <div className="about gap-3" id="about">
        <div className="about-left">
          <img src={thee} alt="" className="thee" />
        </div>
        <div className="about-right">
          <h3>ABOUT PROGRAM</h3>
          <h2>Discover Your Strongest Self: The AFC Experience</h2>
          <p>
            At AFC, we're dedicated to empowering women through a transformative
            15-day fitness challenge. Registered with the GST Government of
            Kerala, our program offers personalized fitness and nutrition plans
            designed by Ashmida, a professional nurse with extensive nutrition
            training. With over 5,000 successful transformations, we provide
            expert guidance via WhatsApp and support every step of the way.
          </p>
          <p>
            New batches start every 15 days. Join us via Instagram or explore
            our YouTube channel for motivation and tips. Transform your health
            and confidence with AFC!
          </p>
          <h3>WHY I STARTED THIS PROGRAM</h3>
          <p>
            I began AFC out of a personal journey and a passion for helping
            others. After struggling with being overweight, I delved into
            extensive research on diets and nutrition, leading to remarkable
            results for myself. During the COVID-19 pandemic, I launched a
            YouTube channel to share my insights on healthy eating and weight
            loss. The positive feedback and numerous questions from viewers
            motivated me to create a structured fitness program.
          </p>
          <p>
            Seeing the growing interest and success, I expanded the program and
            brought certified professional nutritionists on board to provide
            expert guidance. Today, AFC is dedicated to empowering women with
            the same transformative strategies that worked for me.
          </p>
          <h3>WHAT I AM</h3>
          <ul>
            <li>Certified Nutritionist</li>
            <li>Certified Fitness Trainer</li>
            <li>Registered Nurse</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
