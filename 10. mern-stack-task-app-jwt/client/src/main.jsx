import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "./components/ui/toaster.jsx";
import TaskManagerProvider from "./context/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <TaskManagerProvider>
      <App />
      <Toaster />
    </TaskManagerProvider>
  </BrowserRouter>
);
