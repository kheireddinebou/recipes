import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GiKnifeFork } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSearch = e => {
    e.preventDefault();
    navigate(`/search/${input}`);
  };

  return (
    <>
      <Link to="/">
        <div className="logo">
          <GiKnifeFork className="logo-icon" />
          <h1 className="logo-title">deliciousss</h1>
        </div>
      </Link>

      <form onSubmit={handleSearch} className="search">
        <FaSearch className="search-icon" />
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
      </form>
    </>
  );
}

export default Search;
