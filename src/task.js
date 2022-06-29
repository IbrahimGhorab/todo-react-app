import { Button, Alert } from "react-bootstrap";
const Task = ({ task, checkDone, removeTask }) => {
  return (
    <>
      <Alert
        className={`d-flex justify-content-between container ${
          task.complete ? "line-through" : ""
        }`}
        key={task.id}
        variant="success"
      >
        <div>{task.text}</div>
        <div>
          <Button
            className="mx-1"
            onClick={() => checkDone(task.id)}
            variant="warning"
          >
            {task.complete ? "uncheck" : "check"}
          </Button>
          <Button onClick={() => removeTask(task.id)} variant="danger">
            remove
          </Button>
        </div>
      </Alert>
    </>
  );
};

export default Task;
