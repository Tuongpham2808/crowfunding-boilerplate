import React from "react";
import { useDropdown } from "./dropdown-context";

const List = ({ children }) => {
  const { show } = useDropdown();
  return (
    <>
      {show && (
        <div className="absolute left-0 z-20 w-full bg-white rounded-xl top-full shadow-sdprimary max-h-[300px] overflow-y-auto">
          {children}
        </div>
      )}
    </>
  );
};

export default List;
