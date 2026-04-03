import "../styles/contact.css";

function Contact() {
  return (
    <section className="contact-page">

      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Get in touch with KIMS Corporation for industrial equipment inquiries.</p>
      </div>

      <div className="contact-grid">

        <div className="contact-card">
          <h3>📞 Phone</h3>
          <p><a href="tel:7747911011">+91 77479 11011</a></p>
          <p><a href="tel:7745911011">+91 77459 11011</a></p>
          <p><a href="tel:7746911011">+91 77469 11011</a></p>
        </div>

        <div className="contact-card">
          <h3>✉️ Email</h3>
          <p>
            <a href="mailto:info@kimscorporation.com">
              info@kimscorporation.com
            </a>
          </p>
        </div>

        <div className="contact-card">
  <h3>📍 Office Address</h3>
  <p>
    <a
      href="https://www.google.com/maps/place/Kims+corporation+Shanta+park/@22.820154,75.7787464"
      target="_blank"
      rel="noopener noreferrer"
      className="address-link"
    >
      KIMS Corporation <br/>
      Shanta Park Industrial Area <br/>
      Indore, Madhya Pradesh
    </a>
  </p>
</div>

      </div>

      <div className="contact-map">
        <iframe
          src="https://maps.google.com/maps?q=22.820154,75.7787464&z=15&output=embed"
          loading="lazy"
          title="KIMS Corporation Location"
        ></iframe>
      </div>

    </section>
  );
}

export default Contact;