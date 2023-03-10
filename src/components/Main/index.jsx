import { TodoList } from '../TodoList/index'
import { DeleteAllButton } from '../DeleteAllButton/index'

export const Main = ({ todos, deleteList, deleteOneTodo, updTodoStatus }) => {
  if (!todos.length) {
    return <p>TODO лист пока пуст...</p>
  }

  return (
    <main className="py-5">
      <TodoList
        todos={todos}
        deleteOneTodo={deleteOneTodo}
        updTodoStatus={updTodoStatus}
      />

      <DeleteAllButton deleteList={deleteList} />
    </main>
  )
}
