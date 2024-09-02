import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(ev) {
    ev.preventDefault();
    try {
      await axios.post("/api/users", {
        name,
        email,
        password,
      });
      alert("Registration successful! You can now log in.");
    } catch (error) {
      alert("Registration failed. Please try again later." + error);
    }
  }

  return (
    <>
      <div className="mt-4 grow flex items-center justify-around">
        <div className="mb-60">
          <h1 className="text-4xl text-center font-bold mb-4">Register</h1>
          <form onSubmit={registerUser} className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Full name"
              value={name}
              onChange={(ev) => setName(ev.target.value)}
            />
            <input
              type="email"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              placeholder="Your courriel adress"
            />
            <input
              type="password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
              placeholder="***********"
            />
            <button className="login">Register</button>
          </form>

          <div className="text-center py-2">
            <span className="text-center text-gray-500">
              {" "}
              Already a member ?{" "}
            </span>
            <Link to={"/login"} className="font-bold mx-2 underline text">
              Login now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
