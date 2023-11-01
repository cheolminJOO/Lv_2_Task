import {createStore} from 'redux'
import { combineReducers } from 'redux'
import  titleReducer  from '../modules/title';
import  contentsReducer  from '../modules/contents';
import  toDoArr  from '../modules/todoArr';
import  doneArr  from '../modules/doneArr';

const rootReducer = combineReducers({
  titleReducer,
  contentsReducer,
  toDoArr,
  doneArr
});
export const store = createStore(rootReducer);


