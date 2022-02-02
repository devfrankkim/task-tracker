import { useState } from "react";
import Header from "./components/Header";
import DATA from "./components/data";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState(DATA);

  const onDelete = (id) => {
    setTasks(tasks.filter((datas) => datas.id !== id));
  };
  return (
    <>
      <div className="container">
        <Header />
        <Tasks tasks={tasks} onDelete={onDelete} />
      </div>
    </>
  );
}

export default App;
