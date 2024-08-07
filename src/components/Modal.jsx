import React from 'react';
import '../css_files/delete_modal.css'; // Ensure the CSS file is imported

export const Modal = ({ title, message, onConfirm,onCancel }) => {
  return (
    <>
      <div className="delete-overlay"></div>
      <div className="delete-modal">
        <div className="delete-modal-content">
          <h4>{title}</h4>
          <p>{message}</p>
          <button onClick={onConfirm}>Yes</button>
          <button onClick={onCancel}>No</button>
        </div>
      </div>
    </>
  );
};