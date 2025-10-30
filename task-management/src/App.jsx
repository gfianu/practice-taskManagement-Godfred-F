import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskList from "./components/TaskList.jsx";
//import TaskDetail from "./components/TaskDetail.jsx";

// import { BrowserRouter, Routes, Route, Navigate } from 'react-router';

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<TaskList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
