import React, { useState } from "react";
import { login } from "../api/auth";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await login({ username, password });
      // Save the tokens (you can use localStorage, cookies, or Context API)
      localStorage.setItem("access_token", data.access);
      localStorage.setItem("refresh_token", data.refresh);
      alert("Login successful!");
      //   redirect home
      window.location.href = "/";
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="font-default md:w-1/2 m-auto p-3">
      <h2 className="text-3xl font-bold text-[#008374] mb-6 text-center">
        Welcome back, Login
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="border border-gray-300 rounded-md p-3"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border border-gray-300 rounded-md p-3"
        />
        <button
          type="submit"
          className="bg-[#008374] text-white p-3 rounded-lg"
        >
          Login
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
