import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    username: "",
  });
  const navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: "", password: "", username: "" };

    // Email validation
    if (!email) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email.";
      isValid = false;
    }

  // Password validation
if (!password) {
  newErrors.password = "Password is required.";
  isValid = false;
} else if (password.length < 6) {
  newErrors.password = "Password must be at least 6 characters long.";
  isValid = false;
} else if (!/[A-Z]/.test(password)) {
  newErrors.password = "Password must contain at least one uppercase letter.";
  isValid = false;
} else if (!/[a-z]/.test(password)) {
  newErrors.password = "Password must contain at least one lowercase letter.";
  isValid = false;
} else if (!/[0-9]/.test(password)) {
  newErrors.password = "Password must contain at least one number.";
  isValid = false;
} else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
  newErrors.password = "Password must contain at least one special character.";
  isValid = false;
}


    // Username validation
    if (!username) {
      newErrors.username = "Username is required.";
      isValid = false;
    } else if (username.length < 3) {
      newErrors.username = "Username must be at least 3 characters long.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("User signed up:", email);
      navigate("/profile");
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={`form-input ${errors.username ? "error-input" : ""}`}
          />
          {errors.username && <span className="error">{errors.username}</span>}
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`form-input ${errors.email ? "error-input" : ""}`}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`form-input ${errors.password ? "error-input" : ""}`}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <button type="submit" className="submit-btn">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
