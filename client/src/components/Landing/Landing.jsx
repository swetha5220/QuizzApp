import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Landing.css";
import Logo from './icon.png';
const Landing = () => {
  return (
    <div>
      <Navbar />
      {/* <section className='hero is-large is-info'> */}
      <section className="background21">
        <div className='columns'>
          <div className='column'>
            <div className='hero-body'>
            <br></br> <br></br> <br></br> <br></br> <br></br> 
              <p className='titles'>Quizzy McQuizface</p>
              <p className='subtitle'><br></br>
              Unlocking knowledge at the speed of thought.We know Victoria's secret.We quiz therefore,Where a smart answer won't get you fired!Be ready. Be smart. Be noticed!
              </p>
              <br></br> <br></br> <br></br>
            </div>
          </div>
          <div className='column centerMain'>
            <img src={Logo} alt="" width="800" height="800" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
