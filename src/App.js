import "./App.css";
import { useSelector } from "react-redux";
import TodoList from "./components/TodoList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./components/Registration";
import Login from "./components/Login";

function App() {
  const state = useSelector((state) => ({ ...state }));
  console.log("state", state);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<TodoList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
