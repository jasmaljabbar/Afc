import React from "react";
import "./Program.css";
import Fitness_Illustration from "../../assets/Girl_Fitness_Illustration.png";
const Program = () => {
  return (
    <>
      <div className="company" id='program'>
        <div className="img">
          <img src={Fitness_Illustration} alt="" />
        </div>
        <div className="company-info">
          <span>
            15-Day <span className="our">Fitness Challenge</span>
          </span>
          <p>
            Join our transformative <b>15-Day</b> Fitness Challenge designed
            specifically <b>for women</b>. This program combines personalized
            fitness and nutrition plans to help you achieve your health goals in
            just two weeks
          </p>
        </div>
      </div>
      
    </>
  );
};

export default Program;
