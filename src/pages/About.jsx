import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import logoVideo from "../assets/videos/skilllink.mp4";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-light text-dark">
      {/* ===== ABOUT SECTION ===== */}
      <section className="text-center py-5 bg-gradient" data-aos="fade-down">
        <div className="container">
          <h2 className="fw-bold text-primary">About   <span className="ms-2" style={{ color: "darkblue" }}>
          Skill
        </span>Link</h2>
          <p className="text-warning fw-semibold">
            Your trusted platform for local talent and opportunities
          </p>
          <p className="mx-auto col-md-8">
            SkillLink connects talented professionals with businesses looking
            for specialized expertise. We believe in creating meaningful
            connections that drive growth, innovation, and success for both
            individuals and organizations in your local community.
          </p>
        </div>
      </section>

      {/* ===== OUR STORY ===== */}
      <section className="py-5" data-aos="fade-up">
        <div className="container">
          <h3 className="text-center text-primary fw-bold mb-4">From Vision to Reality</h3>
          <div className="row align-items-center">
            {/* Left column */}
            <div className="col-md-6" data-aos="fade-right">
             
              <p>
                SkillLink was founded with a simple yet powerful mission: to
                bridge the gap between talented professionals and businesses
                seeking their expertise. We recognized that traditional hiring
                methods often fail to capture the full potential of local
                talent.
              </p>
              <ul className="list-unstyled">
                <li>📍 <strong>2025:</strong> Founded to revolutionize local talent discovery</li>
                <li>📍 <strong>2025:</strong> Launched first platform and onboarded 1,000+ professionals</li>
                <li>📍 <strong>2025:</strong> Expanded to 10 cities with 50,000+ users</li>
                <li>📍 <strong>2025:</strong> Became leading platform for local talent</li>
              </ul>
            </div>

            {/* Right column: looping video */}
            <div className="col-md-6 text-center" data-aos="fade-left">
              <div
                className="rounded shadow overflow-hidden mx-auto"
                style={{
                  height: "245px",
                  width: "440px",
                  borderRadius: "8px",
                }}
              >
                <video
                  src={logoVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section className="py-5 bg-white">
        <div className="container text-center">
          <h3 className="text-primary fw-bold mb-4" data-aos="zoom-in">
            Meet Our Team
          </h3>
          <div className="row g-4">
            {[
              { name: "Farhan", title: "Member", desc: "Visionary leader with 12 years in tech entrepreneurship and talent management." },
              { name: "Shaima", title: "Member", desc: "Tech innovator passionate about scalable platforms that connect communities." },
              { name: "Nabeel", title: "Member", desc: "Strategic thinker focused on operational excellence and sustainable growth." },
              { name: "Zuniya", title: "Member", desc: "Community builder fostering meaningful connections and relationships." },
              { name: "Hussain", title: "Member", desc: "Creative mind driving innovation and user engagement strategies." },
              { name: "Hiba", title: "Member", desc: "Dedicated problem-solver with expertise in team coordination and outreach." },
              { name: "Jishnu", title: "Member", desc: "Visionary leader focused on driving digital transformation." },
              { name: "Abdullah", title: "Member", desc: "Detail-oriented developer passionate about meaningful experiences." },
              { name: "Fathima", title: "Member", desc: "Empathetic leader fostering collaboration and inclusion in projects." },
              { name: "Shahid", title: "Member", desc: "Empathetic leader fostering collaboration and inclusion in projects." },
            ].map((member, index) => (
              <div className="col-md-3" key={index} data-aos="flip-left">
                <div
                  className="card border-0 shadow-sm h-100"
                  style={{
                    background: "linear-gradient(135deg, #007bff1a, #ffc1071a)",
                  }}
                >
                  <div className="card-body">
                    <div style={{ fontSize: "3rem" }}>👩‍💻</div>
                    <h5 className="fw-bold mt-3">{member.name}</h5>
                    <p className="text-uppercase text-primary small fw-bold">
                      {member.title}
                    </p>
                    <p className="small">{member.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VISION & VALUES ===== */}
      <section className="py-5 bg-light" data-aos="fade-up">
        <div className="container">
          <h3 className="text-center text-primary fw-bold mb-5">
            Our Vision & Values
          </h3>
          <div className="row g-4">
            <div className="col-md-6" data-aos="fade-right">
              <div className="p-4 rounded shadow-sm bg-white">
                <h5 className="fw-bold text-primary">Our Vision</h5>
                <p>
                  We envision a world where talent is easily discovered and
                  opportunities are accessible to all. Our goal is to empower
                  individuals to showcase their skills and help businesses find
                  the right people.
                </p>
                <p className="mb-0">
                  By 2030, we aim to be the most trusted platform for local
                  talent discovery worldwide.
                </p>
              </div>
            </div>

            <div className="col-md-6" data-aos="fade-left">
              <div className="p-4 rounded shadow-sm bg-white">
                <h5 className="fw-bold text-warning">Our Values</h5>
                <ul className="small">
                  <li><strong>Integrity:</strong> We operate with honesty and transparency.</li>
                  <li><strong>Inclusion:</strong> We celebrate diversity and equal opportunity.</li>
                  <li><strong>Innovation:</strong> We continuously adapt to improve our platform.</li>
                  <li><strong>Community:</strong> We prioritize growth of local connections.</li>
                  <li><strong>Excellence:</strong> We aim for the highest standards in everything we do.</li>
                  <li><strong>Empowerment:</strong> We help individuals reach their full potential.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


     
    </div>
  );
};

export default AboutUs;
