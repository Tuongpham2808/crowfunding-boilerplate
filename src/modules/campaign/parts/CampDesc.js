import React from "react";

const CampDesc = ({ children, className = "text-xs mb-4" }) => {
  return <p className={`text-text3 font-normal ${className}`}>{children}</p>;
};

export default CampDesc;
