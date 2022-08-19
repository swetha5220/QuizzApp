import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetScore } from "../redux/questions";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./addRecord.css";

const AddRecord = () => {
  const score = useSelector((state) => state.questions.score);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    await axios.post("/api/scores", { name: name, score: score });
    dispatch(resetScore());
    navigate("/highScores");
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div class='modal is-active'>
      <div class='modal-background'></div>
      <div class='modal-content'>
        <div className="addRecContain">
          
        </div>
      </div>
      <button class='modal-close is-large' aria-label='close'></button>
    </div>
  );
};

export default AddRecord;
