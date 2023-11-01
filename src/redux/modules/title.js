//Action value
const CHANGE_TITLE = 'title/CHANGE_TITLE';
const BLANK_TITLE = 'title/BLANK_TITLE';

//Action creator

export const changeTitle = (newTitle) => {
  return {
    type: CHANGE_TITLE, 
    payload: newTitle
  }
}

export const blankTitle = (newTitle) => {
  return {
    type: BLANK_TITLE, 
    payload: newTitle
  }
}




//초기값 설정
const initialState = {
  title : "",
}


const titleReducer = (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_TITLE :
      return {title: action.payload}
    
    default:
      return state;
  }

}

export default titleReducer
