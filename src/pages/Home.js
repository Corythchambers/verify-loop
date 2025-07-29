import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section
        className="hero"
        data-testid="hero-section"
        aria-labelledby="hero-heading"
      >
        <div className="container">
          <h1 id="hero-heading">
            Professional Web Development & Quality Assurance Services
          </h1>
          <p>
            Verify Loop LLC delivers expert web development and QA consulting
            services to ensure your software meets the highest quality
            standards. From custom web applications to comprehensive testing
            strategies and advanced automation frameworks, we help you build
            confidence in your software.
          </p>
          <div
            className="hero-buttons"
            role="group"
            aria-label="Call to action buttons"
          >
            <Link
              to="/services"
              className="btn"
              data-testid="hero-services-btn"
              aria-label="View our web development and quality assurance services"
            >
              View Our Services
            </Link>
            <Link
              to="/contact"
              className="btn btn-secondary"
              data-testid="hero-contact-btn"
              aria-label="Get a consultation for your web development and QA needs"
            >
              Get Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section
        className="section"
        style={{ backgroundColor: "#f8fafc" }}
        aria-labelledby="services-heading"
      >
        <div className="container">
          <h2 className="section-title" id="services-heading">
            Our Core Services
          </h2>
          <p className="section-subtitle">
            Comprehensive web development and QA solutions tailored to your
            business needs
          </p>
          <div
            className="grid grid-3"
            role="list"
            aria-label="Core services we offer"
          >
            <div
              className="card"
              data-testid="service-web-development"
              role="listitem"
            >
              <div className="card-content">
                <h3 className="card-title">Web Development</h3>
                <p className="card-text">
                  Custom web application development using modern technologies
                  including React, Node.js, and cloud platforms. We build
                  scalable, user-friendly applications that drive business
                  growth and enhance user experience.
                </p>
              </div>
            </div>
            <div
              className="card"
              data-testid="service-qa-testing"
              role="listitem"
            >
              <div className="card-content">
                <h3 className="card-title">Quality Assurance Testing</h3>
                <p className="card-text">
                  Comprehensive manual and automated testing strategies
                  including functional, performance, security, and usability
                  testing to ensure your software meets all requirements and
                  user expectations.
                </p>
              </div>
            </div>
            <div
              className="card"
              data-testid="service-automation"
              role="listitem"
            >
              <div className="card-content">
                <h3 className="card-title">Test Automation</h3>
                <p className="card-text">
                  Design and implementation of robust automation frameworks
                  using industry-leading tools like Selenium, Cypress,
                  Playwright, and API testing tools to accelerate your testing
                  processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section" aria-labelledby="why-choose-us-heading">
        <div className="container">
          <h2 className="section-title" id="why-choose-us-heading">
            Why Choose Verify Loop
          </h2>
          <div className="grid grid-2">
            <div>
              <h3
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "1rem",
                  color: "#2563eb",
                }}
              >
                Full-Stack Expertise
              </h3>
              <p
                style={{
                  marginBottom: "2rem",
                  color: "#666",
                  lineHeight: "1.6",
                }}
              >
                With expertise in both web development and quality assurance, we
                offer end-to-end solutions that ensure your applications are not
                only built correctly but also thoroughly tested. Our full-stack
                approach means better integration and fewer issues down the
                line.
              </p>

              <h3
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "1rem",
                  color: "#2563eb",
                }}
              >
                Tailored Solutions
              </h3>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                We understand that every organization has unique needs. Our
                approach involves thorough analysis of your current processes,
                challenges, and goals to develop customized development and QA
                strategies that align with your business objectives.
              </p>
            </div>
            <div>
              <h3
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "1rem",
                  color: "#2563eb",
                }}
              >
                Modern Technology Stack
              </h3>
              <p
                style={{
                  marginBottom: "2rem",
                  color: "#666",
                  lineHeight: "1.6",
                }}
              >
                We leverage the latest web development and testing tools
                including React, Node.js, TypeScript, Selenium WebDriver,
                Cypress, Playwright, REST Assured, and cloud-based platforms to
                deliver efficient and scalable solutions.
              </p>

              <h3
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "1rem",
                  color: "#2563eb",
                }}
              >
                Results-Driven Approach
              </h3>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                Our focus is on delivering measurable improvements in software
                quality, reduced time-to-market, and increased confidence in
                your releases. We provide detailed reporting and metrics to
                track the success of our initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section
        className="section"
        style={{ backgroundColor: "#f8fafc" }}
        aria-labelledby="testimonials-heading"
      >
        <div className="container">
          <h2 className="section-title" id="testimonials-heading">
            Client Success Stories
          </h2>
          <div
            className="grid grid-2"
            role="list"
            aria-label="Client testimonials"
          >
            <div className="card" data-testid="testimonial-1" role="listitem">
              <div className="card-content">
                <p
                  className="card-text"
                  style={{ fontStyle: "italic", marginBottom: "1rem" }}
                >
                  "Verify Loop built our entire web application from scratch and
                  implemented a comprehensive testing strategy. Their full-stack
                  expertise meant we got a high-quality product that was
                  thoroughly tested and ready for production."
                </p>
                <div
                  style={{ borderTop: "1px solid #eee", paddingTop: "1rem" }}
                >
                  <strong>Sarah Johnson</strong>
                  <br />
                  <span style={{ color: "#666" }}>
                    VP of Engineering, TechCorp Solutions
                  </span>
                </div>
              </div>
            </div>
            <div className="card" data-testid="testimonial-2" role="listitem">
              <div className="card-content">
                <p
                  className="card-text"
                  style={{ fontStyle: "italic", marginBottom: "1rem" }}
                >
                  "The QA consulting services provided by Verify Loop helped us
                  establish a robust quality culture. Their training programs
                  equipped our team with the skills and knowledge needed to
                  maintain high-quality standards independently."
                </p>
                <div
                  style={{ borderTop: "1px solid #eee", paddingTop: "1rem" }}
                >
                  <strong>Michael Chen</strong>
                  <br />
                  <span style={{ color: "#666" }}>CTO, InnovateTech</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="section"
        style={{ backgroundColor: "#2563eb", color: "white" }}
        aria-labelledby="cta-heading"
      >
        <div className="container" style={{ textAlign: "center" }}>
          <h2
            style={{ fontSize: "2.5rem", marginBottom: "1rem" }}
            id="cta-heading"
          >
            Ready to Build Better Software?
          </h2>
          <p
            style={{ fontSize: "1.2rem", marginBottom: "2rem", opacity: "0.9" }}
          >
            Let's discuss how Verify Loop can help you achieve your web
            development and quality assurance goals.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
            role="group"
            aria-label="Contact us options"
          >
            <Link
              to="/contact"
              className="btn"
              style={{ backgroundColor: "white", color: "#2563eb" }}
              data-testid="cta-contact-btn"
              aria-label="Start a consultation with our web development and QA experts"
            >
              Start a Consultation
            </Link>
            <Link
              to="/services"
              className="btn btn-secondary-dark"
              data-testid="cta-services-btn"
              aria-label="Learn more about our web development and QA services"
            >
              Learn More About Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
