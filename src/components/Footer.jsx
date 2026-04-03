import { Link } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-section">
          <h3>KIMS Corporation</h3>
          <p>Your Trusted Industrial Equipment Supplier</p>

          <div className="footer-address">
  <h4>Address</h4>

  <a
    href="https://www.google.com/maps/place/Kims+corporation+Shanta+park/@22.820154,75.7787464"
    target="_blank"
    rel="noopener noreferrer"
    className="footer-address-link"
  >
    KIMS Corporation <br />
    Shanta Park Industrial Area <br />
    Indore, Madhya Pradesh
  </a>
</div>

         <a 
  href="https://www.google.com/maps/place/Kims+corporation+Shanta+park/@22.820154,75.7787464,632m/data=!3m2!1e3!4b1!4m6!3m5!1s0x396301957ecdfdc3:0xdc499cafef0afa60!8m2!3d22.820154!4d75.7787464!16s%2Fg%2F11k4wd_5ns"
  target="_blank"
  rel="noopener noreferrer"
  className="footer-map"
>
  <iframe
    src="https://maps.google.com/maps?q=22.820154,75.7787464&z=15&output=embed"
    width="100%"
    height="150"
    style={{ border: 0 }}
    loading="lazy"
    title="KIMS Corporation Location"
  ></iframe>
</a>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/customers">Customers</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Contact</h4>

          <p>📞 <a href="tel:7747911011" className="footer-link">+91 77479 11011</a></p>
          <p>📞 <a href="tel:7745911011" className="footer-link">+91 77459 11011</a></p>
          <p>📞 <a href="tel:7746911011" className="footer-link">+91 77469 11011</a></p>

          <p>✉️ <a href="mailto:info@kimscorporation.com" className="footer-link">info@kimscorporation.com</a></p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} KIMS Corporation. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;