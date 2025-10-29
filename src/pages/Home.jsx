import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import {
  FaBolt,
  FaTools,
  FaBrush,
  FaBroom,
  FaHammer,
  FaUserShield,
  FaClock,
  FaHandshake,
} from "react-icons/fa";


export default function Home() {
  return (
    <div className="text-secondary">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
        <Link className="navbar-brand fw-bold text-primary" href="#">
          SkillLink
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item mx-2">
              <Link className="nav-link" href="#">
                Features
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" href="#">
                Categories
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" href="#">
                Top Labours
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" href="#">
                Testimonials
              </Link>
            </li>
          </ul>
          <button className="btn btn-primary px-4">Sign In</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-5 bg-light">
        <div className="container py-5">
          <h1 className="fw-bold text-dark mb-3">
            Connecting Local Talent with <br /> Local Opportunities
          </h1>
          <p className="text-muted mb-4">
            Find skilled labours and book them instantly in your area
          </p>
          <div>
            <button className="btn btn-primary btn-lg mx-2">Find Labour</button>
            <button className="btn btn-warning btn-lg mx-2">
              Register as Labour
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-5 bg-white text-center">
        <div className="container">
          <h2 className="fw-bold mb-5">Why Choose SkillLink?</h2>
          <div className="row g-4">
            <FeatureCard
              icon={<FaUserShield />}
              title="Verified Professionals"
              text="All our labours are thoroughly verified and background checked for your peace of mind and safety."
            />
            <FeatureCard
              icon={<FaClock />}
              title="Quick Booking"
              text="Book skilled professionals in minutes. Our instant booking system connects you faster than ever."
            />
            <FeatureCard
              icon={<FaHandshake />}
              title="Trusted Network"
              text="Join thousands of satisfied customers who trust SkillLink for their daily labour needs."
            />
          </div>
        </div>
      </section>

      {/* Labour Categories */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">Our Labour Categories</h2>
          <div className="row g-4">
            <CategoryCard
              icon={<FaBolt />}
              title="Electrician"
              desc="Professional electrical installation and repair services."
            />
            <CategoryCard
              icon={<FaTools />}
              title="Plumber"
              desc="Expert plumbing solutions for residential and commercial."
            />
            <CategoryCard
              icon={<FaHammer />}
              title="Carpenter"
              desc="Skilled carpentry and woodwork for all your needs."
            />
            <CategoryCard
              icon={<FaBrush />}
              title="Painter"
              desc="Professional painting services with quality finishes."
            />
            <CategoryCard
              icon={<FaBroom />}
              title="Cleaner"
              desc="Thorough and reliable cleaning services."
            />
            <CategoryCard
              icon={<FaHammer />}
              title="Mason"
              desc="Expert masonry and construction work."
            />
          </div>
        </div>
      </section>

      {/* Top Labours */}
      <section className="py-5 bg-white text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">Meet Our Top Labours</h2>
          <div className="row g-4">
            <LabourCard
              name="Rajesh Kumar"
              role="Electrician"
              exp="8 years experience"
              location="Delhi, India"
            />
            <LabourCard
              name="Priya Singh"
              role="Plumber"
              exp="6 years experience"
              location="Mumbai, India"
            />
            <LabourCard
              name="Amit Verma"
              role="Carpenter"
              exp="10 years experience"
              location="Bangalore, India"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">What Our Users Say</h2>
          <div className="row g-4">
            <TestimonialCard
              name="Vickram Patel"
              role="Homeowner"
              text="SkillLink made it so easy to find a reliable electrician. The booking was instant and the service was excellent. Highly recommended!"
            />
            <TestimonialCard
              name="Suresh Reddy"
              role="Professional Plumber"
              text="As a plumber, SkillLink has helped me reach more customers. The platform is user-friendly and the payments are reliable."
            />
            <TestimonialCard
              name="Anjali Gupta"
              role="Business Owner"
              text="I've used SkillLink multiple times for various home repairs. The quality of work is consistent and the labours are always professional."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 bg-primary text-center text-white">
        <div className="container">
          <h2 className="fw-bold mb-3">Ready to get started?</h2>
          <button className="btn btn-warning mx-2">Book Now</button>
          <button className="btn btn-outline-light mx-2">View All Labours</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <p className="mb-1">© 2025 SkillLink. All rights reserved.</p>
        <div>
          <Link href="#" className="text-white-50 mx-2 text-decoration-none">
            About Us
          </Link>
          <Link href="#" className="text-white-50 mx-2 text-decoration-none">
            Privacy Policy
          </Link>
          <Link href="#" className="text-white-50 mx-2 text-decoration-none">
            Contact
          </Link>
          <Link href="#" className="text-white-50 mx-2 text-decoration-none">
            Blog
          </Link>
        </div>
      </footer>
    </div>
  );
}

/* Subcomponents */
function FeatureCard({ icon, title, text }) {
  return (
    <div className="col-md-4">
      <div className="card border-0 shadow-sm h-100 p-4">
        <div className="display-5 text-primary mb-3">{icon}</div>
        <h5 className="fw-semibold mb-2">{title}</h5>
        <p className="text-muted small">{text}</p>
      </div>
    </div>
  );
}

function CategoryCard({ icon, title, desc }) {
  return (
    <div className="col-md-4">
      <div className="card border-0 shadow-sm h-100 p-4">
        <div className="display-6 text-primary mb-2">{icon}</div>
        <h6 className="fw-semibold">{title}</h6>
        <p className="small text-muted">{desc}</p>
      </div>
    </div>
  );
}

function LabourCard({ name, role, exp, location }) {
  return (
    <div className="col-md-4">
      <div className="card border-0 shadow-sm h-100 p-4">
        <div className="bg-light rounded-circle mx-auto mb-3" style={{ width: 80, height: 80 }}></div>
        <h6 className="fw-semibold">{name}</h6>
        <p className="text-primary mb-1 small">{role}</p>
        <p className="text-muted small mb-0">{exp}</p>
        <p className="text-muted small">{location}</p>
      </div>
    </div>
  );
}

function TestimonialCard({ name, role, text }) {
  return (
    <div className="col-md-4">
      <div className="card border-0 shadow-sm h-100 p-4">
        <p className="text-muted small mb-3">“{text}”</p>
        <h6 className="fw-semibold mb-0">{name}</h6>
        <p className="text-primary small">{role}</p>
      </div>
    </div>
  );
}
