import React, { useState, useRef } from "react";
import "./MusicPlayer.css";

function MusicPlayer({ playlist }) {
  const [currentSong, setCurrentSong] = useState(playlist[0]);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <div className="music-player">
      <h3>Now Playing: {currentSong.title}</h3>
      <audio ref={audioRef} src={currentSong.audioUrl} controls></audio>
      <button className="play-pause-btn" onClick={handlePlayPause}>
        {audioRef.current && !audioRef.current.paused ? "Pause" : "Play"}
      </button>
    </div>
  );
}

export default MusicPlayer;
