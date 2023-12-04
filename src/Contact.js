import './contact.css';
import React from 'react';

function Contact() {
  const officePhoneNumber = '(626) 393-2638'; 
  const faxNumber = '(626) 346-3198';
  const cellPhoneNumber = '(626) 464-5392';
  const emailAddress = 'kalradwan@yahoo.com'; // Replace with your email address
  const licenseNumber = '1078043.B';
  const address = '2203 Lerona Ave, Rowland Heights, CA 91748';

  return (
    <section id="contact">
      <h2>Contact Kal Best Contractor, Inc (KBCI)</h2>
      <p>
        <strong>Address:</strong> {address}
      </p>
      <p>
        <strong>Office Phone:</strong> <a href={`tel:${officePhoneNumber}`}>{officePhoneNumber}</a>
      </p>
      <p>
        <strong>Fax:</strong> {faxNumber}
      </p>
      <p>
        <strong>Cell:</strong> <a href={`tel:${cellPhoneNumber}`}>{cellPhoneNumber}</a>
      </p>
      <p>
        <strong>Email:</strong> <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
      </p>
      <p>
        <strong>License No:</strong> {licenseNumber}
      </p>
      {/* Additional contact form and details go here */}
    </section>
  );
}

export default Contact;
