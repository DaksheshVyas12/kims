import { customers } from "../data/customers";
import "../styles/customers.css";

function Customers() {
  return (
    <section className="customers-page">
      <div className="customers-container">
        <h1>Our Happy Customers</h1>

        <div className="stats-section">
          <h2>{customers.length}+ Trusted Clients</h2>
        </div>

        <div className="customers-grid">
          {customers.map((customer) => (
            <div key={customer.id} className="customer-card">
              <img src={customer.logo} alt={customer.name} />
              <h3>{customer.name}</h3>
              <p>Associated: {customer.years}</p>
              <p>Projects Completed: {customer.projects}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Customers;