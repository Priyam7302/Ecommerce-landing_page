import { useEffect, useState } from "react";
import axios from "axios";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=6")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  return (
    <section className="products" id="products">
      <h2 className="section-title">Featured Products</h2>
      <p className="section-subtitle">Handpicked items curated just for you</p>

      {loading ? (
        <p className="loading-text">Loading products...</p>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card glass" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={product.title} />
              </div>

              <div className="product-info">
                <h4 className="product-title">
                  {product.title.length > 40
                    ? product.title.slice(0, 40) + "..."
                    : product.title}
                </h4>

                <p className="product-price">${product.price}</p>

                <button className="product-btn">View Product</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
