import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthPage from "./pages/auth";
import CommonLayout from "./components/common-layout";
import TasksPage from "./pages/tasks";
import ScrumBoardPage from "./pages/scrum-board";

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/tasks" element={<CommonLayout />}>
        <Route path="list" element={<TasksPage />} />
        <Route path="scrum-board" element={<ScrumBoardPage />} />
      </Route>
    </Routes>
  );
}

export default App;
