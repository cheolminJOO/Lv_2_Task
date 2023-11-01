import {BrowserRouter , Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import Todo from '../pages/Todo'
import Done from '../pages/Done'

export const Router = () => {
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="todo/:id" element={<Todo/>}/>
        <Route path="done/:id" element={<Done/>}/> 
      </Routes> 
    </BrowserRouter>
  )
}