import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./icon.png";

const Navbar = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/highScores");
  };

  const addIsActive = () => {
    const burger = document.getElementById("navbar-links");
    burger.classList.toggle("is-active");
    const burgerButton = document.getElementById("burger");
    burgerButton.classList.toggle("is-active");
  };

  const handleStart = () => {
    navigate("/quiz");
  };
  return (
    <nav className='navbar is-info'>
      <div className='navbar-brand'>
        <br></br><br></br><br></br><br></br><br></br>
        <div className='navbar-item' onClick={() => navigate("/")}>
          {/* <img src="icon.png" alt='logo'width={40} /> */}
          <img src={logo} alt="" width="65" height="65" />
        </div>
        <div
          role='button'
          className='navbar-burger'
          id='burger'
          aria-label='menu'
          aria-expanded='false'
          onClick={addIsActive}
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </div>
      </div>
      <div className='navbar-menu' id='navbar-links'>
        <div className='navbar-start'>
          <div className='navbar-item'>
            <div className='button is-info' onClick={handleClick}>
              <font size="+3"><strong>View Scores!!</strong></font>
            </div>
          </div>
        </div>
        <div className='navbar-end'>
          <div className='navbar-item'>
            <button className='button is-info' onClick={handleStart}>
            <font size="+3"><strong>Start Quizz!</strong></font>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
