import { Route, Routes } from "react-router"
import Header from "./components/Header"
import TodoList from "./pages/TodoList"
import TodoForm from "./pages/TodoForm"
import TodoDetailLayout from "./pages/TodoDetailLayout"
import TodoDetailView from "./pages/TodoDetailView"
import TodoDetailEdit from "./pages/TodoDetailEdit"


const App = () => {
  return (
    <div>
      <Header text = "Todo App" />

      <Routes>
        <Route index element={<TodoList/>}/>
        <Route path="/todoform" element =  {
          <div>
            <TodoForm/>
            <TodoList/>
          </div>
        } />

      <Route path="/todolist" element= {<TodoList/>}/>

        // Dynamic Routing
      <Route path="/todolist/:id" element = {<TodoDetailLayout/>}>
        <Route index element = {<TodoDetailView/>}/>
        <Route path="edit" element = {< TodoDetailEdit />} />
      </Route>


      </Routes>


    </div>
  )
}

export default App