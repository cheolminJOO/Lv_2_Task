//action value
const ADD_DONE = "doneArr/ADD_DONE"
const DELETE_DONE = "doneArr/DELETE_DONE"

//action creator

export const addDone = (selectedTask) => ({
  type : ADD_DONE,
  payload: selectedTask

})

export const deleteDone = (deleteButtonId) => ({
  type : DELETE_DONE,
  payload: deleteButtonId

})





const initialState = {
  doneArr : []
}

const doneArr = (state = initialState, action) => {
  switch(action.type){
    case ADD_DONE :
      return { doneArr : [...state.doneArr,action.payload ]}
    
    case DELETE_DONE :
      return { doneArr : state.doneArr.filter((done) => done.id !== action.payload)}
    default :
      return state;
  }
}

export default doneArr