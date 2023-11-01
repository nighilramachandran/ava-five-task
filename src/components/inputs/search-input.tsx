import Search from "@/app/assets/search";
import React, { FC } from "react";

const SearchInput: FC = () => {
  return (
    <div className="relative">
      <input
        type="text"
        className="bg-secondary h-searchInputHeight w-searchInputWidth rounded outline-none focus:outline-none pl-8"
        placeholder="Search for products or brands....."
      />
      <div className="w-6 h-6 absolute top-2 left-1 text-gray-500">
        <Search />
      </div>
    </div>
  );
};

export default SearchInput;
