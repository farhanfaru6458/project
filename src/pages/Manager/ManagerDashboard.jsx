import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaTachometerAlt,
  FaUsers,
  FaClipboardList,
  FaUserCircle,
  FaEye,
  FaSignOutAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import {  NavLink, useNavigate } from "react-router-dom";
import "./ManagerDashboard.css"; // <-- new CSS file

export default function ManagerDashboard() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [compact, setCompact] = useState(false); // not required to toggle, used by CSS breakpoints
  const [managerName, setManagerName] = useState("Manager");
  const navigate = useNavigate();

  useEffect(() => {
    // Get logged-in user name if present
    try {
      const u = JSON.parse(localStorage.getItem("user"));
      if (u && u.username) {
        setManagerName(u.fullName || u.username || "Manager");
      }
    } catch (e) {}
    // respond to window resize to optionally set compact flag if needed for JS logic (optional)
    const onResize = () => setCompact(window.innerWidth < 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    // optionally keep registeredUsers etc
    navigate("/login");
  };

  return (
    <div className="manager-shell">
      <aside className={`manager-sidebar ${compact ? "compact" : ""}`}>
        <div className="brand">
          <div className="brand-icon">SL</div>
          <div className="brand-text">SkillLink</div>
        </div>

        <nav className="nav-list">
          <SidebarButton
            icon={<FaTachometerAlt />}
            text="Dashboard"
            active={activeSection === "dashboard"}
            onClick={() => setActiveSection("dashboard")}
            compact={compact}
          />
          <SidebarLink
            to="/labours"
            icon={<FaUsers />}
            text="All Labours"
            compact={compact}
          />
          <SidebarButton
            icon={<FaClipboardList />}
            text="Bookings"
            active={activeSection === "bookings"}
            onClick={() => setActiveSection("bookings")}
            compact={compact}
          />
          <SidebarButton
            icon={<FaUserCircle />}
            text="Profile"
            active={activeSection === "profile"}
            onClick={() => setActiveSection("profile")}
            compact={compact}
          />
        </nav>

        <div className="sidebar-footer">
          <div className="manager-info">
            <div className="avatar">{managerName.split(" ").map(n => n[0]).slice(0,2).join("")}</div>
            <div className="manager-meta">
              <div className="name">{managerName}</div>
              <div className="role small text-muted">Manager</div>
            </div>
          </div>

          <button
            className="btn btn-logout"
            onClick={handleLogout}
            title="Logout"
            aria-label="Logout"
          >
            <FaSignOutAlt />
            <span className="btn-text">Logout</span>
          </button>
        </div>
      </aside>

      <main className="manager-main">
        <header className="manager-header">
          <div>
            <h4 className="fw-bold text-primary mb-1">Welcome back, {managerName}!</h4>
            <p className="text-muted mb-0">{new Date().toDateString()}</p>
          </div>
        </header>

        <section className="content">
          {activeSection === "dashboard" && <BookingsTable />}
          {activeSection === "bookings" && <BookingsTable />}
          {activeSection === "profile" && <ManagerProfile name={managerName} />}
        </section>
      </main>
    </div>
  );
}

/* Sidebar clickable button (JS controlled) */
function SidebarButton({ icon, text, active, onClick, compact }) {
  return (
    <button
      onClick={onClick}
      className={`sidebar-item ${active ? "active" : ""}`}
      title={compact ? text : ""}
    >
      <span className="icon">{icon}</span>
      <span className="label">{text}</span>
    </button>
  );
}

/* Sidebar nav link */
function SidebarLink({ to, icon, text, compact }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `sidebar-item ${isActive ? "active" : ""}`}
      title={compact ? text : ""}
    >
      <span className="icon">{icon}</span>
      <span className="label">{text}</span>
    </NavLink>
  );
}

/* Bookings table with animations */
function BookingsTable() {
  const bookings = [
    ["Ahmed Hassan", "Plumbing", "Jan 15, 2024", "Confirmed"],
    ["Sarah Mitchell", "Electrical", "Jan 16, 2024", "Pending"],
    ["Michael Chen", "Carpentry", "Jan 14, 2024", "Completed"],
    ["Emma Rodriguez", "Painting", "Jan 17, 2024", "Confirmed"],
    ["David Thompson", "Welding", "Jan 18, 2024", "Pending"],
    ["Lisa Anderson", "Cleaning", "Jan 13, 2024", "Completed"],
  ];

  return (
    <motion.div
      className="panel"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      <h5 className="fw-bold mb-3">Recent Bookings</h5>
      <div className="table-responsive">
        <table className="table table-borderless align-middle">
          <thead>
            <tr className="text-muted small">
              <th>Labour Name</th>
              <th>Skill</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(([name, skill, date, status], i) => (
              <motion.tr
                key={i}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <td className="fw-semibold text-primary">{name}</td>
                <td>
                  <span className="badge bg-light text-primary">{skill}</span>
                </td>
                <td>{date}</td>
                <td>
                  <span className={`badge ${
                    status === "Confirmed" ? "bg-success-subtle text-success" :
                    status === "Pending" ? "bg-warning-subtle text-warning" : "bg-info-subtle text-info"
                  }`}>{status}</span>
                </td>
                <td><FaEye className="text-secondary" /></td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

/* Manager profile */
function ManagerProfile({ name }) {
  return (
    <motion.div className="panel" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h5 className="fw-bold mb-3">Profile</h5>
      <p className="text-muted">Manage your account information here.</p>
      <div className="mt-3">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> manager@example.com</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
      </div>
    </motion.div>
  );
}
