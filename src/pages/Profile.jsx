import { useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    localStorage.removeItem("access_token");  
    localStorage.removeItem("refresh_token"); 
    navigate("/"); 
  };

  const handleEdit = () => {
    navigate("/edit-profile");
  };

  return (
    <div className="profile-container">
      <h2 className="profile-header">My Profile</h2>

      {/* Profile Pic */}
      <div className="profile-pic-container">
        <img
          src="https://via.placeholder.com/150" 
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

      {/* Edit and Logout Buttons */}
      <div className="profile-buttons">
        <button onClick={handleEdit} className="edit-btn">Edit Profile</button>
        <button onClick={handleLogout} className="logout-btn">Log Out</button>
      </div>
    </div>
  );
}

export default Profile;
