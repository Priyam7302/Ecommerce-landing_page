export default function Footer() {
  return (
    <footer className="footer glass">
      <p>© {new Date().getFullYear()} ShopSphere. All rights reserved.</p>

      <a
        href="https://github.com/Priyam7302"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        GitHub
      </a>
    </footer>
  );
}
