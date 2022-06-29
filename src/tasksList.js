import Task from "./task";

const TasksList = ({ displayTasks, removeTask, checkDone }) => {
  return (
    <ul>
      {displayTasks().map((task) => (
        <Task
          key={task.id}
          task={task}
          checkDone={checkDone}
          removeTask={removeTask}
        />
      ))}
    </ul>
  );
};

export default TasksList;
