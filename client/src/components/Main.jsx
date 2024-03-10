import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserId } from "../redux/result_reducer";

import "../styles/App.css"
import "../styles/Main.css";
const Main = () => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const startQuiz = () => {
    if (inputRef.current?.value) {
      dispatch(setUserId(inputRef.current?.value));
    }
  };

  return (
    <div className="container">
      <h1 className="title text-light" style={{color:"black"}}>Quiz App</h1>

      <div className="introduction">
        <br/><br/>Welcome to the Web Dev Quiz!<br/> 5 questions, 3 choices each. Pick one for
        10 points each.<br/> Review and change answers before the end.<br/> Results
        revealed at completion. Good luck!
      </div>

      <form id="form">
        <input
          ref={inputRef}
          type="text"
          className="userid"
          placeholder="Enter your Username*"
        />
      </form>

      <div className="start">
        <Link className="btn" to={"quiz"} onClick={startQuiz}>
          Take the Quiz!
        </Link>
      </div>
    </div>
  );
};

export default Main;
