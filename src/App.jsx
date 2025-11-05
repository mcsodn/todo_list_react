import { useReducer, useState } from "react";
import Header from "./components/Header";
import InputTask from "./components/InputTask";
import TaskList from "./components/TaskList";

const initialTasks = [
  { id: 0, text: "Погладь кота", isDone: false },
  { id: 1, text: "Полей цветы", isDone: true },
  { id: 2, text: "Поменяй лампочку", isDone: false },
  { id: 3, text: "Купи продукты", isDone: true },
];

let nextId = 4;

function taskReducer(tasks, action) {
  switch (action.type) {
    case "added":
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          isDone: false,
        },
      ];
    case "checked": {
      const checkedTask = tasks.filter((task) => task.id === action.id)[0];
      return [
        ...tasks.filter((task) => task.id !== action.id),
        { ...checkedTask, isDone: !checkedTask.isDone },
      ].sort((a, b) => a.id - b.id);
    }
    case "deleted":
      return tasks.filter((task) => task.id !== action.id);

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

function App() {
  const [inputTaskText, setInputTaskText] = useState("");
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  const checkLength = (e) => {
    setInputTaskText(
      e.target.value.length <= 60 ? e.target.value : e.target.value.slice(0, 60)
    );
  };

  const addTask = (text) => {
    if (inputTaskText.length > 0) {
      dispatch({
        type: "added",
        id: nextId++,
        text: text,
        isDone: false,
      });
      setInputTaskText("");
    }
  };

  const checkTask = (taskId) => {
    dispatch({
      type: "checked",
      id: taskId,
    });
  };

  const deleteTask = (taskId) => {
    dispatch({
      type: "deleted",
      id: taskId,
    });
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
