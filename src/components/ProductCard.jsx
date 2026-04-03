import { Link } from "react-router-dom";
import "../styles/productCard.css";
function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.shortDesc}</p>
        <Link to={`/products/${product.id}`} className="view-btn">
  View Details
</Link>
      </div>
    </div>
  );
}

export default ProductCard;