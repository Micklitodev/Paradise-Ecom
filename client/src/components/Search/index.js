import { CiSearch } from "react-icons/ci";
import React, { useState } from "react";
import "./style.css";

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
    if(search.search === ''){
      return
    }
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
      <form onSubmit={handleSubmit}>
        <input
          className="searchbar"
          style={{
            maxHeight: 35,
            width: 300,
            borderRadius: 50,
            border: "solid 1px white",
            backgroundColor: "rgba(4, 4, 4, 0.03)",
            opacity: ".9",
            textAlign: "center",
            color: "white",
          }}
          type="text"
          name="search"
          value={search.search}
          onChange={handleChange}
        />
      </form>
      <button
        className="mb-2.5"
        style={{ padding: 5, minHeight: 40 }}
        disabled={!search.search}
        type="submit"
        onClick={handleSubmit}
      >
        <CiSearch style={{ color: "white" }} size={20} />
        <p style={{ maxHeight: "2px", color: "white", fontSize: 10 }}>Search</p>
      </button>
    </div>
  );
};

export default SearchBar;
