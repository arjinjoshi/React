import './App.css'
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div className='container'>
      <Header title="Task Tracker" description='A simple app to track my tasks...' />
      <TodoList/>
    </div>
  )
}

export default App;