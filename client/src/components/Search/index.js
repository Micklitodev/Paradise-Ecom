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
        className="searchbar"
        style={{
          maxHeight: 35,
          width: 300,
          borderRadius: 50,
          border: "solid 1px white",
          backgroundColor: "rgb(244, 244, 244)",
          opacity: ".9",
          textAlign: "center",
          color: "grey",
        }}
        type="text"
        name="search"
        placeholder="Search by product or category"
        value={search.search}
        onChange={handleChange}
      />
      <button
        className="mb-2.5"
        style={{ padding: 5, minHeight: 40 }}
        disabled={!search.search}
        onClick={handleSubmit}
      >
        <CiSearch style={{ color: "white" }} size={20} />
        <p style={{ maxHeight: "2px", color: "white", fontSize: 10 }}>search</p>
      </button>
    </div>
  );
};

export default SearchBar;
