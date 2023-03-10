import { TodoItem } from '../TodoItem'

export const TodoList = ({ todos, deleteOneTodo, updTodoStatus }) => {
  return (
    <ul className="list-group">
      {todos.map((todo, index) => {
        return <TodoItem
          key={todo.id}
          todo={todo}
          index={index}
          deleteOneTodo={deleteOneTodo}
          updTodoStatus={updTodoStatus}
        />
      })}
    </ul>

  )
}
