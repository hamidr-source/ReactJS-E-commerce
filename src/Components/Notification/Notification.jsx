import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import './Notification.css';

const Notification = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return ReactDOM.createPortal(
    <div className={`notification ${type}`}>
      <span>{message}</span>

    </div>,
    document.getElementById("portal-root")
  );
};

export default Notification;
