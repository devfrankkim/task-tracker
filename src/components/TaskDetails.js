import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

function TaskDetails() {
  const [loading, setLoading] = useState(true);
  const [task, setTask] = useState({});

  const params = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchTask = async () => {
      const res = await fetch(`http://localhost:5000/tasks/${params.id}`);
      const data = await res.json();

      if (res.status === 404) {
        navigate("/");
      }

      setTask(data);
      setLoading(false);
    };
    fetchTask();
  }, []);

  return loading ? (
    <h3>Loading...</h3>
  ) : (
    <div>
      <p>{pathname} </p>
      <p> {task.text} </p>
      <p> {task.day} </p>
      <button
        className="btn"
        onClick={() => {
          navigate(-1);
        }}
      >
        Go back
      </button>
    </div>
  );
}

export default TaskDetails;
