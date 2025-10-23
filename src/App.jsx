import React from "react";
import { Routes, Route } from "react-router-dom";
import TaskManager from "./components/TaskManager";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import "./index.css";

function Home() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold">Welcome to PLP Task Manager</h1>
      <p className="mt-3 text-gray-600 dark:text-gray-300">
        Manage your tasks efficiently!
      </p>
    </div>
  );
}

function ApiData() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch(() => console.error("API fetch failed"));
  }, []);

  return (
    <div className="mt-10 px-6">
      <h2 className="text-2xl font-bold mb-4">API Data</h2>
      <ul className="space-y-2">
        {data.map((item) => (
          <li
            key={item.id}
            className="border p-3 rounded bg-gray-50 dark:bg-gray-800 dark:text-gray-100"
          >
            <strong>{item.title}</strong>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<TaskManager />} />
            <Route path="/api" element={<ApiData />} />
          </Routes>
        </main>
        <footer className="bg-gray-800 text-white text-center p-4 mt-auto dark:bg-gray-950">
          © {new Date().getFullYear()} PLP Task Manager. All rights reserved.
        </footer>
      </div>
    </ThemeProvider>
  );
}
