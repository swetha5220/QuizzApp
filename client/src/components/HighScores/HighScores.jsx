import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import Navbar from "../Navbar/Navbar";
import "./HighScores.css";
const HighScores = () => {
  const [scores, setScores] = useState(null);
  const navigate = useNavigate();
  useEffect(async () => {
    await axios.get("/api/scores").then((res) => {
      setScores(res.data);
    });
  }, []);
  if (scores !== null) {
    return (
      
      <div>
        <Navbar />
        <br></br>
        <div className="heading"><img src="data:image/png;base64,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" alt="Image" class="center"></img>
        <p className='title'>Check where you stand</p></div>
        <br></br><br></br>
        <div className='container'>
          <section className='hero is-large'>
            {/* <div className='hero-body'> */}
            <div className='columns'>
            <div className='column'>
            <p className='subtitle'><font size="6">Players</font></p>
                    </div>
                    <div className='column'>
                      <p className='subtitle'><font size="6">Scores</font></p>
                    </div>
                    <div className="col">
                    <p className='subtitle'><strong><font size="6">%</font></strong></p>
                    </div>
                    </div>
              {scores.map((score, index) => {
                return (
                  <div className='columns' key={index}>
                    <div className='column'>
                      <p className='subtitle'>{score.name}</p>
                    </div>
                    <div className='column'>
                      <p className='subtitle'>{score.score}</p>
                    </div>
                    <div className='col'>
                      <p className='subtitle'>{(score.score)/50*100}%</p>
                    </div>
                  </div>
                );
              })}
              <div
                className='button is-info is-centered'
                onClick={() => navigate("/quiz")}
              >
                PlayGame
              </div>
              <br></br><br></br>
            {/* </div> */}
          </section>
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
};

export default HighScores;
