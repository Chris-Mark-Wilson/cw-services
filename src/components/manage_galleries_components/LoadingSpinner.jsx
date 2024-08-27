import React from "react";
import "../../css_files/modal.css"; // Ensure the CSS file is imported
import { Spinner } from "react-bootstrap";

export const LoadingSpinner = ({message}) => {
  return (
    <>
      {/* <div className="delete-overlay"></div> */}
      <div className="delete-modal">
        <div className="delete-modal-content">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">{message}</span>
          </Spinner>
          <p style={{textAlign:'center'}}>{message}</p>
        </div>
      </div>
    </>
  );
};
