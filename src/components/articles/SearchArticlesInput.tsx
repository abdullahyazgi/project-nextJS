"use client";
import React, { useState } from "react";

const SearchArticlesInput = () => {
  const [searchText, setSearchText] = useState("");

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({ searchText });
  };

  return (
    <form onSubmit={formSubmitHandler} className="my-5 w-full md:w-2/3 m-auto">
      <input
        className="w-full rounded p-3 text-xl border-none text-gray-900"
        type="search"
        placeholder="Search for article"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </form>
  );
};

export default SearchArticlesInput;
