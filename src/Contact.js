import React from "react";
import { Helmet } from "react-helmet-async";
import "./contact.css";
import {
  FaPhoneAlt,
  FaFax,
  FaMobileAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaClipboardList,
} from "react-icons/fa";

function Contact() {
  const officePhoneNumber = "(626) 393-2638";
  const faxNumber = "(626) 346-3198";
  const cellPhoneNumber = "(626) 464-5392";
  const emailAddress = "kal@kbci.pro";
  const licenseNumber = "1078043";
  const address = "2203 Lerona Ave, Rowland Heights, CA 91748";
  const googleMapsQuery =
    "https://maps.google.com/?q=2203+Lerona+Ave,+Rowland+Heights,+CA+91748";

  return (
    <>
      <Helmet>
        <title>Contact Us - Kal Best Contractor, Inc. (KBCI)</title>
        <meta
          name="description"
          content="Get in touch with Kal Best Contractor, Inc. (KBCI) for expert construction and remodeling services in Rowland Heights, CA. Contact us via phone or email."
        />
        <meta
          name="keywords"
          content="contact, construction, remodeling, contractor, Rowland Heights, CA"
        />
      </Helmet>
      <section id="contact" >
        <h2>Contact Kal Best Contractor, Inc (KBCI)</h2>
        <div className="contact-grid">
          <div className="contact-item">
            <FaMapMarkerAlt />
            <p>
              <strong>Address:</strong>{" "}
              <a
                href={googleMapsQuery}
                target="_blank"
                rel="noopener noreferrer"
              >
                {address}
              </a>
            </p>
          </div>
          <div className="contact-item">
            <FaPhoneAlt />
            <p>
              <strong>Office Phone:</strong>{" "}
              <a href={`tel:${officePhoneNumber}`}>{officePhoneNumber}</a>
            </p>
          </div>
          <div className="contact-item">
            <FaFax />
            <p>
              <strong>Fax:</strong> {faxNumber}
            </p>
          </div>
          <div className="contact-item">
            <FaMobileAlt />
            <p>
              <strong>Cell:</strong>{" "}
              <a href={`tel:${cellPhoneNumber}`}>{cellPhoneNumber}</a>
            </p>
          </div>
          <div className="contact-item">
            <FaEnvelope />
            <p>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
            </p>
          </div>
          <div className="contact-item">
            <FaInstagram />
            <p>
              <strong>Follow us on Instagram:</strong>{" "}
              <a
                href="https://www.instagram.com/kbci_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @kbci_
              </a>
            </p>
          </div>
          <div className="contact-item">
            <FaClipboardList />
            <p>
              <strong>License Number:</strong>{" "}
              <a
                href="https://www.cslb.ca.gov/onlineservices/checklicenseII/LicenseDetail.aspx?LicNum=1078043"
                target="_blank"
                // rel="noopener noreferrer"
              >
                {" "}
                {licenseNumber}{" "}
              </a>
            </p>
          </div>
        </div>

        {/* Optional: Include a contact form */}
      </section>
    </>
  );
}

export default Contact;
