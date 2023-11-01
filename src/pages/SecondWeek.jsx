import { useDispatch, useSelector } from "react-redux";
import { changeTitle } from "../redux/modules/title";
import { changeContents } from "../redux/modules/contents";
import { addTodo, deleteTodo } from "../redux/modules/todoArr";
import { addDone, deleteDone } from "../redux/modules/doneArr";
import { BigWrapperBox, ButtonStyle, DoneWrapperBox, InputStyle, ListWrapper, WorkingWrapperBox, WrapperInput } from "../components/style";
import TodoAndDoneBtn from "../components/Button";



export default function Home() {
  const Reduxtitle = useSelector((state) => state.titleReducer)
  const toDoArr = useSelector((state) => state.toDoArr.toDoArr);
  // const toDoArr12 = useSelector((state) => state.toDoArr);
  const doneArr = useSelector((state) => state.doneArr.doneArr)

  const ReduxContents = useSelector((state) => {
    return state.contentsReducer
  } )

  console.log("Reduxtitle",Reduxtitle)

  console.log("toDoArr",toDoArr)
  //  []
  // console.log("toDoArr12",toDoArr12)
  // {toDoArr :[] }
  //그래서 한번 더 뒤에 toDoArr을 써주는 것


  // const ReduxtoDos = useSelector((state) => state.items)
  //state는 중앙저장소를 의미, rootReducer에 있는 모든 reducer들이 담겨있다.
 // Reduxtitle에 state.titleReducer를 할당했으니 {title: 값} 이 있을 것이고
 // Reduxtitle.title로 접근해서 그 값을 사용할 수 있다.

  const dispatch = useDispatch()
  //dispatch는 onClick이나 onChange 같은 액션을 전달하는 역할이구나.
  const onChangeTitle = (event) => {
    dispatch(changeTitle(event.target.value))
  }

  const onChangeContents = (event) => {
    dispatch(changeContents(event.target.value))
  }

 

  const onClickAddBtn = () => {
    if(!Reduxtitle.title && !ReduxContents.contents) {
      return alert("제목과 타이틀을 입력하세요")
    }
    const newToDo = {
      id: toDoArr.length + 1,
      title : Reduxtitle.title,
      contents : ReduxContents.contents,
      isDone: false,
    };
    dispatch(addTodo(newToDo));
    Reduxtitle.title = ""
    ReduxContents.contents = ""
  
  };


  const onClickDeleteBtn = (deleteButtonId, listType) => {
    if (listType === "todo") {
      dispatch(deleteTodo(deleteButtonId)); //Working list 삭제
    } else if (listType === "done") {
      dispatch(deleteDone(deleteButtonId))//Done 삭제 
    }
  };
  //클릭하면 dispatch가 날라간다.
  const onClickDone = (doneButtonId) => {
    const selectedTask = toDoArr.find((item) => item.id === doneButtonId);
    selectedTask.isDone = true; 
    console.log(selectedTask)
    dispatch(addDone(selectedTask));//done 추가
    dispatch(deleteTodo(doneButtonId)); //working List 삭제
  };



  const onClickCancel = (cancelButtonId) => {
    const selectedTask = doneArr.find((item) => item.id === cancelButtonId);
    //배열은 삭제되고, 프로퍼티 그 자체로 할당된다.
    selectedTask.isDone = false;
    dispatch(addTodo(selectedTask)) //Working List 추가
    dispatch(deleteDone(cancelButtonId)) 
    //Done 삭제
  };

  const onClickDetailedPage = () => {
    
    dispatch(changeTitle())
    dispatch(changeContents())
  }

  return (
    <div style={BigWrapperBox}>
    <div style={WrapperInput}>
      <h1>Let's make the new To Do List</h1>
      <input placeholder='제목을 입력하세요' 
        style={InputStyle} 
        value={Reduxtitle.title} 
        onChange={onChangeTitle} 
        type='text' />
      <input placeholder='할일을 입력하세요' 
        style={InputStyle} 
        value={ReduxContents.contents} 
        onChange={onChangeContents} 
        type='text' />
      <button style={ButtonStyle} onClick={onClickAddBtn}> 
      등록하기 
      </button>
    </div>
    <div style={ListWrapper}>
      <div style={WorkingWrapperBox}>
        <h2>Working List</h2>
        {toDoArr.map((item) => (
          <TodoAndDoneBtn
            key={item.id}
            item={item}
            onClickDeleteBtn={onClickDeleteBtn}
            onClickDone={onClickDone}
            onClickDetailedPage={onClickDetailedPage}

          />
        ))}
      </div>
      <div style={DoneWrapperBox}>
        <h2>Done</h2>
        {doneArr.map((item) => (
          <TodoAndDoneBtn
            key={item.id}
            item={item}
            onClickDeleteBtn={onClickDeleteBtn}
            onClickCancel={onClickCancel}
            onClickDetailedPage={onClickDetailedPage}

          />
        ))}
      </div>
    </div>
  </div>
  
  )
}
