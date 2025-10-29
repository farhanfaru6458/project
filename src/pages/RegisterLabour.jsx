import React, { useState, useEffect } from "react";
import {
  Form,
  Button,
  Card,
  Row,
  Col,
  Image,
  ProgressBar,
  FloatingLabel,
} from "react-bootstrap";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import { useNavigate } from "react-router-dom";
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

  const handleNext = () => {
  if (!formData.role) {
    alert("⚠️ Please select a role first!");
    return;
  }

  if (formData.role === "Manager" && step === 1) {
    setStep(3);
  } else if (step < 3) {
    setStep(step + 1);
  }
};


  const handleBack = () => {
    if (formData.role === "Manager" && step === 3) setStep(1);
    else if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`✅ ${formData.role} Registered Successfully!`);
    console.log("Submitted Data:", formData);
    navigate("/"); // ✅ Go to home page
  };

  const getProgress = () => (step === 1 ? 33 : step === 2 ? 66 : 100);

  return (
    <div
      className="d-flex align-items-center justify-content-center bg-light"
      style={{ minHeight: "100vh" }}
    >
      <Card
        className="p-4 shadow-lg border-0"
        style={{ width: "650px", borderRadius: "16px" }}
      >
        <h3 className="text-center text-primary fw-bold mb-2">
          Role-Based Registration
        </h3>
        <p className="text-center text-muted mb-4">
          Join SkillLink — connect managers with skilled labours
        </p>

        <ProgressBar
          now={getProgress()}
          label={`${getProgress()}%`}
          variant="info"
          className="mb-4"
        />

        <Form onSubmit={handleSubmit}>
          {/* STEP 1: Common Info */}
          {step === 1 && (
            <>
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

              {/* 🌍 Location Map Picker */}
              <Form.Group className="mb-3">
                <Form.Label>Select Your Location on Map *</Form.Label>
                <MapContainer
                  center={[9.9312, 76.2673]} // Kochi default
                  zoom={10}
                  style={{
                    height: "300px",
                    width: "100%",
                    borderRadius: "12px",
                    border: "2px solid #e3e3e3",
                  }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; OpenStreetMap contributors'
                  />
                  <LocationMarker formData={formData} setFormData={setFormData} />
                </MapContainer>

                {formData.lat && (
                  <small className="text-muted">
                    📍 Selected: {formData.lat.toFixed(4)}, {formData.lng.toFixed(4)}
                    <br />
                    {formData.location && `📫 ${formData.location}`}
                  </small>
                )}
              </Form.Group>
            </>
          )}

          {/* STEP 2: Labour Info */}
          {step === 2 && formData.role === "Labour" && (
            <>
              <FloatingField
                label="Skill Category *"
                type="select"
                name="skillCategory"
                value={formData.skillCategory}
                onChange={handleChange}
                options={[
                  "Plumbing",
                  "Electrical",
                  "Carpentry",
                  "Painting",
                  "Cleaning",
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
                <div className="mt-3">
                  <h6 className="text-muted">Work Samples Preview:</h6>
                  <Row>
                    {previewImages.map((src, index) => (
                      <Col xs={4} md={3} key={index} className="mb-3">
                        <Image
                          src={src}
                          thumbnail
                          alt={`preview-${index}`}
                          style={{
                            width: "100%",
                            height: "90px",
                            objectFit: "cover",
                            borderRadius: "8px",
                          }}
                        />
                      </Col>
                    ))}
                  </Row>
                </div>
              )}
            </>
          )}

          {/* STEP 3: Profile Info */}
          {step === 3 && (
  <>
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
  </>
)}


          {/* Navigation Buttons */}
          <div className="d-flex justify-content-between mt-4">
            {step > 1 && (
              <Button variant="secondary" onClick={handleBack}>
                ← Back
              </Button>
            )}
            {step < 3 ? (
              <Button variant="warning" onClick={handleNext}>
                Next →
              </Button>
            ) : (
              <Button type="submit" variant="success">
                Submit
              </Button>
            )}
          </div>
        </Form>
      </Card>
    </div>
  );
};

// 🧭 Map Marker with reverse geocoding
const LocationMarker = ({ formData, setFormData }) => {
  const [position, setPosition] = useState(null);
  const [address, setAddress] = useState("");

  useMapEvents({
    async click(e) {
      const { lat, lng } = e.latlng;
      setPosition([lat, lng]);
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`
        );
        const data = await res.json();
        setAddress(data.display_name);
        setFormData({ ...formData, lat, lng, location: data.display_name });
      } catch (err) {
        console.error("Address fetch failed:", err);
      }
    },
  });

  return position ? (
    <>
      <Marker position={position}></Marker>
      <div className="mt-2 small text-muted">
        📍 {address || "Fetching location..."}
      </div>
    </>
  ) : null;
};

// 💬 Floating field
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
        <Form.Control type={type} name={name} value={value} onChange={onChange} />
      </FloatingLabel>
    )}
  </Form.Group>
);

export default RoleBasedRegister;
