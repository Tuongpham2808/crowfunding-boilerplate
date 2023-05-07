import { IconFolder } from "components/icons";
import React from "react";
import { Link } from "react-router-dom";

const CampCategory = ({ text = "Education", className = "" }) => {
  return (
    <Link
      to="/"
      className={`flex items-baseline gap-x-3 text-xs mb-4 text-text3 font-medium ${className}`}
    >
      <IconFolder></IconFolder>
      <span>{text}</span>
    </Link>
  );
};

export default CampCategory;
