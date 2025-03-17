import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="welcome-section">
        <h1 className="welcome-heading">Welcome to MusicApp!</h1>
        <p className="welcome-text">
          Discover your favorite music, explore new artists, and enjoy endless playlists!
        </p>
      </div>

      <div className="featured-section">
        <h2 className="featured-heading">Featured Music</h2>
        <div className="featured-music">
          <div className="music-card">
            <img
              src="https://via.placeholder.com/150"
              alt="Featured Song 1"
              className="music-img"
            />
            <div className="music-details">
              <h3 className="music-title">Song Title 1</h3>
              <p className="music-artist">Artist Name 1</p>
            </div>
          </div>
          <div className="music-card">
            <img
              src="https://via.placeholder.com/150"
              alt="Featured Song 2"
              className="music-img"
            />
            <div className="music-details">
              <h3 className="music-title">Song Title 2</h3>
              <p className="music-artist">Artist Name 2</p>
            </div>
          </div>
        </div>
      </div>

      <div className="new-releases-section">
        <h2 className="new-releases-heading">New Releases</h2>
        <div className="new-releases">
          <div className="release-card">
            <img
              src="https://via.placeholder.com/150"
              alt="New Release 1"
              className="release-img"
            />
            <p className="release-title">New Release 1</p>
          </div>
          <div className="release-card">
            <img
              src="https://via.placeholder.com/150"
              alt="New Release 2"
              className="release-img"
            />
            <p className="release-title">New Release 2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
