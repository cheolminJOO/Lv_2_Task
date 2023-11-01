
//action 타입
const ADD_TODO = 'todoArr/ADD_TODO';
const DELETE_TODO = 'todoArr/DELETE_TODO';
const UPDATE_TODO = 'todoArr/UPDATE_TODO';

// Action 생성자
export const addTodo = (newTodo) => ({
  type: ADD_TODO,
  payload: newTodo,
});

export const deleteTodo = (doneButtonid) => ({
  type: DELETE_TODO,
  payload: doneButtonid,
});

export const updateTodo = (updatedTodo) => ({
  type: UPDATE_TODO,
  payload: updatedTodo,
});



//초기값 설정
const initialState = {
  toDoArr : []
}



const toDoArr = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return { toDoArr: [...state.toDoArr, action.payload] };
 
    case DELETE_TODO:
      return {...state, toDoArr: state.toDoArr.filter((todo) => todo.id !== action.payload) };
    case UPDATE_TODO:
      return {
      todos: state.todos.map((todo) => (todo.id === action.payload.id ? action.payload : todo)),
    };
    default:
      return state;
  }
}

export default toDoArr