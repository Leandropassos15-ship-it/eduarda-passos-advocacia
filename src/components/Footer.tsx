import { NAV_ITEMS } from "../data/content";
import SocialLinks from "./SocialLinks";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#inicio" className="brand">
              <span className="brand-mark">EP</span>
              <span className="brand-name">
                Eduarda Passos
                <small>Advocacia Internacional</small>
              </span>
            </a>
            <p className="footer-slogan">
              Direito que conecta você <em>ao próximo capítulo.</em>
            </p>
          </div>

          <nav className="footer-col" aria-label="Rodapé">
            <p className="footer-title">Navegação</p>
            <ul className="footer-links">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-col">
            <p className="footer-title">Redes sociais</p>
            <SocialLinks className="socials-outline" />
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Eduarda Passos. Todos os direitos reservados.</span>
          <span>Advocacia Internacional</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
