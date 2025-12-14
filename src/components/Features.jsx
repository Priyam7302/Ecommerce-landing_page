export default function Features() {
  return (
    <section className="features" id="features">
      <h2 className="section-title">Why ShopSphere?</h2>
      <p className="section-subtitle">
        Everything you need for a modern shopping experience
      </p>

      <div className="features-grid">
        <div className="feature-card glass">
          <span className="feature-icon">⚡</span>
          <h3>Fast & Reliable</h3>
          <p>
            Optimized performance with smooth browsing and instant interactions.
          </p>
        </div>

        <div className="feature-card glass">
          <span className="feature-icon">🎨</span>
          <h3>Modern Design</h3>
          <p>
            Clean, elegant UI with glass effects and beautiful color gradients.
          </p>
        </div>

        <div className="feature-card glass">
          <span className="feature-icon">📱</span>
          <h3>Fully Responsive</h3>
          <p>Seamless experience across mobile, tablet, and desktop devices.</p>
        </div>
      </div>
    </section>
  );
}
