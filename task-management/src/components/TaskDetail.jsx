// Component displaying a list of tasks

import { useParams } from "react-router-dom";
import { mockData } from "./mockData";

function TaskDetail() {
  const { id } = useParams();
  const task = mockData.find((t) => t.id === Number(id));

  if (!task) {
    return <h3>Task not found!</h3>
  }

  return (
  <div>
    <h2>{task.title}</h2>
    <p>{task.description}</p>
  </div>
);
}

export default TaskDetail;
