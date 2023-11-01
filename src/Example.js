import { useState } from 'react';
import * as S from './Boardstyle'
import PlusBtn from './components/Button'
import Users from './components/Users';



export default function App() {
  const [name,setName] = useState("")
  const [age,setAge] = useState("")

  const [users, setUsers] = useState([
    { id: 1, age : 30, name: "송중기"},
    { id: 2, age : 24, name: "송강"},
    { id: 3, age : 21, name: "김유정"},
    { id: 4, age : 29, name: "구교환"},
  ])

  const onClickBtn = (event) => {
    const newPerson = {
      id : users.length + 1,
      age,
      name,
    }
    const newArr = [...users, newPerson]

    setUsers(newArr)

    setName("")
    setAge("")
  }

  const onChangeName = (event) => {
    setName(event.target.value)
  }

  const onChangeAge = (event) => {
    setAge(event.target.value)
  }


  return (

    <div>
      이름 : <input value={name} type='text' onChange={onChangeName} />
      나이 : <input value={age} type='text' onChange={onChangeAge}/>
      <>
      <PlusBtn onClickBtn={onClickBtn}>추가</PlusBtn>
    <S.BigBox>
      <Users
      users = {users}
      setUsers = {setUsers}
      />
    </S.BigBox>
    </>
    </div>
  

  );
  

}

