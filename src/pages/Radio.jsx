import React, { useState } from "react";
import MusicPlayer from "../components/MusicPlayer";
import "./Radio.css";

// Example radio stations with added details for demonstration
const radioStations = [
  { 
    title: "Lo-Fi Chill", 
    url: "https://streaming-url-for-lofi", 
    description: "A chill and relaxing lo-fi beats radio station." 
  },
  { 
    title: "Jazz Cafe", 
    url: "https://streaming-url-for-jazz", 
    description: "Smooth jazz tunes for a cozy vibe." 
  },
  { 
    title: "Hip-Hop Beats", 
    url: "https://streaming-url-for-hiphop", 
    description: "Fresh and cool hip-hop beats for your energy." 
  },
];

function Radio() {
  const [currentPlaylist, setCurrentPlaylist] = useState([]);
  const [currentStation, setCurrentStation] = useState(null);
  const [volume, setVolume] = useState(1); // Volume state (0 to 1)
  const [favoriteStations, setFavoriteStations] = useState([]);

  const handlePlay = (station) => {
    setCurrentPlaylist([station]);
    setCurrentStation(station.title);
  };

  const handleStop = () => {
    setCurrentPlaylist([]);
    setCurrentStation(null);
  };

  const handleToggleFavorite = (station) => {
    if (favoriteStations.includes(station.title)) {
      setFavoriteStations(favoriteStations.filter((fav) => fav !== station.title));
    } else {
      setFavoriteStations([...favoriteStations, station.title]);
    }
  };

  return (
    <div className="radio-container p-6">
      <h2 className="radio-title text-2xl font-bold mb-6">Radio Stations</h2>

      {/* Radio Station List */}
      <div className="radio-stations-list">
        {radioStations.map((station, index) => (
          <div
            key={index}
            className={`station-item flex justify-between items-center p-4 mb-3 rounded-md ${
              currentStation === station.title ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onMouseEnter={() => console.log(`Hovering over ${station.title}`)} // Placeholder for hover info
          >
            <div>
              <span>{station.title}</span>
              <p className="station-description text-sm">{station.description}</p>
            </div>
            <div className="flex items-center">
              <button
                className="play-btn bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                onClick={() => handlePlay(station)}
              >
                Play
              </button>
              <button
                className={`favorite-btn ${favoriteStations.includes(station.title) ? "bg-yellow-500" : "bg-gray-500"} text-white px-2 py-1 rounded-full`}
                onClick={() => handleToggleFavorite(station)}
              >
                {favoriteStations.includes(station.title) ? "Unfavorite" : "Favorite"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Now Playing Section */}
      {currentStation && (
        <div className="now-playing mt-6 text-center">
          <h3 className="text-xl font-semibold">Now Playing: {currentStation}</h3>
          <button 
            className="stop-btn mt-2 bg-red-500 text-white px-4 py-2 rounded-md"
            onClick={handleStop}
          >
            Stop
          </button>
        </div>
      )}

      {/* Volume Control */}
      {currentPlaylist.length > 0 && (
        <div className="volume-control mt-6 text-center">
          <label htmlFor="volume" className="text-lg">Volume</label>
          <input
            id="volume"
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            className="volume-slider w-full mt-2"
          />
        </div>
      )}

      {/* MusicPlayer Component */}
      {currentPlaylist.length > 0 && <MusicPlayer playlist={currentPlaylist} volume={volume} />}
    </div>
  );
}

export default Radio;
