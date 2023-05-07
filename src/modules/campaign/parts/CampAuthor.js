import { defaultImage } from "constants/global";
import React from "react";

const CampAuthor = ({ image = defaultImage, author = "Mahfuzul Nabil" }) => {
  return (
    <div className="flex items-center gap-x-3">
      <img src={image} alt="" className="w-8 h-8 rounded-full object-cover" />
      <p className="text-xs text-text3">
        by <span className="text-text2 font-semibold">{author}</span>
      </p>
    </div>
  );
};

export default CampAuthor;
