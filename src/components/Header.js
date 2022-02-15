function Header({ onOpen, toggleAddTask }) {
  return (
    <>
      <div className="header">
        <h1>Task Tracker</h1>
        {onOpen ? (
          <button className="btn" onClick={toggleAddTask}>
            Add
          </button>
        ) : (
          <button
            className={"btn"}
            style={{ background: "red" }}
            onClick={toggleAddTask}
          >
            Close
          </button>
        )}
      </div>
    </>
  );
}

export default Header;
