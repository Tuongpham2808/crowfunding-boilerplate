import React from "react";

const CampMeta = ({
  amount = "$2,000",
  text = "Raised of $1,900",
  size = "small",
}) => {
  return (
    <div className="flex flex-col gap-y-1">
      <h4
        className={`text-text2 font-semibold ${
          size === "small" ? " text-sm" : "text-xl"
        }`}
      >
        {amount}
      </h4>
      <span
        className={`text-text4 ${size === "small" ? "text-xs" : "text-base"}`}
      >
        {text}
      </span>
    </div>
  );
};

export default CampMeta;
