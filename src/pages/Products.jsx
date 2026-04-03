import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import "../styles/products.css";

function Products() {
  return (
    <section className="products-page">
      <div className="products-container">
        <h1>Our Industrial Products</h1>

        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div className="catalogue-section">

  <h2>Download Our Product Catalogue</h2>

  <a 
    href="/catlogue/KIMS.pdf"
    download
    className="catalogue-btn"
  >
    Download Catalogue
  </a>

</div>
    </section>
  );
}

export default Products;