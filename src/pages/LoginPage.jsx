import axios from "axios";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, sertRedirect] = useState(false);

  async function handleLoginSubmit(ev) {
    ev.preventDefault();
    try {
        await axios.post('/api/login', {email, password}); 
        alert("Login successful!");
        sertRedirect(true);
    } catch (error) {
        alert("Error: Login failed" + error);
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <>
      <div className="mt-4 grow flex items-center justify-around">
        <div className="mb-60">
          <h1 className="text-4xl text-center font-bold mb-4">Login</h1>
          <form onSubmit={handleLoginSubmit} className="max-w-md mx-auto">
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

            <button type="submit" className="login">
              Login
            </button>
          </form>

          <div className="text-center py-2">
            <span className="text-center text-gray-500">
              {" "}
              Don't have an account yet ?
            </span>
            <Link to={"/register"} className="font-bold mx-2 underline text">
              Register
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
