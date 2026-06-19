import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Jed Villapando
        </p>
        <div className="footer-links">
          <a href="https://github.com/JedRenz0" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/jedrenzo/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:jvillapa@uoguelph.ca">Email</a>
        </div>
      </div>
    </footer>
  );
}
