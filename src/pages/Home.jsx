import "../styles/Home.css";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

const featuredProducts = products.slice(0, 3);

function Home() {
  return (
    <>
      <section className="hero">
  <div className="hero-overlay">
    <div className="hero-content">
      <h1>KIMS Corporation</h1>
      <p>
        Leading Industrial Equipment & Fabrication Solutions
        Delivering Precision, Strength & Reliability
      </p>
      <button
        className="hero-btn"
        onClick={() => window.location.href = "/Products"}
      >
        Explore Our Products
      </button>
    </div>
  </div>
</section>

      <section className="why-section">
        <div className="why-container">
          <h2>Why Choose Us</h2>

          <div className="why-grid">
            <div className="why-card">
              <h3>Domain Expertise</h3>
              <p>
                Years of experience in industrial fabrication and manufacturing
                solutions.
              </p>
            </div>

            <div className="why-card">
              <h3>Client Satisfaction</h3>
              <p>
                Customized solutions delivered as per client requirements and
                budget.
              </p>
            </div>

            <div className="why-card">
              <h3>Quality Control</h3>
              <p>
                Rigorous quality checks ensuring high durability and
                performance.
              </p>
            </div>

            <div className="why-card">
              <h3>On-Time Delivery</h3>
              <p>
                Efficient workflow and dedicated team for timely project
                completion.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="preview-section">
  <div className="preview-container">
    <h2>Our Products</h2>

   <div className="products-grid">

  {featuredProducts.map((product) => (
    <ProductCard key={product.id} product={product} />
  ))}

  <Link to="/products" className="view-more-card">
    <div>
      <h3>View More Products</h3>
      <p>Explore our complete product catalog →</p>
    </div>
  </Link>

</div>
  </div>
</section>
    </>
  );
}

export default Home;