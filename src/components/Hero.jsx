export default function Hero() {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <span className="hero-badge">✨ Trending Store</span>

        <h1>
          Discover products that <span>inspire</span> you
        </h1>

        <p>
          ShopSphere brings you curated products with modern design, premium
          quality, and seamless shopping experience.
        </p>

        <div className="hero-actions">
          <button className="btn-primary" onClick={scrollToProducts}>
            Shop Now
          </button>
          <button className="btn-secondary">Explore</button>
        </div>
      </div>

      <div className="hero-glow"></div>
    </section>
  );
}
