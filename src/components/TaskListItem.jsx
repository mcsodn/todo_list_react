import { useRef } from "react";
import { useSwipeable } from "react-swipeable";

function TaskListItem(props) {
  const targetRef = useRef(null);
  const handlers = useSwipeable({
    onSwipedLeft: () => targetRef.current.classList.toggle("visible"),
    onSwipedRight: () => targetRef.current.classList.toggle("visible"),
  });
  return (
    <div
      className=" mx-4 px-2 py-4 flex justify-between border-b border-main-gray/20 group items-center gap-4"
      {...handlers}
    >
      <input
        type="checkbox"
        id={props.taskId}
        className="cursor-pointer accent-bg-green w-5 h-5 "
        checked={props.isDone ? true : false}
        onChange={() => {
          props.checkTask(props.taskId);
        }}
      />
      <label
        htmlFor={props.taskId}
        className={
          "cursor-pointer grow " + (props.isDone ? "line-through" : null)
        }
      >
        {props.taskText}
      </label>
      <button
        ref={targetRef}
        className="invisible group-hover:visible text-xs cursor-pointer"
        onClick={() => {
          props.deleteTask(props.taskId);
        }}
      >
        Удалить
      </button>
    </div>
  );
}

export default TaskListItem;
