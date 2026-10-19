import { ArrowRight, BadgeCheck, Star } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { GOOGLE_RATING, LINKS } from "../data/content";
import HeroVideo from "./HeroVideo";
import Picture from "./Picture";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <HeroVideo />

      <div className="container hero-inner">
        <div className="hero-kicker reveal">
          <span>Mais que Direito.</span>
          <span className="hero-route" aria-label="Brasil e mundo">
            Brasil <i aria-hidden="true" /> Mundo
          </span>
        </div>

        <h1 className="hero-title reveal">
          Assessoria <em>sem fronteiras</em>
        </h1>

        <p className="hero-lead reveal">
          Assessoria jurídica e imigratória nas áreas de Direito de Família,
          Direito Internacional, Direito Civil e Imigração, com atendimento a
          brasileiros no exterior e regularização de estrangeiros no Brasil.
        </p>

        <div className="hero-actions reveal">
          <a href="#contato" className="btn btn-primary">
            Agende sua consulta
            <ArrowRight size={18} strokeWidth={1.6} />
          </a>
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <FaWhatsapp size={17} />
            WhatsApp
          </a>
        </div>

        <div className="hero-stage reveal">
          <figure className="hero-photo">
            <Picture
              base="/img/eduarda-cadeira"
              widths={[640, 1100]}
              sizes="(max-width: 760px) 100vw, 1100px"
              width={1100}
              height={1650}
              alt="Eduarda Passos, advogada, sentada em uma poltrona"
              priority
            />
          </figure>

          <a
            href={LINKS.google}
            target="_blank"
            rel="noopener noreferrer"
            className="float-card float-rating"
          >
            <span className="float-score">{GOOGLE_RATING.score}</span>
            <span className="float-text">
              <span className="stars" aria-label="5 estrelas">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
                ))}
              </span>
              <small>{GOOGLE_RATING.count} no Google</small>
            </span>
          </a>

          <div className="float-card float-oab">
            <span className="icon-tile icon-tile-sm">
              <BadgeCheck size={20} strokeWidth={1.4} />
            </span>
            <span className="float-text">
              <strong>OAB/CE</strong>
              <small>Comissão de Direito Internacional</small>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
