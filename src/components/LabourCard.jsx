import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function LabourCard({ labour }) {
  const navigate = useNavigate();

  // Function to handle navigation
  const goToDetails = () => {
    navigate(`/labour/${labour.id}`);
  };

  return (
    <Card
      className="shadow border-0 h-100"
      style={{ cursor: "pointer", transition: "transform 0.2s ease" }}
      onClick={goToDetails} // ✅ Click anywhere on the card
      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
    >
      <Card.Body
        className="text-center bg-light rounded py-4"
        style={{ pointerEvents: "auto" }}
      >
        {/* --- Profile Image --- */}
        <img
          src={labour.image}
          alt={labour.name}
          style={{
            width: "90px",
            height: "90px",
            borderRadius: "50%",
            marginBottom: "10px",
            objectFit: "cover",
          }}
        />

        {/* --- Name --- */}
        <Card.Title className="fw-bold mb-2">{labour.name}</Card.Title>

        {/* --- Skill / Experience / City --- */}
        <Card.Text className="text-muted small mb-2">
          <span
            style={{
              backgroundColor: "#E6F2FF",
              color: "#007BFF",
              padding: "4px 12px",
              borderRadius: "9999px",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            {labour.skill}
          </span>{" "}
          •{" "}
          <span
            style={{
              backgroundColor: "#FFF4D8",
              color: "#E6A500",
              padding: "4px 12px",
              borderRadius: "9999px",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            {labour.experience}
          </span>{" "}
          •{" "}
          <span
            style={{
              backgroundColor: "#F2F2F2",
              color: "#555",
              padding: "4px 12px",
              borderRadius: "9999px",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            {labour.city}
          </span>
        </Card.Text>

        {/* --- Rating --- */}
        <Card.Text className="text-warning mb-3">
          ⭐ {labour.rating} ({labour.reviews} reviews)
        </Card.Text>

        {/* --- Button --- */}
        <Button
          variant="warning"
          className="fw-semibold px-4"
          onClick={(e) => {
            e.stopPropagation(); // ✅ Prevents duplicate navigation
            goToDetails();
          }}
        >
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
}
