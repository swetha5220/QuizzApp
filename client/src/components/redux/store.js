import { configureStore } from "@reduxjs/toolkit";
import QuestionsReducer from "./questions";
export default configureStore({
  reducer: {
    questions: QuestionsReducer,
  },
});
