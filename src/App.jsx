import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import Header from "./components/Header";
import InputTask from "./components/InputTask";
import TaskList from "./components/TaskList";

const STORAGE_KEY = "tasks";

const initialTasks = [
  { id: 0, text: "Погладь кота", isDone: false },
  { id: 1, text: "Полей цветы", isDone: true },
  { id: 2, text: "Поменяй лампочку", isDone: false },
  { id: 3, text: "Купи продукты", isDone: true },
];

function App() {
  const [tasks, setTasks] = useLocalStorage(STORAGE_KEY, initialTasks);
  const [inputTaskText, setInputTaskText] = useState("");

  const checkLength = (e) => {
    setInputTaskText(
      e.target.value.length <= 60 ? e.target.value : e.target.value.slice(0, 60)
    );
  };

  const addTask = (text) => {
    if (inputTaskText.length > 0) {
      // Создаём новую задачу
      const newTask = {
        id: tasks.length > 0 ? Math.max(...tasks.map((t) => t.id)) + 1 : 0,
        text: text,
        isDone: false,
      };
      // Обновляем массив задач
      setTasks([...tasks, newTask]);
      setInputTaskText("");
    }
  };

  const checkTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <>
      <Header />
      <TaskList
        taskList={tasks}
        checkTask={checkTask}
        deleteTask={deleteTask}
      />
      <InputTask
        value={inputTaskText}
        onChangeText={(e) => checkLength(e)}
        onAddTask={() => {
          addTask(inputTaskText);
        }}
      />
    </>
  );
}

export default App;
