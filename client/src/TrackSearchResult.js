import React from "react";
import "./TrackSearchResult.css";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

function TrackSearchResult({ track, chooseTrack }) {
  function handlePlay() {
    chooseTrack(track);
  }
  return (
    <div className="track">
      <PlayArrowIcon onClick={handlePlay} />
      <img src={track.albumUrl} />
      <div className="track__info">
        <div>{track.title}</div>
        <div className="track__artist">{track.artist}</div>
      </div>
    </div>
  );
}

export default TrackSearchResult;
