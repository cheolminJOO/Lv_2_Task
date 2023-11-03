//Action value
const PLUS_ID = 'counter/CHANGE_CONTENTS'


//Action creator

export const plusId = () => {
  return {
    type : PLUS_ID,

  }
  
}



//초기값 설정
const initialState = {
  counter : 1,
}


const plusIdReducer = (state = initialState, action) =>{
  switch(action.type) {
    case PLUS_ID :
      return {counter : state.counter +1}
    default :
    return state
  }
}

export default plusIdReducer