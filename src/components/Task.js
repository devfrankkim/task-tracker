import React from "react";
import { Link } from "react-router-dom";

function Task({ task, onDelete, onToggle }) {
  return (
    <div
      className={`task ${task.reminder && "reminder"}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <div>
        <h3>{task.text}</h3>
        <p>{task.day}</p>
      </div>
      <button
        style={{
          color: "red",
          cursor: "pointer",
          border: "none",
        }}
        onClick={() => onDelete(task.id)}
      >
        ❌
      </button>
      <p>
        <Link to={`/task/${task.id}`}>View Details</Link>
      </p>
    </div>
  );
}

export default Task;
