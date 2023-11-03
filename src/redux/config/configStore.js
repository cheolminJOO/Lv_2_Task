import {createStore} from 'redux'
import { combineReducers } from 'redux'
import  titleReducer  from '../modules/title';
import  contentsReducer  from '../modules/contents';
import  toDoArr  from '../modules/todoArr';
import  doneArr  from '../modules/doneArr';
import plusIdReducer from '../modules/counter';

// 기존 방식. (api 두개 썼음.)
const rootReducer = combineReducers({
  titleReducer,
  contentsReducer,
  toDoArr,
  doneArr,
  plusIdReducer,
});
export const store = createStore(rootReducer);

//toolkit 방식 (api 하나 썼음.)
//이렇게 하나의 api로 store를 생성.
// const store = configureStore({
//   reducer: {
//     titleReducer,
//     contentsReducer,
//     toDoArr,
//     doneArr
//   }

// });

export default store;

