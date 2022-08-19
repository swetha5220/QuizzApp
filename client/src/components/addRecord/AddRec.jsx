import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetScore } from "../redux/questions";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./Addrec.css";

const AddRec = () => {
  const score = useSelector((state) => state.questions.score);
  const [clicked, setClicked] = useState(true);
  const [name, setName] = useState(null);
  const navigate = useNavigate();
  const inputOption = () => {
    if (clicked) {
      return (
        <div className='addRecContain'>
          <input
            class='input is-medium'
            type='text'
            placeholder='eg. SWETHA'
            onChange={handleChange}
          />
        </div>
      );
    } else {
      return <div className='addRecContain'></div>;
    }
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleJoin = async () => {
    if (clicked === false) {
      setClicked(true);
    } else {
      if (name === null) {
      } else {
        await axios
          .post("/api/scores", { name: name, score: score })
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
        navigate("/highScores");
      }
    }
  };

  return (
    <div className='mainContainer'>
      <div className='mainInContainer'>
        <div className='mainText'>
          <div className='mainTextHead'>Congragulations!!</div>
          <div className='mainTextSub'>You have completed the quiz</div>
        </div>
        <div className='score'>
          <div className='scoreText'>{score}</div>
        </div>
        <div className='join'>
          <div className='joinText'>Enter your name to check where you stand</div>
          {inputOption()}
          <div className='joinButton' onClick={handleJoin}>
            JOIN
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRec;
