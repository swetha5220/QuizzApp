import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  nextQuestion,
  addScore,
  resetGame,
  falseAnswer,
  resetScore,
} from "../redux/questions";
import axios from "axios";
import "./Quiz.css";

const Quiz = () => {
  const question = useRef();
  let questions = useSelector((state) => state.questions.questionsAll);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [answer, setAnswer] = useState("");
  const [input, setInput] = useState("");
  let index = useSelector((state) => state.questions.currentIndex);
  const [score, setScore] = useState(10);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(5);
  let timer;

  useEffect(() => {
    axios
      .get("/api/questions")
      .then((res) => {
        questions = res.data;
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    timer = setInterval(() => {
      if (minutes === 0 && seconds === 0) {
        return;
      }
      setSeconds((seconds) => seconds - 1);
      if (seconds === 0) {
        setMinutes((minutes) => minutes - 1);
        setSeconds(59);
      }
    }, 1000);

    return () => clearInterval(timer);
  });

  useEffect(() => {
    setAnswer(questions[index].answer);
  });
  useEffect(() => {
    dispatch(resetGame());
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    if (input === answer) {
      setScore((score) => (score += 10));
      dispatch(addScore());
      dispatch(nextQuestion());
      console.log(score);
      if (index + 1 === questions.length) {
        dispatch(resetGame());
        navigate("/addRecord");
      }
    } else {
      dispatch(falseAnswer());
      dispatch(nextQuestion());
      console.log(score);
      if (index + 1 === questions.length) {
        dispatch(resetGame());
        navigate("/addRecord");}
    }
  };

  const selectHandler = (e) => {
    console.log(e);
  };

  const QuizModule = () => {
    return (
      <div className='quizContainer'>
        <section className='hero quizHero is-medium is-info container '>
          {/* <p className='title timer is-size-1 is-flex is-justify-content-flex-end'>
            {minutes}:{seconds < 10 ? "0" + seconds : seconds}
          </p><br></br><br></br> */}
          <div className='hero-body'>
          <br></br><br></br>
          <p className='title timer is-size-1 is-flex is-justify-content-flex-end'>
            {minutes}:{seconds < 10 ? "0" + seconds : seconds}
          </p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZTDawgJAhTM7DUucmRVBVxSpCV0gHxWTRaDfTVfmoiB5U-X0BERvazmQD7f9j6x6vexE&usqp=CAU" class="center1" ></img>  
            <p className='is-size-3 title'>{questions[index].questionText}</p>
            {/* <img src="https://miro.medium.com/max/1200/1*KpDOKMFAgDWaGTQHL0r70g.png"></img>  */}
            <div className='control' onChange={(e) => handleChange(e)}>
              {questions[index].options.map((option, index) => {
                if (input === option) {
                  return (
                    <label className='is-size-4 radio' key={index}>
                      <input
                        type='radio'
                        name='answers'
                        value={option}
                        checked
                        onChange={selectHandler}
                      />
                      {"    "}
                      {option.at(0).toUpperCase() + option.slice(1)}
                    </label>
                  );
                } else {
                  return (
                    <label className='is-size-4 radio' key={index}>
                      <input type='radio' name='answers' value={option} />
                      {"    "}
                      {option.at(0).toUpperCase() + option.slice(1)}
                    </label>
                  );
                }
              })}
            </div>
            <div className=' nextButton'>
              <div className='button' onClick={() => handleSubmit()}>
                Next Question
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };

  const handleButton = () => {
    dispatch(resetGame());
    dispatch(resetScore());
  };

  if (seconds === 0 && minutes === 0) {
    return (
      <div className='quizTimerContainer'>
        <div className='quizTimerInnerContainer'>
          <img src="https://www.freepnglogos.com/uploads/warning-sign-png/warning-sign-arning-sign-colored-stroke-icon-34.png" class="center"></img>
          <p className='title pb-4 is-size-2'>Timer Expired</p>
          <p className='is-size-5 pb-5'>
            We regret to inform you that the time for the test has been expired
            and you failed to clear it. <br />
            Upon Clicking the button you will be redirected to either the quiz
            module or to the Home Page.
          </p>
          <div className='columns'>
            <div className='column is-flex is-justify-content-center'>
              <button
                className='button is-link'
                onClick={() => {
                  handleButton();
                  window.location.reload();
                }}
              >
                Retake the Quiz
              </button>
            </div>
            <div className='column is-flex is-justify-content-center'>
              <button
                className='button is-link'
                onClick={() => {
                  handleButton();
                  navigate("/");
                }}
              >
                Return Home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <QuizModule />;
  }
};

export default Quiz;
