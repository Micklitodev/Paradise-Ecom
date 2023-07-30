import { CiSearch } from "react-icons/ci";
import React, { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState({ search: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSearch({
      ...search,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      window.location.assign(`/search/${search.search}`);
    } catch (e) {
      console.log(e);
    } finally {
      setSearch({ search: "" });
    }
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto",
        alignItems: "center",
        gap: "5px",
      }}
    >
      <input
        style={{ minHeight: 30, width: 300 }}
        type="text"
        name="search"
        value={search.search}
        onChange={handleChange}
      />
      <button
        className="mb-2.5"
        style={{ padding: 5, minHeight: 40 }}
        onClick={handleSubmit}
      >
        <CiSearch size={20} />
        <p style={{ maxHeight: "2px", fontSize: 10 }}>search</p>
      </button>
    </div>
  );
};

export default SearchBar;
