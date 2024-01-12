import React, { useState } from "react";


const SearchComponent = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    onSearch(search);
  };

  return (
    <div className="searchfield">
      <input
        type="text"
        placeholder="Sök på stad"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Sök</button>
    </div>
  );
};

export default SearchComponent;