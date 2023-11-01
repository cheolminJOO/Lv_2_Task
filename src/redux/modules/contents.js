//Action value
const CHANGE_CONTENTS = 'contents/CHANGE_CONTENTS'


//Action creator

export const changeContents = (newContents) => {
  return {
    type : CHANGE_CONTENTS,
    payload : newContents
  }
  
}



//초기값 설정
const initialState = {
  contents : "",
}


const contentsReducer = (state = initialState, action) =>{
  switch(action.type) {
    case CHANGE_CONTENTS :
      return {contents : action.payload}
    default :
    return state
  }
}

export default contentsReducer