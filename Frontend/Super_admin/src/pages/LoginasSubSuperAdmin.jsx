import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../slices/userSlice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SubSuperAdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/sub-super-admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();
      console.log("Login Result:", result);
      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "Redirecting to dashboard...",
          confirmButtonColor: "#007bff",
          background: "#1b1e2b",
          color: "#ffffff",
          iconColor: "#28a745",
        }).then(() => {
          localStorage.setItem("adminToken", result.token);
          dispatch(loginSuccess({ token: result.token, email, permissions: result.user.permissions }));
          navigate("/superadmin");
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: result.error || "Invalid credentials!",
          confirmButtonColor: "#dc3545",
          background: "#1b1e2b",
          color: "#ffffff",
          iconColor: "#dc3545",
        });
      }
    } catch (error) {
      console.error("Login Error:", error);
      Swal.fire({
        icon: "error",
        title: "Network Error",
        text: "Check your connection and try again.",
        confirmButtonColor: "#dc3545",
        background: "#1b1e2b",
        color: "#ffffff",
        iconColor: "#dc3545",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-white mb-6">Sub Super Admin Login</h2>
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-gray-300 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <i
                className={`fa-solid ${
                  showPassword ? "fa-eye-slash" : "fa-eye"
                } text-gray-400 cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2`}
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <a href="/forget-password" className="text-sm text-blue-400 hover:underline">
            Forget password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default SubSuperAdminLogin;
