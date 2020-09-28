import { combineReducers } from "redux";

import User from "././modules/User.js";
import Task from "././modules/Task.js";

export default combineReducers({
  User,
  Task,
});
