import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [isLogin, setIsLogin] = useState(true); // ✅ Fix 1
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);

    try {
      const response = await fetch(
        `http://localhost/mywellbeing/api/login.php`,
        {
          method: "POST",
          body: formData,
        }
      );

      const text = await response.text();
      setMessage(text);

      
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login :</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // ✅ Fix 2
            required
            style={styles.input}
          />
        
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // ✅ Fix 3
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // ✅ Fix 4
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
      
      <p>{message}</p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    textAlign: "center",
    fontFamily: "Arial",
  },
  form: { display: "flex", flexDirection: "column", gap: "10px" },
  input: { padding: "10px", borderRadius: "5px", border: "1px solid #aaa" },
  button: {
    padding: "10px",
    background: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  toggle: { color: "blue", cursor: "pointer" },
};

export default LoginForm;


