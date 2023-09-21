import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Footer from './components/Footer'


function App() {

  const [todo, setTodo] = useState('')


  return (
    <section className="todoapp">
      <TodoForm todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
      <Footer todo={todo} setTodo={setTodo} />
    </section>
  );
}


export default App;

