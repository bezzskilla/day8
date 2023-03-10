import { useEffect, useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { LS_TOKEN } from "../utils/constants"

export const useTodos = () => {
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

  return {
    todos,
    addToList,
    deleteList,
    deleteOneTodo,
    updTodoStatus
  }
}
