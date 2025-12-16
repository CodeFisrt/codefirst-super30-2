import { useState } from "react";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Both fields are required");
      return;
    }

    setError("");
    onLogin();
  };

  return (
    <form
      className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>

      <input
        type="text"
        placeholder="Username"
        className="w-full border rounded-lg px-4 py-2 mb-3"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full border rounded-lg px-4 py-2 mb-3"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

      <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
        Login
      </button>
    </form>
  );
}
