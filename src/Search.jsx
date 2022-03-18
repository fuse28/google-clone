import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { action } from "./reducer";

export default function Search({ hidebuttons }) {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const [{}, dispatch] = useStateValue();
  console.log(dispatch);

  const search = (e) => {
    e.preventDefault();
    dispatch({
      type: action.SET_SEARCH_TERM,
      term: input,
    });
    navigate("/search");
  };

  return (
    <form className="search">
      <div className="search-input">
        <SearchIcon className="searchIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon className="MicIcon" />
      </div>
      {!hidebuttons ? (
        <div className="search-buttons">
          <Button onClick={search} type="submit" variant="outline">
            Google Search
          </Button>
          <Button variant="outline">I'm feeling lucky</Button>
        </div>
      ) : (
        <div className="search-buttons" style={{ display: "none" }}>
          <Button onClick={search} type="submit" variant="outline">
            Google Search
          </Button>
        </div>
      )}
    </form>
  );
}
