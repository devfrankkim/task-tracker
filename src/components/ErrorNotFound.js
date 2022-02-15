import React from "react";
import { Link } from "react-router-dom";

function ErrorNotFound() {
  return (
    <div style={{ textAlign: "center" }}>
      <div>Not Found </div>
      <div>
        <Link to="/">Home Screen</Link>
      </div>
    </div>
  );
}

export default ErrorNotFound;
