import React from "react";
import "./button.css";

const ModalButton = props => {
  return (
    <div>
      <div className="button primary" onClick={props.submit}>
        Read more
      </div>
    </div>
  );
};

export default ModalButton;
