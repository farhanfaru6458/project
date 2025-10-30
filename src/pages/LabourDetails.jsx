import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowLeft, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { allLabours } from "../data/labours";

export default function LabourDetails() {
  const { id } = useParams();
  const labour = allLabours.find((l) => l.id === parseInt(id));

  const user = JSON.parse(localStorage.getItem("user"));
  const userRole = user?.role || "guest";

  const [isBooked, setIsBooked] = useState(() => {
    const storedStatus = localStorage.getItem(`labour_${id}_booked`);
    return storedStatus === "true";
  });

  if (!labour) {
    return (
      <Container className="text-center my-5">
        <motion.h4 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Labour not found
        </motion.h4>
        <Link to="/" className="btn btn-warning mt-3">
          Go Back
        </Link>
      </Container>
    );
  }

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
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link to="/labours" className="btn btn-outline-secondary mb-4">
          <FaArrowLeft className="me-2" />
          Back to Labour List
        </Link>
      </motion.div>

      {/* Animated Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Card className="shadow-lg border-0 overflow-hidden rounded-4">
          <Row className="g-0">
            {/* --- Left Section: Image --- */}
            <Col
              md={5}
              className="bg-light d-flex align-items-center justify-content-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <motion.img
                  whileHover={{ scale: 1.05, rotate: 2 }}
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
                <motion.h3
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="fw-bold"
                >
                  {labour.name}
                </motion.h3>
                <p className="text-muted">{labour.skill}</p>
                <div className="text-warning mb-2 fs-5">
                  <FaStar /> {labour.rating}{" "}
                  <span className="text-secondary fs-6">
                    ({labour.reviews} reviews)
                  </span>
                </div>

                <Badge bg="info" text="dark" className="me-2">
                  {labour.city}
                </Badge>
                <Badge bg="warning" text="dark">
                  {labour.experience}
                </Badge>
              </motion.div>
            </Col>

            {/* --- Right Section: Info --- */}
            <Col md={7} className="p-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h4 className="fw-bold mb-3">About</h4>
                <p className="text-muted" style={{ lineHeight: 1.7 }}>
                  {labour.about ||
                    "This labour is highly skilled and experienced in their field."}
                </p>

                <hr />

                <h5 className="fw-bold mb-3">Contact Information</h5>
                <ul className="list-unstyled">
                  <motion.li
                    className="mb-2"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <FaMapMarkerAlt className="text-danger me-2" />
                    <strong>Location:</strong> {labour.city}
                  </motion.li>
                  <motion.li
                    className="mb-2"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <FaEnvelope className="text-secondary me-2" />
                    <strong>Email:</strong> {labour.email}
                  </motion.li>
                  <motion.li
                    className="mb-2"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <FaPhone className="text-success me-2" />
                    <strong>Phone:</strong> {labour.phone}
                  </motion.li>
                  <motion.li
                    className="mb-2"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <strong>Experience:</strong> {labour.experience}
                  </motion.li>
                </ul>

                <div className="mt-4">
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Button
                      onClick={handleBookNow}
                      variant={isBooked ? "success" : "warning"}
                      disabled={isBooked}
                      className="fw-semibold px-4 py-2"
                      style={{ borderRadius: "9999px" }}
                    >
                      {isBooked ? "✅ Booked" : "Book Now"}
                    </Button>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="mt-3 text-muted small"
                >
                  Logged in as: <strong>{userRole}</strong>
                </motion.div>
              </motion.div>
            </Col>
          </Row>
        </Card>
      </motion.div>
    </Container>
  );
}
