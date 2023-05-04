import React from "react";

const Checkbox = ({
  name = "",
  checked = false,
  onClick = () => {},
  children,
}) => {
  return (
    <div className="flex items-start gap-x-5">
      <span
        className={`inline-flex items-center justify-center text-white p-1 w-5 h-5 border rounded cursor-pointer ${
          checked
            ? "bg-primary border-primary"
            : "border-text4 dark:border-text3"
        }`}
        onClick={onClick}
      >
        <input
          type="checkbox"
          name={name}
          className="hidden"
          onChange={() => {}}
        />
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={`w-5 h-5 ${checked ? "opacity-1" : "opacity-0"}`}
          >
            <path
              fillRule="evenodd"
              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </span>
      {children && (
        <div onClick={onClick} className="cursor-pointer select-none">
          {children}
        </div>
      )}
    </div>
  );
};

export default Checkbox;
