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
      <input style={{ minHeight: 30, width: 300 }} type="text" />
      <button className="mb-2.5" style={{ padding: 5, minHeight: 40 }}>
        <CiSearch size={20} />
        <p style={{ maxHeight: "2px", fontSize: 10 }}>search</p>
      </button>
    </div>
  );
};

export default SearchBar;
