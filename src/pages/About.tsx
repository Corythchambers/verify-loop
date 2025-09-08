import React from "react";
import "../App.css";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero" aria-labelledby="about-hero-heading">
        <div className="container">
          <h1 id="about-hero-heading">About Verify Loop</h1>
          <p>
            Your trusted partner in web development and quality assurance.
            Building software confidence through expert development, testing,
            and proven methodologies.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section" aria-labelledby="company-overview-title">
        <div className="container">
          <h2
            className="section-title"
            id="company-overview-title"
            data-testid="company-overview-title"
          >
            Company Overview
          </h2>
          <div className="grid grid-2">
            <div>
              <p
                style={{
                  marginBottom: "2rem",
                  fontSize: "1.1rem",
                  lineHeight: "1.7",
                }}
              >
                Verify Loop is a specialized consulting firm dedicated to
                helping organizations achieve excellence in web development and
                software quality assurance. Founded with the mission to bridge
                the gap between development speed and quality assurance, we
                provide comprehensive web development and QA solutions that
                enable businesses to deliver reliable, high-quality software
                products.
              </p>
              <p
                style={{
                  marginBottom: "2rem",
                  fontSize: "1.1rem",
                  lineHeight: "1.7",
                }}
              >
                Our approach combines deep technical expertise in both
                development and testing with strategic thinking to create
                sustainable quality improvement programs. We work closely with
                development teams, QA professionals, and business stakeholders
                to implement development and testing strategies that align with
                organizational goals and deliver measurable results.
              </p>
            </div>
            <div>
              <div className="card">
                <div className="card-content">
                  <h3 className="card-title">Our Mission</h3>
                  <p className="card-text">
                    To empower organizations with robust web development
                    capabilities and quality assurance practices that accelerate
                    delivery while maintaining the highest standards of software
                    quality and reliability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section
        className="section"
        style={{ backgroundColor: "#f8fafc" }}
        aria-labelledby="expertise-heading"
      >
        <div className="container">
          <h2 className="section-title" id="expertise-heading">
            Areas of Expertise
          </h2>
          <div
            className="grid grid-3"
            role="list"
            aria-label="Areas of expertise"
          >
            <div
              className="card"
              data-testid="expertise-web-development"
              role="listitem"
            >
              <div className="card-content">
                <h3 className="card-title">Web Development</h3>
                <ul style={{ color: "#666", lineHeight: "1.8" }}>
                  <li>
                    Full-stack web application development (React, Node.js,
                    Python)
                  </li>
                  <li>Frontend and backend development</li>
                  <li>API development and integration</li>
                  <li>Database design and optimization</li>
                  <li>Cloud deployment and DevOps</li>
                </ul>
              </div>
            </div>

            <div
              className="card"
              data-testid="expertise-automation"
              role="listitem"
            >
              <div className="card-content">
                <h3 className="card-title">Test Automation Engineering</h3>
                <ul style={{ color: "#666", lineHeight: "1.8" }}>
                  <li>
                    Web application automation (Selenium, Cypress, Playwright)
                  </li>
                  <li>API testing and automation (REST, GraphQL)</li>
                  <li>Mobile application testing</li>
                  <li>Performance and load testing</li>
                  <li>CI/CD integration and pipeline optimization</li>
                </ul>
              </div>
            </div>

            <div
              className="card"
              data-testid="expertise-qa-strategy"
              role="listitem"
            >
              <div className="card-content">
                <h3 className="card-title">QA Strategy & Process</h3>
                <ul style={{ color: "#666", lineHeight: "1.8" }}>
                  <li>Test strategy development and planning</li>
                  <li>Quality metrics and KPI implementation</li>
                  <li>Process improvement and optimization</li>
                  <li>Risk-based testing approaches</li>
                  <li>Agile and DevOps integration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies & Tools */}
      <section className="section" aria-labelledby="technologies-heading">
        <div className="container">
          <h2 className="section-title" id="technologies-heading">
            Technologies & Tools
          </h2>
          <p className="section-subtitle">
            We leverage industry-leading tools and technologies to deliver
            comprehensive web development and testing solutions
          </p>

          <div className="grid grid-2">
            <div className="card">
              <div className="card-content">
                <h3 className="card-title">Web Development Technologies</h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "1rem",
                    marginTop: "1rem",
                  }}
                >
                  <div>
                    <strong>Frontend:</strong>
                    <ul style={{ marginTop: "0.5rem", color: "#666" }}>
                      <li>React, Vue.js, Angular</li>
                      <li>TypeScript, JavaScript</li>
                      <li>HTML5, CSS3, SASS</li>
                      <li>Redux, Vuex, NgRx</li>
                    </ul>
                  </div>
                  <div>
                    <strong>Backend:</strong>
                    <ul style={{ marginTop: "0.5rem", color: "#666" }}>
                      <li>Node.js, Express</li>
                      <li>Python, Django, Flask</li>
                      <li>Java, Spring Boot</li>
                      <li>PostgreSQL, MongoDB</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-content">
                <h3 className="card-title">Testing & Automation Tools</h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "1rem",
                    marginTop: "1rem",
                  }}
                >
                  <div>
                    <strong>Web Testing:</strong>
                    <ul style={{ marginTop: "0.5rem", color: "#666" }}>
                      <li>Selenium WebDriver</li>
                      <li>Cypress</li>
                      <li>Playwright</li>
                      <li>TestCafe</li>
                    </ul>
                  </div>
                  <div>
                    <strong>API Testing:</strong>
                    <ul style={{ marginTop: "0.5rem", color: "#666" }}>
                      <li>REST Assured</li>
                      <li>Postman/Newman</li>
                      <li>Insomnia</li>
                      <li>Custom frameworks</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section" style={{ backgroundColor: "#f8fafc" }}>
        <div className="container">
          <h2 className="section-title">Our Approach</h2>
          <div className="grid grid-2">
            <div>
              <h3
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "1rem",
                  color: "#2563eb",
                }}
              >
                Strategic Assessment
              </h3>
              <p
                style={{
                  marginBottom: "2rem",
                  color: "#666",
                  lineHeight: "1.6",
                }}
              >
                We begin every engagement with a comprehensive assessment of
                your current development and QA practices, tools, processes, and
                team capabilities. This analysis helps us understand your unique
                challenges and opportunities for improvement.
              </p>

              <h3
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "1rem",
                  color: "#2563eb",
                }}
              >
                Customized Solutions
              </h3>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                Based on our assessment, we develop tailored strategies that
                address your specific needs, whether that's building custom web
                applications, implementing automation frameworks, improving
                testing processes, or building internal development and QA
                capabilities through training and mentorship.
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
                Implementation & Training
              </h3>
              <p
                style={{
                  marginBottom: "2rem",
                  color: "#666",
                  lineHeight: "1.6",
                }}
              >
                We work hands-on with your team to implement solutions,
                providing training and support throughout the process. Our goal
                is to transfer knowledge and build sustainable practices that
                your team can maintain and expand upon.
              </p>

              <h3
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "1rem",
                  color: "#2563eb",
                }}
              >
                Continuous Improvement
              </h3>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                Quality assurance and development excellence are ongoing
                processes. We establish metrics, monitoring, and feedback loops
                that enable continuous improvement and help you adapt to
                changing requirements and technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Commitment */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Professional Commitment</h2>
          <div className="grid grid-3">
            <div className="card" data-testid="commitment-quality">
              <div className="card-content">
                <h3 className="card-title">Quality Excellence</h3>
                <p className="card-text">
                  We are committed to delivering the highest quality web
                  development and testing services and solutions. Our work is
                  backed by proven methodologies, industry best practices, and a
                  deep understanding of both development and quality assurance
                  principles.
                </p>
              </div>
            </div>

            <div className="card" data-testid="commitment-partnership">
              <div className="card-content">
                <h3 className="card-title">Long-term Partnership</h3>
                <p className="card-text">
                  We view our client relationships as long-term partnerships.
                  Our success is measured by your success, and we're committed
                  to supporting your web development and quality assurance
                  journey beyond individual projects.
                </p>
              </div>
            </div>

            <div className="card" data-testid="commitment-innovation">
              <div className="card-content">
                <h3 className="card-title">Continuous Innovation</h3>
                <p className="card-text">
                  The technology landscape is constantly evolving, and so are
                  we. We stay current with the latest web development and
                  testing tools, techniques, and industry trends to ensure our
                  clients benefit from cutting-edge solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
