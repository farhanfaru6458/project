import React, { useState, useEffect } from "react";
import {
  Form,
  Button,
  Card,
  Row,
  Col,
  ProgressBar,
  FloatingLabel,
} from "react-bootstrap";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";

// 🗺️ Fix default marker issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const RoleBasedRegister = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    role: "",
    fullName: "",
    email: "",
    phone: "",
    location: "",
    lat: null,
    lng: null,
    skillCategory: "",
    experience: "",
    about: "",
    showcaseImages: [],
    image: null,
  });

  const [previewImages, setPreviewImages] = useState([]);

  // 🧹 Clean preview URLs
  useEffect(() => {
    return () => previewImages.forEach((url) => URL.revokeObjectURL(url));
  }, [previewImages]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "showcaseImages" && files) {
      const uploadedFiles = Array.from(files);
      setFormData({ ...formData, showcaseImages: uploadedFiles });
      const previews = uploadedFiles.map((file) => URL.createObjectURL(file));
      setPreviewImages(previews);
    } else {
      setFormData({ ...formData, [name]: files ? files[0] : value });
    }
  };

  // Step Navigation
  const handleNext = () => {
    if (!formData.role) {
      alert("⚠️ Please select a role first!");
      return;
    }

    if (formData.role === "Manager") {
      if (step === 1) setStep(3); // Skip Step 2
    } else if (formData.role === "Labour") {
      if (step < 3) setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (formData.role === "Manager" && step === 3) setStep(1);
    else if (step > 1) setStep(step - 1);
  };

  // Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];

    const newUser = {
      ...formData,
      username: formData.email.split("@")[0],
      role: formData.role.toLowerCase(),
      password: "12345",
    };

    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem("registeredUsers", JSON.stringify(updatedUsers));
    localStorage.setItem("user", JSON.stringify(newUser));
    window.dispatchEvent(new Event("storage"));

    alert(`${formData.role} Registered Successfully!`);

    if (formData.role === "Labour") navigate("/");
    else navigate("/manager-dashboard");
  };

  const getProgress = () => (step === 1 ? 33 : step === 2 ? 66 : 100);

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -40, transition: { duration: 0.4 } },
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center mt-5"
      style={{ minHeight: "100vh" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Card
          className="p-4 shadow-lg border-0"
          style={{
            width: "650px",
            borderRadius: "18px",
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(10px)",
          }}
        >
          <motion.h3
            className="text-center fw-bold mb-2"
            style={{ color: "#0072ff" }}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Role-Based Registration
          </motion.h3>

          <motion.p
            className="text-center text-muted mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Join SkillLink — connect managers with skilled labours
          </motion.p>

          <ProgressBar
            now={getProgress()}
            label={`${getProgress()}%`}
            variant="info"
            className="mb-4"
            style={{ height: "12px", borderRadius: "6px" }}
          />

          <Form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <FloatingField
                    label="Select Role *"
                    type="select"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    options={["Labour", "Manager"]}
                  />
                  <FloatingField
                    label="Full Name *"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  <FloatingField
                    label="Email *"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <FloatingField
                    label="Phone *"
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />

                  {/* 🗺️ Map Picker */}
                  <Form.Group className="mb-3">
                    <Form.Label>Select Your Location *</Form.Label>
                    <div
                      style={{
                        borderRadius: "14px",
                        overflow: "hidden",
                        boxShadow: "0 0 10px rgba(0,0,0,0.15)",
                        border: "2px solid #e3e3e3",
                      }}
                    >
                      <MapContainer
                        center={[9.9312, 76.2673]}
                        zoom={10}
                        style={{ height: "300px", width: "100%" }}
                      >
                        <TileLayer
                          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                          attribution="&copy; OpenStreetMap contributors"
                        />
                        <LocationMarker
                          formData={formData}
                          setFormData={setFormData}
                        />
                      </MapContainer>
                    </div>

                    {/* 🧭 Show selected location */}
                    {formData.location && (
                      <div
                        className="mt-3 p-3 bg-light rounded border"
                        style={{
                          fontSize: "0.95rem",
                          boxShadow: "inset 0 0 6px rgba(0,0,0,0.1)",
                        }}
                      >
                        📍 <strong>Selected Location:</strong>
                        <div className="text-muted small mt-1">
                          {formData.location}
                        </div>
                      </div>
                    )}
                  </Form.Group>
                </motion.div>
              )}

              {step === 2 && formData.role === "Labour" && (
                <motion.div
                  key="step2"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <FloatingField
                    label="Skill Category *"
                    type="select"
                    name="skillCategory"
                    value={formData.skillCategory}
                    onChange={handleChange}
                    options={[
                      "Electrician",
                      "Plumber",
                      "Carpenter",
                      "Painter",
                      "Mason",
                      "Cleaner",
                      "Driver",
                      "Tailor",
                      "Gardener",
                      "Event Manager",
                      "Caterer",
                      "DJ & Sound Technician",
                      "Decorator",
                      "Photographer",
                      "Makeup Artist",
                      "Light & Stage Technician",
                      "Event Host (MC)",
                      "Videographer",
                      "Cake Designer",
                      "Sound Engineer",
                      "Event Coordinator",
                      "Water Supplier",
                    ]}
                  />
                  <FloatingField
                    label="Experience (in years)"
                    type="number"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                  />
                  <Form.Group className="mb-3">
                    <Form.Label>Upload Work Images</Form.Label>
                    <Form.Control
                      type="file"
                      name="showcaseImages"
                      multiple
                      accept="image/*"
                      onChange={handleChange}
                    />
                  </Form.Group>

                  {previewImages.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <h6 className="text-muted mb-2">Work Samples:</h6>
                      <Row>
                        {previewImages.map((src, index) => (
                          <Col xs={4} md={3} key={index} className="mb-3">
                            <motion.img
                              src={src}
                              alt={`preview-${index}`}
                              className="rounded shadow-sm"
                              style={{
                                width: "100%",
                                height: "90px",
                                objectFit: "cover",
                              }}
                              whileHover={{ scale: 1.05 }}
                            />
                          </Col>
                        ))}
                      </Row>
                    </motion.div>
                  )}
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <Form.Group className="mb-3">
                    <Form.Label>Profile Photo</Form.Label>
                    <Form.Control
                      type="file"
                      name="image"
                      accept="image/*"
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <FloatingField
                    label="About You"
                    type="textarea"
                    name="about"
                    value={formData.about}
                    onChange={handleChange}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="d-flex justify-content-between mt-4">
              {step > 1 && (
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button type="button" variant="secondary" onClick={handleBack}>
                    ← Back
                  </Button>
                </motion.div>
              )}

              {step < 3 ? (
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button type="button" variant="info" onClick={handleNext}>
                    Next →
                  </Button>
                </motion.div>
              ) : (
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button type="submit" variant="success">
                    Submit
                  </Button>
                </motion.div>
              )}
            </div>
          </Form>
        </Card>
      </motion.div>
    </div>
  );
};

