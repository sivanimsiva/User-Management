import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const handleLogin = () => {

    if (role === "admin") {
      navigate("/admin");
    }
    else if (role === "service") {
      navigate("/service");
    }
    else {
      alert("Please select a role");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Login
        </h2>
        <select
          className="border w-full p-2 rounded mb-5"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">Select Role</option>
          <option value="admin">
            Admin
          </option>
          <option value="service">
            Service User
          </option>
        </select>
        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white w-full p-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;