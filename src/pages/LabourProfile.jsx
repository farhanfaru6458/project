import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";

export default function LabourProfile() {
  const [labour, setLabour] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("registeredUser");
    if (data) {
      setLabour(JSON.parse(data));
    }
  }, []);

  if (!labour) {
    return (
      <div className="text-center py-5">
        <h4>No profile data found 😕</h4>
        <p>Please register as a Labour first.</p>
      </div>
    );
  }

  return (
    <div className="bg-light">
      {/* Header Section */}
      <section className="bg-primary text-white text-center py-5 animate__animated animate__fadeInDown">
        {labour.image ? (
          <img
            src={URL.createObjectURL(labour.image)}
            alt="Profile"
            className="rounded-circle mb-3"
            style={{ width: "120px", height: "120px", border: "4px solid #fff", objectFit: "cover" }}
          />
        ) : (
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Default"
            className="rounded-circle mb-3"
            style={{ width: "120px", height: "120px", border: "4px solid #fff" }}
          />
        )}

        <h3 className="fw-bold mb-1">{labour.fullName}</h3>
        <span className="badge bg-warning text-dark me-2">{labour.skillCategory || "Not Specified"}</span>
        <span className="badge bg-success">Verified</span>

        <div className="d-flex justify-content-center align-items-center mt-3 flex-wrap">
          {labour.experience && (
            <p className="mb-0 mx-3">
              <i className="bi bi-briefcase-fill me-1"></i> {labour.experience} Years Experience
            </p>
          )}
          {labour.location && (
            <p className="mb-0 mx-3">
              <i className="bi bi-geo-alt-fill me-1"></i> {labour.location}
            </p>
          )}
        </div>
      </section>

      {/* About Section */}
      <section className="container my-5 animate__animated animate__fadeInUp">
        <div className="card shadow-sm border-0 p-4">
          <h5 className="text-primary mb-3">
            <i className="bi bi-person-lines-fill me-2"></i>About
          </h5>
          <p>{labour.about || "No description provided."}</p>
        </div>
      </section>

      {/* Work Samples */}
      {labour.showcaseImages && labour.showcaseImages.length > 0 && (
        <section className="container my-5 animate__animated animate__fadeInUp">
          <h5 className="text-primary mb-3">
            <i className="bi bi-images me-2"></i>My Work Portfolio
          </h5>
          <div className="row g-3">
            {labour.showcaseImages.map((img, index) => (
              <div className="col-md-4" key={index}>
                <div className="card border-0 shadow-sm h-100">
                  <img
                    src={URL.createObjectURL(img)}
                    alt={`Work-${index}`}
                    className="rounded"
                    style={{ width: "100%", height: "200px", objectFit: "cover" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="text-center py-4 text-muted">
        © 2025 SkillLink. All rights reserved.
      </footer>
    </div>
  );
}
