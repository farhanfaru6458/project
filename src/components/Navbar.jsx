import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import Logo from "./Logo";
import "../css/Navbar.css";

export default function Navbar() {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsNavbarOpen(false); // ✅ Close mobile navbar when page changes
  }, [location.pathname]);

  // ✅ Listen for login/logout updates
  useEffect(() => {
    const handleStorageChange = () => {
      const updatedUser = localStorage.getItem("user");
      setUser(updatedUser ? JSON.parse(updatedUser) : null);
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // ✅ Refresh user info when navigating
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    setUser(storedUser ? JSON.parse(storedUser) : null);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  const userRole = user?.role?.toLowerCase();

  // ✅ Toggle collapse in mobile
  const toggleNavbar = () => setIsNavbarOpen(!isNavbarOpen);

  // ✅ Close navbar after clicking a link (on mobile)
  const handleNavLinkClick = () => setIsNavbarOpen(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4 sticky-top animate__animated animate__fadeInDown">
      {/* Logo + Brand */}
      <NavLink
        className="navbar-brand fw-bold text-primary d-flex align-items-center"
        to="/"
        onClick={handleNavLinkClick}
      >
        <Logo size={50} />
        <span className="ms-2" style={{ color: "darkblue" }}>
          Skill
        </span>
        <span>Link</span>
      </NavLink>

      {/* Navbar toggler for mobile */}
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNavbar}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Center nav links */}
      <div className={`collapse navbar-collapse ${isNavbarOpen ? "show" : ""}`} id="navbarNav">
        <ul className="navbar-nav mx-auto">
          {/* ✅ Conditional Home/Dashboard */}
          <li className="nav-item mx-2">
            {user ? (
              userRole === "admin" ? (
                <NavLink className="nav-link" to="/admin-dashboard" onClick={handleNavLinkClick}>
                  Admin Dashboard
                </NavLink>
              ) : userRole === "manager" ? (
                <NavLink className="nav-link" to="/manager-dashboard" onClick={handleNavLinkClick}>
                  Manager Dashboard
                </NavLink>
              ) : (
                <NavLink className="nav-link" to="/" end onClick={handleNavLinkClick}>
                  Home
                </NavLink>
              )
            ) : (
              <NavLink className="nav-link" to="/" end onClick={handleNavLinkClick}>
                Home
              </NavLink>
            )}
          </li>

          <li className="nav-item mx-2">
            <NavLink className="nav-link" to="/labours" onClick={handleNavLinkClick}>
              Labours
            </NavLink>
          </li>

          <li className="nav-item mx-2">
            <NavLink className="nav-link" to="/about" onClick={handleNavLinkClick}>
              About Us
            </NavLink>
          </li>

          <li className="nav-item mx-2">
            <NavLink className="nav-link" to="/contact" onClick={handleNavLinkClick}>
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/* Right side: user info or login */}
        {user ? (
          <div
            className="d-flex align-items-center bg-light border rounded-pill px-3 py-1 shadow-sm mt-2 mt-lg-0"
            style={{ cursor: "default", minWidth: "fit-content" }}
          >
            {/* User Icon */}
            <FaUserCircle size={28} className="text-primary me-2" />

            {/* Name & Role */}
            <div className="d-flex flex-column lh-sm me-3">
              <span className="fw-semibold text-dark">
                {user.username || user.fullName || "User"}
              </span>
              <small className="text-muted">
                {user.role
                  ? user.role.charAt(0).toUpperCase() + user.role.slice(1)
                  : "Member"}
              </small>
            </div>

            {/* Logout button */}
            <button
              onClick={handleLogout}
              className="btn btn-sm btn-outline-danger d-flex align-items-center gap-1"
            >
              <FaSignOutAlt size={14} />
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="btn btn-primary px-4" onClick={handleNavLinkClick}>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}
