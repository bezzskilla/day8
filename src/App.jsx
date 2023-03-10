import './App.css';
import { MemoHeader } from './components/Header/Header';
import { Main } from './components/Main';

import { MemoFooter } from './components/Footer/index'
import { useTodos } from './hooks/useTodos'
import {CatsExample} from './components/CatsExample/index'
// import { expenciveFunc } from './utils/expencive'

// когда ререндерится компонент
// 1 когда изменяет внутренее состояние
// 2 когда изменяется props
// 3 когда ререндерится родительский компонент
function App() {
  const { todos, addToList, updTodoStatus, deleteList, deleteOneTodo } = useTodos()

  // const expenciveValue = useMemo(() => {
  //   return expenciveFunc(todos.length)
  // }, [todos.length])


  return (
    <div className="container py-5">
      <MemoHeader addToList={addToList} />
      <Main
        todos={todos}
        deleteList={deleteList}
        deleteOneTodo={deleteOneTodo}
        updTodoStatus={updTodoStatus}
      />
      {/* {expenciveValue} */}

      <CatsExample />

      <MemoFooter />
    </div>
  );
}

export default App;
