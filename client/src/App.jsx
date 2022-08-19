import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import About from "./components/About/About";
import HighScores from "./components/HighScores/HighScores";
import NotFound from "./components/NotFound/NotFound";
import Quiz from "./components/Quiz/Quiz";
import AddRecord from "./components/addRecord/AddRecord";
import AddRec from "./components/addRecord/AddRec";
import { Provider } from "react-redux";
import store from "./components/redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/highScores' exact element={<HighScores />} />
          <Route path='/quiz' exact element={<Quiz />} />
          <Route path='/addRecord' exact element={<AddRec />} />
          <Route path='/add' exact element={<AddRec />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
