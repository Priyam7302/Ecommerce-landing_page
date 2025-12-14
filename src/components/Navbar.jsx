export default function Navbar() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="navbar glass">
      <div className="nav-logo">ShopSphere</div>

      <ul className="nav-links">
        <li onClick={() => scrollToSection("hero")}>Home</li>
        <li onClick={() => scrollToSection("features")}>Features</li>
        <li onClick={() => scrollToSection("products")}>Products</li>
        <li onClick={() => scrollToSection("contact")}>Contact</li>
      </ul>
    </nav>
  );
}
