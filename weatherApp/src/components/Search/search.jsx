import React, { useState } from "react";

const SearchComponent = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    onSearch(search);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Sök..."
        debounceTimeout={10000}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Sök</button>
    </div>
  );
};

export default SearchComponent;