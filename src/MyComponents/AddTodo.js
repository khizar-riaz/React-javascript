import React, { useState } from "react";

export const AddTodo = (props) => {
        const [title, setTitle] = useState("");
        const [desc, setDesc] = useState("");

        const Submit = () =>
        {

        }
  return (
    <div className="container my-3">
        <h3>Add a AddTodo</h3>
      <form>
        <div class="mb-3">
          <label for="title" class="form-label">
            Todo Title
          </label>
          <input
            type="email"
            value={title}
            class="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="desc" class="form-label">
            Todo Description
          </label>
          <input
            type="text"
            value={desc}
            class="form-control"
            id="desc"
          />
        </div>
        <button type="submit" class="btn btn-sm btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
};
