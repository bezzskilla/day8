import './App.css';
import { MemoHeader } from './components/Header/Header';
import { Main } from './components/Main';
import { useEffect, useState, useCallback, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { LS_TOKEN } from './utils/constants';
import { MemoFooter } from './components/Footer/index'
import { expenciveFunc } from './utils/expencive'

// когда ререндерится компонент
// 1 когда изменяет внутренее состояние
// 2 когда изменяется props
// 3 когда ререндерится родительский компонент
function App() {
  const [todos, setTodos] = useState(() => {
    const todoList = localStorage.getItem(LS_TOKEN)

    return todoList ? JSON.parse(todoList) : []
  })

  useEffect(() => {
    localStorage.setItem(LS_TOKEN, JSON.stringify(todos))
  }, [todos])

  const addToList = useCallback((value) => {
    const newTodo = {
      id: uuidv4(),
      title: value,
      status: false
    }

    setTodos((prev) => [newTodo, ...prev])
  }, [])

  const expenciveValue = useMemo(() => {
    return expenciveFunc(todos.length)
  }, [todos.length])

  const deleteList = () => {
    setTodos([])
  }

  const deleteOneTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const updTodoStatus = (id) => {
    setTodos((prev) => prev.map(todo => {
      if (id === todo.id) return {
        ...todo,
        status: !todo.status
      }

      return todo;
    }))
  }

  return (
    <div className="container py-5">
      <MemoHeader addToList={addToList} />

      <Main
        todos={todos}
        deleteList={deleteList}
        deleteOneTodo={deleteOneTodo}
        updTodoStatus={updTodoStatus}
      />

      <hr />
      {expenciveValue}
      <hr />

      <MemoFooter />
    </div>
  );
}

export default App;
