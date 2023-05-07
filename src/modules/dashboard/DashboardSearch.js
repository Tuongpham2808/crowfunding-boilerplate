import { defaultImage } from "constants/global";
import React, { useState } from "react";

const DashboardSearch = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="relative z-50">
      <div className="flex items-center w-full p-2 bg-white rounded-full shadow-sdprimary">
        <div className="flex-1 px-5">
          <input
            type="text"
            placeholder="Do fundrise now"
            className="w-full text-sm bg-transparent placeholder:text-text4 text-text1"
          />
        </div>
        <button className="w-[72px] h-10 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {showSearch && (
        <div className="search-results w-full lg:w-[843px] bg-white absolute top-full left-0 z-50 translate-y-5 pb-6 rounded-3xl">
          <div className="flex items-center justify-between p-3 bg-graySoft rounded-3xl">
            <h4 className="pl-4 text-sm font-medium underline">
              See all 10,124 fundraisier
            </h4>
            <button className="flex items-center justify-center w-[72px] h-[50px] bg-error rounded-xl bg-opacity-20 text-error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </button>
          </div>
          <div className="p-6 pb-0">
            <div className="flex flex-col mb-6 gap-y-5">
              <SearchItem></SearchItem>
              <SearchItem></SearchItem>
              <SearchItem></SearchItem>
              <SearchItem></SearchItem>
            </div>
            <h3 className="mb-5 text-sm font-semibold">Related searchs</h3>
            <div className="flex flex-col text-sm gap-y-3 text-text2">
              <p>
                <strong>education</strong> fund
              </p>
              <p>schoralship fund</p>
              <p>
                <strong>education</strong> and schools fund
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

function SearchItem() {
  return (
    <div className="flex items-center gap-x-5">
      <img
        src={defaultImage}
        alt=""
        className="w-[50px] h-[50px] rounded-lg object-cover"
      />
      <div className="flex-1 text-sm">
        <h3 className="mb-1">
          <strong>Education</strong> fund for Durgham Family
        </h3>
        <p className="text-text3">By Durgham Family</p>
      </div>
    </div>
  );
}

export default DashboardSearch;
