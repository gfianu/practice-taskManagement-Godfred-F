import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskDetail from "./components/TaskDetail";
import "./App.css";

function App() {
  return (
    <BrowserRouter>

    <div className="App">
      <h1>📝 My Task App</h1>
      <nav>
        <Link to="/">🏠 Home</Link>
      </nav>
      <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/task/:id" element={<TaskDetail />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;


