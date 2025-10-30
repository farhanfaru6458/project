import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [role, setRole] = useState("admin");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }

    // 🧩 Predefined hardcoded users
    const predefinedUsers = [
      { role: "admin", username: "farhan", password: "farhan123" },
      { role: "manager", username: "nabeel", password: "nabeel123" },
      { role: "labour", username: "shaima", password: "shaima123" },
    ];

    // 🧩 Load registered users (if any) from localStorage
    const registeredUsers =
      JSON.parse(localStorage.getItem("registeredUsers")) || [];

    // 🧩 Combine both
    const allUsers = [...registeredUsers, ...predefinedUsers];

    // 🧩 Validate user credentials
    const validUser = allUsers.find(
      (user) =>
        user.role.toLowerCase() === role.toLowerCase() &&
        user.username === username &&
        user.password === password
    );

    if (!validUser) {
      setError("Invalid credentials or user not registered.");
      return;
    }

    // ✅ Save user info in localStorage
    localStorage.setItem("user", JSON.stringify(validUser));

    // ✅ Notify other components (like Navbar) to update immediately
    window.dispatchEvent(new Event("storage"));

    alert(`✅ Welcome ${validUser.role} ${validUser.username}!`);

    // 🧭 Role-based navigation
    if (validUser.role === "admin") navigate("/admin-dashboard");
    else if (validUser.role === "manager") navigate("/manager-dashboard");
    else if (validUser.role === "labour") navigate("/");
    else navigate("/");
  };

  const handleForgotPassword = () => {
    navigate("/");
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center bg-light"
      style={{ minHeight: "100vh" }}
    >
      <Card className="shadow-lg border-0 p-4" style={{ width: "420px" }}>
        <div className="text-center mb-4">
          <h3 className="fw-bold text-primary mb-1">
            <span style={{ color: "darkblue" }}>Skill</span>Link
          </h3>
          <p className="text-muted mb-0">Sign in to continue</p>
        </div>

        {error && (
          <Alert variant="danger" className="py-2 text-center">
            {error}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Login as</Form.Label>
            <Form.Select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="py-2"
            >
              <option value="admin">Admin</option>
              <option value="manager">Manager</option>
              <option value="labour">Labour</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="py-2"
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="fw-semibold">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="py-2"
            />
          </Form.Group>

          <Button
            variant="warning"
            type="submit"
            className="w-100 fw-bold text-white py-2"
            style={{ backgroundColor: "#f8b400", border: "none" }}
          >
            Login →
          </Button>
        </Form>

        <div className="text-center mt-3">
          <button
            type="button"
            className="btn btn-link text-decoration-none small text-muted"
            onClick={handleForgotPassword}
          >
            Forgot Password?
          </button>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
