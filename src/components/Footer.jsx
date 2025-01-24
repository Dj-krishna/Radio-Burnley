import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Footer.css";
import logo from "../assets/radio-burnley.png";

const Footer = () => {
  const footerLinks = [
    { title: "About Radio Burnley FM", href: "#" },
    { title: "Legal", href: "#" },
    { title: "Terms & Conditions", href: "#" },
    { title: "Privacy Policy", href: "#" },
    { title: "Advertise with us", href: "#" },
  ];

  const socialLinks = [
    {
      icon: ( 
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#fff"
          viewBox="0 0 32 32"
          data-test="social-facebook"
          aria-label="Radio Burnley FM Facebook"
        >
          <path
            fill="#fff"
            d="M16 3C8.83 3 3 8.83 3 16s5.83 13 13 13 13-5.83 13-13S23.17 3 16 3Zm1 23.95V19h3c.55 0 1-.45 1-1s-.45-1-1-1h-3v-3.02c0-.53.21-1.03.59-1.4.37-.37.87-.58 1.4-.58H21c.55 0 1-.45 1-1s-.45-1-1-1h-2.01c-1.06 0-2.06.41-2.81 1.16-.76.75-1.18 1.75-1.18 2.81V17h-3c-.55 0-1 .45-1 1s.45 1 1 1h3v7.95C9.4 26.44 5 21.72 5 16 5 9.93 9.93 5 16 5s11 4.93 11 11c0 5.73-4.4 10.45-10 10.95Z"
          ></path>
        </svg>
      ),
      href: "#",
      label: "Facebook",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#fff"
          viewBox="0 0 32 32"
          data-test="social-twitter"
          aria-label="Radio Burnley FM Twitter"
        >
          <path
            fill="#fff"
            d="M17.976 14.162 26.72 4h-2.072l-7.591 8.824L10.993 4H4l9.168 13.343L4 28h2.072l8.016-9.318L20.491 28h6.993l-9.508-13.838Zm-2.837 3.299-.93-1.329L6.82 5.56H10l5.965 8.532.93 1.329 7.753 11.09h-3.182l-6.328-9.05Z"
          ></path>
        </svg>
      ),
      href: "#",
      label: "Twitter",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#fff"
          viewBox="0 0 32 32"
          data-test="social-instagram"
          aria-label="absoluteradio Instagram"
        >
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M16 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-6 4a6 6 0 1 1 12 0 6 6 0 0 1-12 0Z"
            clipRule="evenodd"
          ></path>
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M10.5 5.5a5 5 0 0 0-5 5v11a5 5 0 0 0 5 5h11a5 5 0 0 0 5-5v-11a5 5 0 0 0-5-5h-11Zm-7 5a7 7 0 0 1 7-7h11a7 7 0 0 1 7 7v11a7 7 0 0 1-7 7h-11a7 7 0 0 1-7-7v-11Z"
            clipRule="evenodd"
          ></path>
          <path
            fill="#fff"
            d="M22.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
          ></path>
        </svg>
      ),
      href: "#",
      label: "Instagram",
    },
  ];

  return (
    <footer className="site-footer">
      <Container fluid className="footer-gradient py-5">
        <Container>
          <Row className="justify-content-center mb-4">
            <Col xs={12} className="text-center">
              <img
                src={logo}
                alt="Radio Burnley"
                className="footer-logo mb-4"
              />
            </Col>
          </Row>

          <Row className="justify-content-center mb-4">
            <Col xs={12} className="text-center">
              <h5 className="text-white mb-4 fw-bold">Follow us</h5>
              <div className="social-links">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className={`social-icon ${social.label}`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </Col>
          </Row>
          <ul className="footer-links">
            {footerLinks.map((link) => (
              <li key={link.title}>
                <a href={link.href} className="footer-link">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          <Row className="mt-4">
            <Col xs={12} className="text-center">
              <button className="privacy-preferences-btn">
                Privacy Preferences
              </button>
            </Col>
          </Row>
        </Container>
      </Container>
    </footer>
  );
};

export default Footer;
