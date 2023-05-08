import React from "react";

const FormGroup = ({ children, className = "" }) => {
  return (
    <div
      className={`flex flex-col mb-4 gap-y-2 lg:gap-y-3 lg:mb-6 ${className}`}
    >
      {children}
    </div>
  );
};

export default FormGroup;
