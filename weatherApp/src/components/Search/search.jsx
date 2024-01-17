import React, { useState } from "react";
import "../Search/search.css";

const SearchComponent = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (search !== "") onSearch(search);
    else alert("Cannot fetch weather data!")
  };

  return (
    <div className="searchfield">
      <input
        type="text"
        placeholder="Sök på stad"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="searchbtn" onClick={handleSearch}>
        Sök
      </button>
    </div>
  );
};

export default SearchComponent;
