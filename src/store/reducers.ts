// reducers.js
import { combineReducers } from 'redux';
import userReducer from './features/user/userSlice';
import taskReducer from './features/task/taskSlice';

// Combine reducers into a root reducer
const rootReducer = combineReducers({
  user: userReducer,
  tasks: taskReducer
});

export default rootReducer;
