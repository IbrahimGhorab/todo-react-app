import { useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
const TaskInput = ({ updateTasks }) => {
  const [input, setInput] = useState("");
  return (
    <InputGroup className=" my-3 container ">
      <Form.Control
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder="Add To Do"
        aria-label=""
        aria-describedby="basic-addon2"
      />
      <Button
        onClick={() => {
          updateTasks(input);
          setInput("");
        }}
        variant="primary"
        id="button-addon2"
      >
        Add
      </Button>
    </InputGroup>
  );
};

export default TaskInput;
