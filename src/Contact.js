import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './contact.css';

function Contact() {
  const officePhoneNumber = '(626) 393-2638'; 
  const faxNumber = '(626) 346-3198';
  const cellPhoneNumber = '(626) 464-5392';
  const emailAddress = 'kal@kbci.pro';
  const licenseNumber = '1078043.B';
  const address = '2203 Lerona Ave, Rowland Heights, CA 91748';
  const googleMapsQuery = "https://maps.google.com/?q=2203+Lerona+Ave,+Rowland+Heights,+CA+91748";
  
  return (
    <>
      <Helmet>
        <title>Contact Us - Kal Best Contractor, Inc. (KBCI)</title>
        <meta name="description" content="Get in touch with Kal Best Contractor, Inc. (KBCI) for expert construction and remodeling services in Rowland Heights, CA. Contact us via phone or email." />
        <meta name="keywords" content="contact, construction, remodeling, contractor, Rowland Heights, CA" />
      </Helmet>
      <section id="contact">
        <h2>Contact Kal Best Contractor, Inc (KBCI)</h2>
        <p><strong>Address:</strong> <a href={googleMapsQuery} target="_blank" rel="noopener noreferrer">{address}</a></p>
        <p><strong>Office Phone:</strong> <a href={`tel:${officePhoneNumber}`}>{officePhoneNumber}</a></p>
        <p><strong>Fax:</strong> {faxNumber}</p>
        <p><strong>Cell:</strong> <a href={`tel:${cellPhoneNumber}`}>{cellPhoneNumber}</a></p>
        <p><strong>Email:</strong> <a href={`mailto:${emailAddress}`}>{emailAddress}</a></p>
        <p><strong>License No:</strong> {licenseNumber}</p>
        <p><strong>Follow us on Instagram:</strong> <a href="https://www.instagram.com/kbci_/" target="_blank" rel="noopener noreferrer">@kbci_</a></p>
      </section>
    </>
  );
}

export default Contact;
