import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Services = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Quality Assurance & Automation Services</h1>
          <p>
            Comprehensive QA solutions designed to improve your software
            quality, accelerate delivery, and build confidence in your products.
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Core Services</h2>
          <div className="grid grid-2">
            <div className="card" data-testid="service-manual-testing">
              <div className="card-content">
                <h3 className="card-title">Manual Testing & QA Strategy</h3>
                <p className="card-text" style={{ marginBottom: "1.5rem" }}>
                  Comprehensive manual testing services combined with strategic
                  QA planning to ensure complete coverage and optimal quality
                  outcomes.
                </p>
                <ul style={{ color: "#666", lineHeight: "1.8" }}>
                  <li>Functional and regression testing</li>
                  <li>User experience and usability testing</li>
                  <li>Test case design and documentation</li>
                  <li>Bug tracking and defect management</li>
                  <li>Test strategy development</li>
                  <li>Risk-based testing approaches</li>
                </ul>
              </div>
            </div>

            <div className="card" data-testid="service-test-automation">
              <div className="card-content">
                <h3 className="card-title">Test Automation Engineering</h3>
                <p className="card-text" style={{ marginBottom: "1.5rem" }}>
                  Design, development, and implementation of robust automation
                  frameworks tailored to your technology stack and testing
                  requirements.
                </p>
                <ul style={{ color: "#666", lineHeight: "1.8" }}>
                  <li>
                    Web application automation (Selenium, Cypress, Playwright)
                  </li>
                  <li>API testing automation (REST, GraphQL, SOAP)</li>
                  <li>Mobile application testing</li>
                  <li>Database testing automation</li>
                  <li>Cross-browser and cross-platform testing</li>
                  <li>Test data management and setup</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="section" style={{ backgroundColor: "#f8fafc" }}>
        <div className="container">
          <h2 className="section-title">Specialized Testing Services</h2>
          <div className="grid grid-3">
            <div className="card" data-testid="service-performance">
              <div className="card-content">
                <h3 className="card-title">Performance Testing</h3>
                <p className="card-text">
                  Comprehensive performance testing to ensure your applications
                  can handle expected load and perform optimally under various
                  conditions.
                </p>
                <ul
                  style={{
                    color: "#666",
                    lineHeight: "1.8",
                    marginTop: "1rem",
                  }}
                >
                  <li>Load and stress testing</li>
                  <li>Performance monitoring</li>
                  <li>Bottleneck identification</li>
                  <li>Scalability assessment</li>
                </ul>
              </div>
            </div>

            <div className="card" data-testid="service-security">
              <div className="card-content">
                <h3 className="card-title">Security Testing</h3>
                <p className="card-text">
                  Security-focused testing to identify vulnerabilities and
                  ensure your applications meet security standards and
                  compliance requirements.
                </p>
                <ul
                  style={{
                    color: "#666",
                    lineHeight: "1.8",
                    marginTop: "1rem",
                  }}
                >
                  <li>Vulnerability assessment</li>
                  <li>Penetration testing</li>
                  <li>Authentication testing</li>
                  <li>Data protection validation</li>
                </ul>
              </div>
            </div>

            <div className="card" data-testid="service-accessibility">
              <div className="card-content">
                <h3 className="card-title">Accessibility Testing</h3>
                <p className="card-text">
                  Ensure your applications are accessible to all users and
                  comply with accessibility standards such as WCAG 2.1 AA.
                </p>
                <ul
                  style={{
                    color: "#666",
                    lineHeight: "1.8",
                    marginTop: "1rem",
                  }}
                >
                  <li>WCAG compliance testing</li>
                  <li>Screen reader compatibility</li>
                  <li>Keyboard navigation testing</li>
                  <li>Color contrast validation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting & Training */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Consulting & Training Services</h2>
          <div className="grid grid-2">
            <div className="card" data-testid="service-qa-consulting">
              <div className="card-content">
                <h3 className="card-title">QA Process Consulting</h3>
                <p className="card-text" style={{ marginBottom: "1.5rem" }}>
                  Strategic consulting to improve your QA processes, implement
                  best practices, and establish quality culture within your
                  organization.
                </p>
                <ul style={{ color: "#666", lineHeight: "1.8" }}>
                  <li>QA process assessment and improvement</li>
                  <li>Quality metrics and KPI development</li>
                  <li>Tool selection and implementation</li>
                  <li>Agile and DevOps integration</li>
                  <li>Quality culture development</li>
                  <li>Team structure optimization</li>
                </ul>
              </div>
            </div>

            <div className="card" data-testid="service-training">
              <div className="card-content">
                <h3 className="card-title">Training & Skill Development</h3>
                <p className="card-text" style={{ marginBottom: "1.5rem" }}>
                  Comprehensive training programs to build internal QA
                  capabilities and keep your team current with industry best
                  practices.
                </p>
                <ul style={{ color: "#666", lineHeight: "1.8" }}>
                  <li>QA fundamentals and best practices</li>
                  <li>Test automation tool training</li>
                  <li>Advanced testing techniques</li>
                  <li>Custom workshops and seminars</li>
                  <li>Mentoring and coaching</li>
                  <li>Certification preparation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section" style={{ backgroundColor: "#f8fafc" }}>
        <div className="container">
          <h2 className="section-title">Technology Stack</h2>
          <p className="section-subtitle">
            We work with a comprehensive range of tools and technologies to meet
            your specific needs
          </p>

          <div className="grid grid-2">
            <div>
              <h3
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "1.5rem",
                  color: "#2563eb",
                }}
              >
                Automation Tools & Frameworks
              </h3>
              <div className="grid grid-2" style={{ gap: "2rem" }}>
                <div>
                  <h4 style={{ marginBottom: "0.5rem", color: "#1a1a1a" }}>
                    Web Testing
                  </h4>
                  <ul style={{ color: "#666", lineHeight: "1.8" }}>
                    <li>Selenium WebDriver</li>
                    <li>Cypress</li>
                    <li>Playwright</li>
                    <li>TestCafe</li>
                    <li>Puppeteer</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ marginBottom: "0.5rem", color: "#1a1a1a" }}>
                    API Testing
                  </h4>
                  <ul style={{ color: "#666", lineHeight: "1.8" }}>
                    <li>REST Assured</li>
                    <li>Postman/Newman</li>
                    <li>Insomnia</li>
                    <li>SoapUI</li>
                    <li>Karate DSL</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "1.5rem",
                  color: "#2563eb",
                }}
              >
                Supporting Technologies
              </h3>
              <div className="grid grid-2" style={{ gap: "2rem" }}>
                <div>
                  <h4 style={{ marginBottom: "0.5rem", color: "#1a1a1a" }}>
                    Languages
                  </h4>
                  <ul style={{ color: "#666", lineHeight: "1.8" }}>
                    <li>Java</li>
                    <li>JavaScript/TypeScript</li>
                    <li>Python</li>
                    <li>C#</li>
                    <li>Ruby</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ marginBottom: "0.5rem", color: "#1a1a1a" }}>
                    CI/CD & Cloud
                  </h4>
                  <ul style={{ color: "#666", lineHeight: "1.8" }}>
                    <li>Jenkins</li>
                    <li>GitHub Actions</li>
                    <li>Azure DevOps</li>
                    <li>Docker</li>
                    <li>AWS/Azure/GCP</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Service Packages</h2>
          <div className="grid grid-3">
            <div className="card" data-testid="package-starter">
              <div className="card-content">
                <h3 className="card-title">QA Assessment Package</h3>
                <p className="card-text" style={{ marginBottom: "1.5rem" }}>
                  Perfect for organizations looking to understand their current
                  QA maturity and identify improvement opportunities.
                </p>
                <ul style={{ color: "#666", lineHeight: "1.8" }}>
                  <li>Current state assessment</li>
                  <li>Gap analysis report</li>
                  <li>Recommendations roadmap</li>
                  <li>Tool evaluation</li>
                  <li>2-week engagement</li>
                </ul>
                <div style={{ marginTop: "2rem" }}>
                  <Link
                    to="/contact"
                    className="btn"
                    data-testid="package-starter-contact"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>

            <div className="card" data-testid="package-implementation">
              <div className="card-content">
                <h3 className="card-title">Automation Implementation</h3>
                <p className="card-text" style={{ marginBottom: "1.5rem" }}>
                  Comprehensive automation framework development and
                  implementation with team training and knowledge transfer.
                </p>
                <ul style={{ color: "#666", lineHeight: "1.8" }}>
                  <li>Framework design & development</li>
                  <li>Test automation implementation</li>
                  <li>CI/CD integration</li>
                  <li>Team training</li>
                  <li>8-12 week engagement</li>
                </ul>
                <div style={{ marginTop: "2rem" }}>
                  <Link
                    to="/contact"
                    className="btn"
                    data-testid="package-implementation-contact"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            <div className="card" data-testid="package-ongoing">
              <div className="card-content">
                <h3 className="card-title">Ongoing QA Partnership</h3>
                <p className="card-text" style={{ marginBottom: "1.5rem" }}>
                  Long-term partnership for continuous QA support, process
                  improvement, and advanced automation development.
                </p>
                <ul style={{ color: "#666", lineHeight: "1.8" }}>
                  <li>Dedicated QA support</li>
                  <li>Continuous improvement</li>
                  <li>Advanced automation</li>
                  <li>Regular training sessions</li>
                  <li>Flexible engagement model</li>
                </ul>
                <div style={{ marginTop: "2rem" }}>
                  <Link
                    to="/contact"
                    className="btn"
                    data-testid="package-ongoing-contact"
                  >
                    Discuss Partnership
                  </Link>
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
      >
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
            Ready to Elevate Your Software Quality?
          </h2>
          <p
            style={{ fontSize: "1.2rem", marginBottom: "2rem", opacity: "0.9" }}
          >
            Let's discuss how our services can help you achieve your quality
            assurance goals and deliver better software faster.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              to="/contact"
              className="btn"
              style={{ backgroundColor: "white", color: "#2563eb" }}
              data-testid="services-cta-contact"
            >
              Schedule Consultation
            </Link>
            <Link
              to="/about"
              className="btn btn-secondary-dark"
              data-testid="services-cta-about"
              aria-label="Learn more about our QA expertise and experience"
            >
              Learn About Our Expertise
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
