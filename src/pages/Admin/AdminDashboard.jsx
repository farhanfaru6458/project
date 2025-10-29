import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useLocation } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const username = location.state?.username || "Admin";

  const cards = [
    { title: "Total Labours", count: 58, color: "#007bff", icon: "🧑‍🔧" },
    { title: "Total Managers", count: 12, color: "#28a745", icon: "👷‍♂️" },
    { title: "Categories", count: 9, color: "#f8b400", icon: "📋" },
  ];

  return (
    <div className="container py-5">
      <h2 className="fw-bold text-center text-primary mb-1">
        Admin Dashboard
      </h2>
      <p className="text-center text-muted mb-4">
        Welcome, <strong>{username}</strong> 👋
      </p>

      {/* Summary Cards */}
      <div className="row g-4 mb-5">
        {cards.map((card, i) => (
          <div className="col-12 col-md-4" key={i}>
            <div
              className="card text-white shadow-lg border-0"
              style={{
                backgroundColor: card.color,
                borderRadius: "12px",
              }}
            >
              <div className="card-body text-center">
                <div style={{ fontSize: "40px" }}>{card.icon}</div>
                <h5 className="mt-3">{card.title}</h5>
                <h3 className="fw-bold">{card.count}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="card shadow border-0 p-4">
        <h5 className="fw-bold text-secondary mb-3">Quick Actions</h5>
        <div className="row g-3">
          <div className="col-12 col-md-4">
            <button
              className="btn w-100 text-white fw-semibold py-2"
              style={{ backgroundColor: "#f8b400" }}
              onClick={() => navigate("/manage-categories")}
            >
              📋 Manage Categories
            </button>
          </div>

          <div className="col-12 col-md-4">
            <button
              className="btn w-100 btn-primary fw-semibold py-2"
              onClick={() => navigate("/labour-list")}
            >
              🧑‍🔧 View Labours
            </button>
          </div>

          <div className="col-12 col-md-4">
            <button
              className="btn w-100 btn-success fw-semibold py-2"
              onClick={() => navigate("/manager-list")}
            >
              👷‍♂️ View Managers
            </button>
          </div>
        </div>
      </div>

      <footer className="text-center mt-5 text-muted small">
        © {new Date().getFullYear()} SkillLink Admin Panel
      </footer>
    </div>
  );
}
