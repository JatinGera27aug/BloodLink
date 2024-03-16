import React, { useState } from 'react';

const SearchComponent = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(search);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <input
        type="text"
        placeholder="Search for Blood..."
        value={search}
        onChange={handleChange}
        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring "
      />
      <button
        type="submit"
        className="ml-1 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none "
      >
        Search
      </button>
    </form>
  );
};

export default SearchComponent;