// 🧭 Map Marker Component
const LocationMarker = ({ formData, setFormData }) => {
  const [position, setPosition] = useState(null);
  useMapEvents({
    async click(e) {
      const { lat, lng } = e.latlng;
      setPosition([lat, lng]);
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`
        );
        const data = await res.json();
        setFormData({ ...formData, lat, lng, location: data.display_name });
      } catch (err) {
        console.error("Address fetch failed:", err);
      }
    },
  });

  return position ? <Marker position={position}></Marker> : null;
};

// 💬 Floating Field Component
const FloatingField = ({ label, type, name, value, onChange, options = [] }) => (
  <Form.Group className="mb-3">
    {type === "select" ? (
      <FloatingLabel controlId={name} label={label}>
        <Form.Select name={name} value={value} onChange={onChange}>
          <option value="">-- Select --</option>
          {options.map((opt, i) => (
            <option key={i} value={opt}>
              {opt}
            </option>
          ))}
        </Form.Select>
      </FloatingLabel>
    ) : type === "textarea" ? (
      <FloatingLabel controlId={name} label={label}>
        <Form.Control
          as="textarea"
          rows={3}
          name={name}
          value={value}
          onChange={onChange}
        />
      </FloatingLabel>
    ) : (
      <FloatingLabel controlId={name} label={label}>
        <Form.Control
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      </FloatingLabel>
    )}
  </Form.Group>
);

export default RoleBasedRegister;
