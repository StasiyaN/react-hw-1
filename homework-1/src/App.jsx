
import './App.css'

function App() {
  const tasks = ['Помыть посуду', 'Сделать домашнее задание', 'Прочитать книгу']

  return (
      <div>
        <h1>Список дел</h1>
        <ul>
          {tasks.map((task) => (
              <li key={task}>{task}</li>
          ))}
        </ul>
      </div>
  )
}


export default App
