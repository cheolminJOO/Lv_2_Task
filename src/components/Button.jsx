import { Link } from "react-router-dom";
import { ButtonDesign, DoneBox, WorkBox } from "./style";


export default function TodoAndDoneBtn ({onClickDeleteBtn,onClickDone,onClickCancel,item,onClickDetailedPage}){
  console.log(item.isDone)
  return(
    <div>
      {!item.isDone && (
        <div style={WorkBox} key={item.id}>
            <Link onClick={onClickDetailedPage} to={`/todo/${item.id}`}>상세보기</Link>
            <p>{item.title}</p>
            <p>{item.contents}</p>

            {/* <Todo item ={item}/> */}

            <button style={ButtonDesign} onClick={() => onClickDeleteBtn(item.id, "todo")}>
            삭제하기
            </button>
            <button style={ButtonDesign} onClick={() => onClickDone(item.id)}>
              완료하기
            </button>         
        </div>
      )}
      {item.isDone && (
        <div style={DoneBox} key={item.id}>
          {/* <Done item ={item}/> */}
           <Link onClick={onClickDetailedPage} to={`/done/${item.id}`}>상세보기</Link>
          <p>{item.title}</p>
          <p>{item.contents}</p>

          <button style={ButtonDesign} onClick={() => onClickDeleteBtn(item.id, "done")}>
          삭제하기
          </button>
          <button style={ButtonDesign} onClick={() => onClickCancel(item.id)}>
          취소
          </button>
        </div>
      
        )}
    </div>
  )
}




