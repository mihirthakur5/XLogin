import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username == "user" && password == "password") {
      setError("");
      setIsSubmitted(true);
    } else {
      setError("Invalid username or password");
      setIsSubmitted(false);
    }
  };

  return (
    <>
      <h1>Login Page</h1>
      <p>{error}</p>
      {isSubmitted ? (
        <div>
          <p>Welcome, {username}</p>
        </div>
      ) : (
        <div>
          <form action="" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Username:</label>
              <input
                id="username"
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                id="password"
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </>
  );
}

export default App;
