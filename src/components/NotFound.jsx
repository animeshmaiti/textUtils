import React from "react";

function NotFound() {
    const size={
        width: "fit-content",
    }
  return (
    <div>
      <div className="not-found">
        <h1 style={size}>404 Not Found</h1>
        <p style={size}>Sorry, the page you are looking for does not exist.</p>
      </div>
    </div>
  );
}

export default NotFound;
