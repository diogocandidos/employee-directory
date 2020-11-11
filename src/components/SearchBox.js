import React from "react";

function SearchBox({ handleSearchChange }) {
  return (
    <div className="searchbox">
      <form className="form-inline">
        <input
          className="form-control form-control-m mr-sm-3"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={e => handleSearchChange(e)}
        />
        <button className="btn btn-info btn-m font-weight-bold" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
export default SearchBox;
