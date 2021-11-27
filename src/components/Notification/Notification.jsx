import React from "react";
import "./Notification.css";

const Notification = ({ color, children }) => {
  let borderColor;
  switch (color) {
    case "success":
      borderColor = "green";
      break;
    case "error":
      borderColor = "red";
      break;
    default:
      borderColor = "#222";
  }

  return (
    <div className="notification" style={{ borderColor }}>
      {children}
    </div>
  );
};

export default Notification;
