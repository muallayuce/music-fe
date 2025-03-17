import React, { useState, useEffect } from "react";
import MusicPlayer from "../components/MusicPlayer"; // Make sure MusicPlayer is set up to play audio
import "./Suggestions.css";

function Suggestions() {
  // Mock data for songs until backend is available
  const mockSongs = [
    {
      id: 1,
      title: "Song 1",
      artist: "Artist 1",
      album: "Album 1",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // You can replace this with any audio URL
    },
    {
      id: 2,
      title: "Song 2",
      artist: "Artist 2",
      album: "Album 2",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
    {
      id: 3,
      title: "Song 3",
      artist: "Artist 3",
      album: "Album 3",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    },
    {
      id: 4,
      title: "Song 4",
      artist: "Artist 4",
      album: "Album 4",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    },
    {
      id: 5,
      title: "Song 5",
      artist: "Artist 5",
      album: "Album 5",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    },
  ];

  const [songs, setSongs] = useState(mockSongs); // Set songs from mock data
  const [selectedPlaylist, setSelectedPlaylist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(false); // Not fetching from API now, so just simulate loading
  }, []);

  const handlePlayAll = () => {
    setSelectedPlaylist(songs);
  };

  const handlePlay = (song) => {
    setSelectedPlaylist([song]);
  };

  if (loading) {
    return <div className="loading">Loading songs...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="suggestions-container">
      <h2 className="suggestions-title">Recommended Songs</h2>

      <button className="play-all-btn" onClick={handlePlayAll}>
        Play All
      </button>

      <div className="song-list">
        {songs.map((song) => (
          <div key={song.id} className="song-card">
            <div className="song-info">
              <span className="song-title">{song.title}</span>
              <span className="song-artist">{song.artist}</span>
            </div>
            <button className="play-btn" onClick={() => handlePlay(song)}>
              Play
            </button>
          </div>
        ))}
      </div>

      {selectedPlaylist.length > 0 && <MusicPlayer playlist={selectedPlaylist} />}
    </div>
  );
}

export default Suggestions;
