import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // ✅ Load user info from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // ✅ Logout functionality
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4 sticky-top animate__animated animate__fadeInDown">
        <Link className="navbar-brand fw-bold text-primary" to="/">
          SkillLink
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/labours">
                Top Labours
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="#categories">
                Categories
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="#top-labours">
                About Us
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>

          {/* ✅ Dynamic right side of navbar */}
          {user ? (
            <div className="d-flex align-items-center">
              <span className="me-3 text-secondary fw-semibold">
                {user.role.charAt(0).toUpperCase() + user.role.slice(1)}{" "}
                ({user.username})
              </span>
              <button
                onClick={handleLogout}
                className="btn btn-outline-danger btn-sm"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn btn-primary px-4">
              Sign In
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}
