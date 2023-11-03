import { useDispatch, useSelector } from "react-redux";
import { changeTitle } from "../redux/modules/title";
import { changeContents } from "../redux/modules/contents";
import { addTodo, deleteTodo } from "../redux/modules/todoArr";
import { addDone, deleteDone } from "../redux/modules/doneArr";
import { BigWrapperBox, ButtonStyle, DoneWrapperBox, InputStyle, ListWrapper, WorkingWrapperBox, WrapperInput } from "../components/style";
import TodoAndDoneBtn from "../components/Button";
import { plusId } from "../redux/modules/counter";



export default function Home() {
  const Reduxtitle = useSelector((state) => state.titleReducer)
  const toDoArr = useSelector((state) => state.toDoArr.toDoArr);
  const doneArr = useSelector((state) => state.doneArr.doneArr)
  const ReduxCounter = useSelector((state) => state.plusIdReducer)
  console.log(ReduxCounter)
  const ReduxContents = useSelector((state) => {
    return state.contentsReducer
  } )


  const dispatch = useDispatch()

  const onChangeTitle = (event) => {
    dispatch(changeTitle(event.target.value))
  }

  const onChangeContents = (event) => {
    dispatch(changeContents(event.target.value))
  }

 

  const onClickAddBtn = () => {
    dispatch(plusId())
    if(!Reduxtitle.title && !ReduxContents.contents) {
      return alert("제목과 타이틀을 입력하세요")
    }
    const newToDo = {
      id: ReduxCounter.counter,
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
      dispatch(deleteTodo(deleteButtonId)); 
    } else if (listType === "done") {
      dispatch(deleteDone(deleteButtonId))
    }
  };
 
  const onClickDone = (doneButtonId) => {
    const selectedTask = toDoArr.find((item) => item.id === doneButtonId);
    selectedTask.isDone = true; 
    console.log(selectedTask)
    dispatch(addDone(selectedTask));
    dispatch(deleteTodo(doneButtonId)); 
  };



  const onClickCancel = (cancelButtonId) => {
    const selectedTask = doneArr.find((item) => item.id === cancelButtonId);

    selectedTask.isDone = false;
    dispatch(addTodo(selectedTask)) 
    dispatch(deleteDone(cancelButtonId)) 
  
  };

  const onClickDetailedPage = () => {
    
    dispatch(changeTitle())
    dispatch(changeContents())
  }

  return (
    <div>
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
  </div>
  
  )
}
