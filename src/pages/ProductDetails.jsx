import { useParams } from "react-router-dom";
import { products } from "../data/products";
import "../styles/productDetails.css";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find((item) => item.id === id);

  if (!product) {
    return <h2 style={{ padding: "100px", textAlign: "center" }}>Product Not Found</h2>;
  }

  return (
    <section className="product-details">
      <div className="details-container">
        <img src={product.image} alt={product.name} />

        <div className="details-content">
          <h1>{product.name}</h1>
          <p>{product.shortDesc}</p>

          <div className="full-description">
            <p>
              This product is designed with premium industrial standards,
              ensuring durability, performance, and long-term reliability.
              Suitable for heavy-duty warehouse and logistics operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;