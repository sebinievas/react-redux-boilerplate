import { combineReducers } from 'redux';
import app from './app.reducer';
import projects from './projects.reducer';


const rootReducer = combineReducers({
  app,
  projects
});

export default rootReducer;
