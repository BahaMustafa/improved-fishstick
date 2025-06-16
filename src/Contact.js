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
  FaFacebookF,
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
      <section id="contact">
        <div className="contact-container">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">Ready to start your next project? Contact us today!</p>
          
          <div className="contact-bento-grid">
            <div className="contact-card contact-card-primary">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-content">
                <h3>Visit Us</h3>
                <p>
                  <a
                    href={googleMapsQuery}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {address}
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-card contact-card-secondary">
              <div className="contact-icon">
                <FaPhoneAlt />
              </div>
              <div className="contact-content">
                <h3>Office Phone</h3>
                <p>
                  <a href={`tel:${officePhoneNumber}`}>{officePhoneNumber}</a>
                </p>
              </div>
            </div>

            <div className="contact-card contact-card-accent">
              <div className="contact-icon">
                <FaMobileAlt />
              </div>
              <div className="contact-content">
                <h3>Mobile</h3>
                <p>
                  <a href={`tel:${cellPhoneNumber}`}>{cellPhoneNumber}</a>
                </p>
              </div>
            </div>

            <div className="contact-card contact-card-info">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-content">
                <h3>Email Us</h3>
                <p>
                  <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
                </p>
              </div>
            </div>

            <div className="contact-card contact-card-social">
              <div className="contact-icon">
                <FaInstagram />
              </div>
              <div className="contact-content">
                <h3>Instagram</h3>
                <p>
                  <a
                    href="https://www.instagram.com/kbci_/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @kbci_
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-card contact-card-facebook">
              <div className="contact-icon">
                <FaFacebookF />
              </div>
              <div className="contact-content">
                <h3>Facebook</h3>
                <p>
                  <a
                    href="https://www.facebook.com/profile.php?id=100040696403038&mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit our page
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-card contact-card-license">
              <div className="contact-icon">
                <FaClipboardList />
              </div>
              <div className="contact-content">
                <h3>License</h3>
                <p>
                <a
Add comment
More actions


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

            <div className="contact-card contact-card-fax">
              <div className="contact-icon">
                <FaFax />
              </div>
              <div className="contact-content">
                <h3>Fax</h3>
                <p>{faxNumber}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
