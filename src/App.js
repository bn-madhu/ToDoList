import './assets/styles/main.css'
import './assets/styles/root.css'
import { TodoWrapper } from './components/todo-wrapper';

const App = () => {
  return (
    <div className="App">
      {/* <h1>My Todo lists</h1> */}
      <TodoWrapper />
    </div>
  );
}

export default App;
