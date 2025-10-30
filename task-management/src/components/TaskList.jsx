// Component displaying details of a specific task
import { mockData } from "./mockData";
import { Link } from "react-router-dom";

function TaskList() {
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {mockData.map((task) => (
          <li key={task.id}>
            <Link to={`/task/${task.id}`}>{task.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
