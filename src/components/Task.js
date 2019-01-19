import React from 'react';


const Task = (props) => {
  return(
    <div className="task-item">
      <span
        className="task-delete"
        onClick={ () => props.removeTask(props.id) }
        >&#10006;
      </span>
      <span className="task-text">{props.task}</span>
    </div>
  );
}


export default Task;
