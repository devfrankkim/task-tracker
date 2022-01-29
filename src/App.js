import { useState } from "react";
import Header from "./components/Header";
import DATA from "./components/data";
import Tasks from "./components/Tasks";

function App() {
  return (
    <>
      <Header />
      <Tasks data={DATA} />
    </>
  );
}

export default App;
