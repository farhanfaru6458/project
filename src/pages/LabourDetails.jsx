import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowLeft, FaStar } from "react-icons/fa";
import { allLabours } from "../data/labours";

export default function LabourDetails() {
  const { id } = useParams();
  const labour = allLabours.find((l) => l.id === parseInt(id));

  // 🧩 Simulate logged-in user (replace with your actual auth system)
  const user = JSON.parse(localStorage.getItem("user")); 
  const userRole = user?.role || "guest"; // e.g., 'manager', 'admin', 'labour', 'guest'

  // 🔸 Load initial booking state
  const [isBooked, setIsBooked] = useState(() => {
    const storedStatus = localStorage.getItem(`labour_${id}_booked`);
    return storedStatus === "true";
  });

  if (!labour) {
    return (
      <Container className="text-center my-5">
        <h4>Labour not found</h4>
        <Link to="/" className="btn btn-warning mt-3">
          Go Back
        </Link>
      </Container>
    );
  }

  // 🟢 Handle booking click
  const handleBookNow = () => {
    if (userRole !== "manager") {
      alert("❌ Only managers can book labours. Please log in as a manager.");
      return;
    }

    if (!isBooked) {
      alert(`✅ You have successfully booked ${labour.name}!`);
      setIsBooked(true);
      localStorage.setItem(`labour_${id}_booked`, "true");
    } else {
      alert(`ℹ️ ${labour.name} is already booked.`);
    }
  };

  return (
    <Container className="my-5">
      <Link to="/" className="btn btn-outline-secondary mb-4">
        <FaArrowLeft className="me-2" />
        Back to Labour List
      </Link>

      <Card className="shadow-lg border-0 overflow-hidden rounded-4">
        <Row className="g-0">
          {/* --- Left Section: Image --- */}
          <Col md={5} className="bg-light d-flex align-items-center justify-content-center p-4">
            <div className="text-center">
              <img
                src={labour.image}
                alt={labour.name}
                className="rounded-circle shadow-sm mb-3"
                style={{
                  width: "180px",
                  height: "180px",
                  objectFit: "cover",
                  border: "5px solid #fff",
                }}
              />
              <h3 className="fw-bold">{labour.name}</h3>
              <p className="text-muted">{labour.skill}</p>
              <div className="text-warning mb-2 fs-5">
                <FaStar /> {labour.rating}{" "}
                <span className="text-secondary fs-6">({labour.reviews} reviews)</span>
              </div>

              <Badge bg="info" text="dark" className="me-2">
                {labour.city}
              </Badge>
              <Badge bg="warning" text="dark">
                {labour.experience}
              </Badge>
            </div>
          </Col>

          {/* --- Right Section: Info --- */}
          <Col md={7} className="p-5">
            <h4 className="fw-bold mb-3">About</h4>
            <p className="text-muted" style={{ lineHeight: 1.7 }}>
              {labour.about || "This labour is highly skilled and experienced in their field."}
            </p>

            <hr />

            <h5 className="fw-bold mb-3">Contact Information</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <FaMapMarkerAlt className="text-danger me-2" />
                <strong>Location:</strong> {labour.city}
              </li>
              <li className="mb-2">
                <FaEnvelope className="text-secondary me-2" />
                <strong>Email:</strong> {labour.email}
              </li>
              <li className="mb-2">
                <FaPhone className="text-success me-2" />
                <strong>Phone:</strong> {labour.phone}
              </li>
              <li className="mb-2">
                <strong>Experience:</strong> {labour.experience}
              </li>
            </ul>

            <div className="mt-4">
              <Button
                onClick={handleBookNow}
                variant={isBooked ? "success" : "warning"}
                disabled={isBooked}
                className="fw-semibold px-4 py-2"
                style={{ borderRadius: "9999px" }}
              >
                {isBooked ? "✅ Booked" : "Book Now"}
              </Button>
            </div>

            {/* --- Role Info --- */}
            <div className="mt-3 text-muted small">
              Logged in as: <strong>{userRole}</strong>
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}
