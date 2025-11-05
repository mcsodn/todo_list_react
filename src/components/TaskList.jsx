import TaskListItem from "./TaskListItem";

function TaskList() {
  return (
    <div className="grow mt-2 mb-2 w-full flex flex-col">
      <TaskListItem />
      <TaskListItem />
      <TaskListItem />
    </div>
  );
}

export default TaskList;
