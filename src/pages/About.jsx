import "../styles/About.css";
const About = () => {
  return (
    <main className="about">

      {/* PAGE HERO */}
      <section className="about-hero">
        <h1>About Our Company</h1>
        <p>Your Trusted Industrial Equipment Partner</p>
      </section>

      {/* OVERVIEW */}
      <section className="about-section container">
        <h2>Company Overview</h2>
        <p>
          KIMS Corporation is a leading industrial equipment and tools
          manufacturer specializing in fabrication of high-quality
          customized industrial products. We deliver precision engineered
          solutions designed to improve operational efficiency and
          productivity across industries.
        </p>
      </section>

      {/* ESTABLISHMENT */}
      <section className="about-section container">
        <h2>Our Establishment</h2>
        <p>
          Established with a vision to provide reliable industrial
          fabrication solutions, our organization focuses on innovation,
          quality manufacturing and long-term client relationships.
          Our experienced engineering team collaborates closely with
          customers to develop tailored solutions.
        </p>
      </section>

      {/* VISION & MISSION */}
      <section className="about-section container vision-grid">

        <div className="vision-card">
          <h3>Our Vision</h3>
          <p>
            To continuously implement advanced technologies and develop
            industrial products that redefine industry standards while
            ensuring safety and sustainability.
          </p>
        </div>

        <div className="vision-card">
          <h3>Our Mission</h3>
          <p>
            Deliver high-quality, reliable and customizable industrial
            solutions focused on customer satisfaction and minimized
            environmental impact.
          </p>
        </div>

      </section>

      {/* MOTIVE */}
      <section className="about-section container">
        <h2>Our Motive</h2>
        <p>
          We aim to become a trusted long-term manufacturing partner by
          delivering cost-effective solutions, maintaining strict quality
          control and ensuring on-time project completion.
        </p>
      </section>
    
      {/* GALLERY */}
      <section className="about-section container">
        

        <div className="gallery-grid">
          <img src="https://via.placeholder.com/400x300" alt="" />
          <img src="https://via.placeholder.com/400x300" alt="" />
          <img src="https://via.placeholder.com/400x300" alt="" />
          <img src="https://via.placeholder.com/400x300" alt="" />
        </div>
      </section>

    </main>
  );
};

export default About;