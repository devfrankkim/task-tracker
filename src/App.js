import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import DATA from "./components/data";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import About from "./components/About";
import TaskDetails from "./components/TaskDetails";
import ErrorNotFound from "./components/ErrorNotFound";

function App() {
  const [tasks, setTasks] = useState(DATA);
  const [add, setAdd] = useState(false);

  const SERVER = "http://localhost:5000/tasks";

  useEffect(() => {
    // ======= Get all the data from server (default loading) =======
    const getDataFromServer = async () => {
      const res = await fetch(SERVER);
      const data = await res.json();

      return setTasks(data);
    };

    const showAdd = async () => {
      const res = await fetch("http://localhost:5000/opentask/1");
      const data = await res.json();

      return setAdd(data.open);
    };

    showAdd();
    getDataFromServer();
  }, []);

  // ======= delete task =======
  const deleteTask = async (id) => {
    await fetch(`${SERVER}/${id}`, {
      method: "DELETE",
    });

    setTasks(tasks.filter((datas) => datas.id !== id));
  };

  // ======= Get current data from server =======
  const getCurrentTask = async (id) => {
    const currentData = await fetch(`${SERVER}/${id}`);
    const data = await currentData.json();

    return data;
  };

  // ======= add task =======
  const addTask = async (newTask) => {
    console.log(newTask);
    const currentData = await fetch(`${SERVER}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask),
    });

    const newPost = await currentData.json();

    setTasks([...tasks, newPost]);
  };

  // ======= Toggle reminder =======
  const toggleReminder = async (id) => {
    const currentData = await getCurrentTask(id);
    const newTask = { ...currentData, reminder: !currentData.reminder };

    const res = await fetch(`${SERVER}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask),
    });

    const resData = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: resData.reminder } : task
      )
    );
  };

  // ======= Toggle task template =======
  const toggleAddTask = async () => {
    const newData = { open: !add };

    const postRequest = await fetch(`http://localhost:5000/openTask/${1}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    });

    const dataRes = await postRequest.json();

    setAdd(dataRes.open);
  };

  return (
    <Router>
      <div className="container">
        <Header onOpen={add} toggleAddTask={toggleAddTask} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddTask onAdd={addTask} showAdd={add} />
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                  />
                ) : (
                  "No Task"
                )}
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/task/:id" element={<TaskDetails />} />
          <Route path="*" element={<ErrorNotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
