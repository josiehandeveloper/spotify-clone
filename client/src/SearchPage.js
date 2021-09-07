import React from "react";
import "./SearchPage.css";
import Sidebar from "./Sidebar";
import Player from "./Player";
import Body from "./Body";

function SearchPage({ spotify }) {
  return (
    <div className="searchPage">
      <div className="searchPage__body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Player spotify={spotify} />
    </div>
  );
}

export default SearchPage;
