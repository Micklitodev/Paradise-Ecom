import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto",
        alignItems: "center",
        gap: "5px",
      }}
    >
      <input style={{ minHeight: 37, width: 220 }} type="text" />
      <button style={{ padding: 5, minHeight: 40 }}>
        <CiSearch />
        <p style={{ maxHeight: "2px", fontSize: 10, margin: 0 }}>search</p>
      </button>
    </div>
  );
};

export default SearchBar;
