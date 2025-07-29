import React from "react";
import "../App.css";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero" aria-labelledby="contact-hero-heading">
        <div className="container">
          <h1 id="contact-hero-heading">Get in Touch</h1>
          <p>
            Ready to build better software? We'd love to discuss how Verify Loop
            can help you achieve your web development and quality assurance
            goals.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section" aria-labelledby="contact-info-heading">
        <div className="container">
          <div className="grid grid-2">
            {/* Primary Contact Information */}
            <div className="card" data-testid="primary-contact-card">
              <div className="card-content">
                <h2 className="card-title" id="contact-info-heading">
                  Contact Information
                </h2>

                <div style={{ marginBottom: "2rem" }}>
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      marginBottom: "1rem",
                      color: "#2563eb",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    Email
                  </h3>
                  <p
                    style={{
                      fontSize: "1.1rem",
                      marginBottom: "0.5rem",
                      color: "#333",
                    }}
                  >
                    <a
                      href="mailto:info@verifyloop.net"
                      style={{
                        color: "#2563eb",
                        textDecoration: "none",
                        fontWeight: "500",
                      }}
                    >
                      info@verifyloop.net
                    </a>
                  </p>
                  <p style={{ color: "#666", fontSize: "0.95rem" }}>
                    We typically respond within 24 hours during business days
                  </p>
                </div>

                <div style={{ marginBottom: "2rem" }}>
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      marginBottom: "1rem",
                      color: "#2563eb",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    Phone
                  </h3>
                  <p
                    style={{
                      fontSize: "1.1rem",
                      marginBottom: "0.5rem",
                      color: "#333",
                    }}
                  ></p>
                  <p style={{ color: "#666", fontSize: "0.95rem" }}>
                    For urgent matters or immediate consultation
                  </p>
                </div>

                <div style={{ marginBottom: "2rem" }}>
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      marginBottom: "1rem",
                      color: "#2563eb",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    Availability
                  </h3>
                  <p style={{ color: "#333", marginBottom: "0.5rem" }}>
                    <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM PST
                  </p>
                  <p style={{ color: "#666", fontSize: "0.95rem" }}>
                    Remote and on-site consulting available nationwide
                  </p>
                </div>

                <div>
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      marginBottom: "1rem",
                      color: "#2563eb",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    Preferred Contact Method
                  </h3>
                  <p style={{ color: "#333", marginBottom: "0.5rem" }}>
                    Email is preferred for detailed inquiries and project
                    discussions
                  </p>
                  <p style={{ color: "#666", fontSize: "0.95rem" }}>
                    Phone calls are welcome for urgent matters or quick
                    questions
                  </p>
                </div>
              </div>
            </div>

            {/* What to Include in Your Message */}
            <div>
              <div className="card" data-testid="contact-guidelines-card">
                <div className="card-content">
                  <h3 className="card-title">When You Contact Us</h3>
                  <p style={{ marginBottom: "1.5rem", color: "#666" }}>
                    To help us provide the most relevant information, please
                    include:
                  </p>

                  <ul
                    style={{
                      color: "#666",
                      lineHeight: "1.8",
                      marginBottom: "2rem",
                    }}
                  >
                    <li>
                      <strong>Your company name and role</strong>
                    </li>
                    <li>
                      <strong>Brief description of your project needs</strong>
                    </li>
                    <li>
                      <strong>Current technology stack and tools</strong>
                    </li>
                    <li>
                      <strong>Project timeline and scope</strong>
                    </li>
                    <li>
                      <strong>Preferred engagement model</strong>{" "}
                      (remote/on-site)
                    </li>
                  </ul>
                </div>
              </div>

              <div className="card" style={{ marginTop: "2rem" }}>
                <div className="card-content">
                  <h3 className="card-title">What to Expect</h3>
                  <ul style={{ color: "#666", lineHeight: "1.8" }}>
                    <li>
                      <strong>Initial response</strong> within 24 hours
                    </li>
                    <li>
                      <strong>Consultation call</strong> scheduled within 48
                      hours
                    </li>
                    <li>
                      <strong>Detailed discussion</strong> of your specific
                      needs
                    </li>
                    <li>
                      <strong>Customized proposal</strong> with recommended
                      approach
                    </li>
                    <li>
                      <strong>Flexible engagement</strong> options to fit your
                      timeline
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section
        className="section"
        style={{ backgroundColor: "#f8fafc" }}
        aria-labelledby="service-areas-heading"
      >
        <div className="container">
          <h2 className="section-title" id="service-areas-heading">
            Ready to Discuss Your Project Needs?
          </h2>
          <div
            className="grid grid-3"
            role="list"
            aria-label="Contact options by service type"
          >
            <div
              className="card"
              data-testid="web-development-cta"
              role="listitem"
            >
              <div className="card-content">
                <h3 className="card-title">Web Development</h3>
                <p className="card-text" style={{ marginBottom: "1.5rem" }}>
                  Looking to build a new web application or improve an existing
                  one? Let's discuss your requirements and technology
                  preferences.
                </p>
                <div style={{ textAlign: "center" }}>
                  <a
                    href="mailto:info@verifyloop.net?subject=Web Development Inquiry"
                    className="btn"
                    data-testid="web-development-email-btn"
                  >
                    Start Project Discussion
                  </a>
                </div>
              </div>
            </div>

            <div className="card" data-testid="qa-assessment-cta">
              <div className="card-content">
                <h3 className="card-title">QA Assessment</h3>
                <p className="card-text" style={{ marginBottom: "1.5rem" }}>
                  Not sure where to start? We can evaluate your current QA
                  processes and provide recommendations for improvement.
                </p>
                <div style={{ textAlign: "center" }}>
                  <a
                    href="mailto:info@verifyloop.net?subject=QA Assessment Inquiry"
                    className="btn"
                    data-testid="qa-assessment-email-btn"
                  >
                    Request Assessment
                  </a>
                </div>
              </div>
            </div>

            <div className="card" data-testid="automation-cta">
              <div className="card-content">
                <h3 className="card-title">Test Automation</h3>
                <p className="card-text" style={{ marginBottom: "1.5rem" }}>
                  Looking to implement or improve your test automation? Let's
                  discuss frameworks and strategies that fit your technology
                  stack.
                </p>
                <div style={{ textAlign: "center" }}>
                  <a
                    href="mailto:info@verifyloop.net?subject=Test Automation Inquiry"
                    className="btn"
                    data-testid="automation-email-btn"
                  >
                    Discuss Automation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="grid grid-2">
            <div className="card" data-testid="faq-engagement">
              <div className="card-content">
                <h3 className="card-title">
                  How do engagements typically work?
                </h3>
                <p className="card-text">
                  We start with a consultation call to understand your needs,
                  followed by a detailed assessment if needed. Most engagements
                  begin with a small pilot project to demonstrate value before
                  scaling to larger initiatives.
                </p>
              </div>
            </div>

            <div className="card" data-testid="faq-remote">
              <div className="card-content">
                <h3 className="card-title">Do you work remotely?</h3>
                <p className="card-text">
                  Yes, we offer both remote and on-site consulting services.
                  Many of our clients prefer remote engagements for flexibility
                  and cost-effectiveness, but we can accommodate on-site work
                  when needed.
                </p>
              </div>
            </div>

            <div className="card" data-testid="faq-timeline">
              <div className="card-content">
                <h3 className="card-title">
                  What are typical project timelines?
                </h3>
                <p className="card-text">
                  Project timelines vary based on scope and complexity. Web
                  development projects typically range from 4-16 weeks, QA
                  assessments take 1-2 weeks, automation implementations range
                  from 6-12 weeks, and ongoing partnerships are structured
                  around your delivery cycles.
                </p>
              </div>
            </div>

            <div className="card" data-testid="faq-cost">
              <div className="card-content">
                <h3 className="card-title">How is pricing structured?</h3>
                <p className="card-text">
                  We offer flexible pricing models including fixed-price
                  projects, time-and-materials, and retainer arrangements.
                  Pricing is based on project scope, timeline, and the level of
                  expertise required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
