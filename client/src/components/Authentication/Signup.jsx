import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    console.log({ name, email, password });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-semibold text-text">Sign Up</h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-md border border-gray-300 p-3 text-text focus:border-black focus:outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-md border border-gray-300 p-3 text-text focus:border-black focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-md border border-gray-300 p-3 text-text focus:border-black focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="space-y-2">
                <label className="text-text font-medium">Select Role:</label>
                <select
                    className="w-full rounded-md border border-gray-300 bg-white p-3 text-text focus:border-black focus:outline-none"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                >
                    <option value="" disabled>Select a role</option>
                    <option value="manager">Manager</option>
                    <option value="driver">Driver</option>
                </select>
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-black p-3 text-white transition hover:opacity-90"
          >
           <Link to="/managerhome" className="text-white block w-full text-center">
                Login
              </Link>
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account? <a href="/login" className="text-black underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
