import TaskListItem from "./TaskListItem";

function TaskList(props) {
  return props.taskList.length !== 0 ? (
    <div className="grow mt-2 mb-2 w-full flex flex-col overflow-y-auto scroll-smooth">
      {props.taskList.map((task) => {
        return (
          <TaskListItem
            key={task.id}
            taskId={task.id}
            taskText={task.text}
            isDone={task.isDone}
            checkTask={props.checkTask}
            deleteTask={props.deleteTask}
          />
        );
      })}
    </div>
  ) : (
    <div className="grow flex items-center text-main-gray/50 text-2xl">
      <span>
        Добавьте свою <br /> первую задачу
      </span>
    </div>
  );
}

export default TaskList;
