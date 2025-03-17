import "./Profile.css";

function Profile() {
  return (
    <div className="profile-container">
      <h2 className="profile-header">My Profile</h2>

      {/* Profile Pic */}
      <div className="profile-pic-container">
        <img
          src="https://via.placeholder.com/15" // Use your profile pic here
          alt="Profile"
          className="profile-pic"
        />
      </div>

      {/* User Info */}
      <div className="profile-info">
        <p><strong>Username:</strong> JohnDoe</p>
        <p><strong>Email:</strong> johndoe@example.com</p>
        <p><strong>Bio:</strong> Music lover, indie artist, and passionate about sharing great tunes.</p>
      </div>

      {/* My Music */}
      <div className="my-music">
        <h3>My Music</h3>
        <ul>
          <li>Song 1 - Artist 1</li>
          <li>Song 2 - Artist 2</li>
          <li>Song 3 - Artist 3</li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
