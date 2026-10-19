import { ArrowUpRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { HELP_PATHS, LINKS } from "../data/content";

function Help() {
  return (
    <section className="section help" id="ajuda">
      <div className="container">
        <header className="section-head section-head-center">
          <p className="eyebrow reveal">Como podemos ajudar?</p>
          <h2 className="section-title reveal">
            Encontre o atendimento <em>adequado para o seu caso.</em>
          </h2>
        </header>

        <div className="help-grid">
          {HELP_PATHS.map((path, index) => (
            <a
              key={path.title}
              href={LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="help-card reveal"
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <span className="help-number">0{index + 1}</span>
              <h3>{path.title}</h3>
              <p>{path.text}</p>
              <span className="help-arrow" aria-hidden="true">
                <ArrowUpRight size={18} strokeWidth={1.6} />
              </span>
            </a>
          ))}
        </div>

        <div className="help-cta reveal">
          <p>Não encontrou exatamente o que procura?</p>
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Falar sobre o caso em específico
            <FaWhatsapp size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Help;
