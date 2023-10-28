import axios from "axios";
import React from "react";

function TodoItem(props) {
  const deleteTodoHandler = (title) => {
    axios
      .delete(`http://localhost:8000/api/todo/${title}`)
      .then((res) => console.log(res.data));
  };

  const updateTodoHandler = (title) => {
    axios
      .put(`http://localhost:8000/api/todo/${title}/complete`)
      .then((res) => console.log(res.data));
  };

  return (
    <div>
      <div>
        {props.todo.completed ? (
          <div>
            <div style={{ textDecoration: "line-through" }}>
              <span style={{ fontWeight: "bold, underline" }}>
                {props.todo.title} :{" "}
              </span>{" "}
              {props.todo.description}
              <button
                onClick={() => deleteTodoHandler(props.todo.title)}
                className="btn btn-outline-danger my-2 mx-2"
                style={{ borderRadius: "50px" }}
              >
                X
              </button>
            </div>
            <p>Completed</p>
          </div>
        ) : (
          <div>
            <span style={{ fontWeight: "bold, underline" }}>
              {props.todo.title} :{" "}
            </span>{" "}
            {props.todo.description}
            <button
              onClick={() => deleteTodoHandler(props.todo.title)}
              className="btn btn-outline-danger my-2 mx-2"
              style={{ borderRadius: "50px" }}
            >
              X
            </button>
            <p>
              {props.todo.completed ? null : (
                <span>
                  Not Completed{" "}
                  <button
                    onClick={() => updateTodoHandler(props.todo.title)}
                    className="btn btn-outline-success my-2 mx-2"
                    style={{ borderRadius: "50px" }}
                  >
                    ✓
                  </button>
                </span>
              )}
            </p>
          </div>
        )}
      </div>
      <hr></hr>
    </div>
  );
}

export default TodoItem;
