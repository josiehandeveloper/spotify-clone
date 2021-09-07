import { useState } from "react";
import useAuth from "./useAuth";
import "./Homepage.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Player from "./Player";

function Homepage({ code }) {
  const accessToken = useAuth(code);

  return (
    <div className="homePage">
      <div className="homePage__body">
        <Sidebar />
        <Body />
      </div>
      <Player />
    </div>
  );
}

export default Homepage;
