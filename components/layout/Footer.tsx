export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-identity">
          <span className="footer-mark" aria-hidden="true">YS</span>
          <div>
            <p>Prof. Yogeshwar Sharma</p>
            <span>Principal · Professor of Chemistry</span>
          </div>
        </div>
        <div className="footer-address">
          <span className="footer-label">Institution</span>
          <p>Motilal Nehru College<br />University of Delhi<br />New Delhi, India</p>
        </div>
        <div className="footer-nav">
          <span className="footer-label">Index</span>
          <a href="/research">Research</a>
          <a href="/leadership">Leadership</a>
          <a href="/academic">Academic</a>
        </div>
      </div>
      <div className="footer-base">
        <span>Academic · Researcher · Institutional Leader</span>
        <span>© {new Date().getFullYear()} Prof. Yogeshwar Sharma</span>
      </div>
    </footer>
  );
}
