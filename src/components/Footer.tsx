import React from "react";
import "../App.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="footer"
      data-testid="footer"
      role="contentinfo"
      aria-labelledby="footer-heading"
    >
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h2 id="footer-heading">Verify Loop</h2>
            <p>
              Professional Quality Assurance and Automation Engineering
              consulting services. We ensure your software quality through
              expert testing and automation solutions.
            </p>
          </div>

          <div className="footer-section">
            <h3>Services</h3>
            <p>Quality Assurance Testing</p>
            <p>Test Automation</p>
            <p>Process Improvement</p>
            <p>Training & Consulting</p>
          </div>

          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: info@verifyloop.net</p>
            <p>Available for remote and on-site consulting</p>
          </div>

          <div className="footer-section">
            <h3>Professional Focus</h3>
            <p>Enterprise Software Testing</p>
            <p>Continuous Integration</p>
            <p>Quality Metrics & Reporting</p>
            <p>Team Leadership & Training</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Verify Loop LLC. All rights reserved. |
            Professional QA & Automation Engineering Consulting
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
