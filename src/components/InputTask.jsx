function InputTask() {
  return (
    <div
      className="w-full border-t-2 border-sec-gray flex justify-between items-center p-4 gap-4
"
    >
      <input
        type={"text"}
        className="border w-full border-main-gray/50 p-2 rounded-sm font-normal"
        placeholder="Опишите задачу"
      />
      <button className="text-main-gray font-normal">Добавить</button>
    </div>
  );
}

export default InputTask;
