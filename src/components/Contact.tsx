import { ArrowRight, MapPin } from "lucide-react";
import { LINKS } from "../data/content";
import Picture from "./Picture";
import SocialLinks from "./SocialLinks";

function Contact() {
  return (
    <section className="section contact" id="contato">
      <div className="container">
        <div className="contact-card reveal">
          <figure className="contact-photo">
            <Picture
              base="/img/eduarda-perfil"
              widths={[640, 1100]}
              sizes="(max-width: 900px) 92vw, 480px"
              width={1100}
              height={1650}
              alt="Eduarda Passos sorrindo"
            />
            <figcaption>
              <span className="quote-mark-sm" aria-hidden="true">“</span>
              <blockquote>
                Cada cliente tem uma história. É por elas que eu trabalho.
              </blockquote>
              <span>Eduarda Passos</span>
            </figcaption>
          </figure>

          <div className="contact-copy">
            <p className="eyebrow">Vamos conversar?</p>
            <h2 className="section-title">
              Orientação jurídica <em>para novas possibilidades.</em>
            </h2>

            <a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              Fale comigo!
              <ArrowRight size={18} strokeWidth={1.6} />
            </a>

            <p className="contact-info">
              <MapPin size={16} strokeWidth={1.5} />
              <span>
                Atendimento online e presencial
                <br />
                Brasil e exterior
              </span>
            </p>

            <div className="contact-socials">
              <span>Acompanhe</span>
              <SocialLinks className="socials-outline" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
