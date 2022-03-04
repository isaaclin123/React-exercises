import AboutMe from "./AboutMe";
import ToDoList from "./ToDoList";
import LightBulb from "./LightBulb";
import { useState } from "react";
import "./app.css";
import NewTodoItem from "./NewTodoItem";
function App() {
  const initialsTodos = [
    { description: "Finish lecture", isComplete: true },
    { description: "Do homework", isComplete: false },
    { description: "Sleep", isComplete: true },
  ];
  const [todos, setTodos] = useState(initialsTodos);
  return (
    <div>
      <AboutMe name="isaac" age="a secret!!" />
      <ToDoList
        items={todos}
        onTodoStatusChanged={(index, status) => {
          todos[index].isComplete = !status;
          setTodos((array)=>[...array],todos);
        }}
        onRemoveDescription={(index) => {
          todos.splice(index, 1);
          setTodos([...todos]);
        }}
      />
      <NewTodoItem
        onAddDescription={(content) => {
          setTodos(array=>[
            {
              description: content,
              isComplete: false,
            },
            ...array,
          ],todos);
        }}
      />
      <LightBulb />
    </div>
  );
}

export default App;
