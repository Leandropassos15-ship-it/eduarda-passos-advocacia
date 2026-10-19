import { ArrowRight, GraduationCap, Landmark, Scale } from "lucide-react";
import { LINKS } from "../data/content";
import Picture from "./Picture";

const CREDENTIALS = [
  {
    icon: <GraduationCap size={18} strokeWidth={1.5} />,
    label: "Bacharel · URCA",
  },
  {
    icon: <Scale size={18} strokeWidth={1.5} />,
    label: "Pós em Direito Internacional · EB Pós",
  },
  {
    icon: <Landmark size={18} strokeWidth={1.5} />,
    label: "Comissão de Direito Internacional · OAB/CE",
  },
];

function About() {
  return (
    <section className="section about" id="sobre">
      <div className="container about-grid">
        <div className="about-media reveal">
          <figure className="about-portrait">
            <Picture
              base="/img/eduarda-retrato"
              widths={[640, 1000]}
              sizes="(max-width: 900px) 92vw, 520px"
              width={1000}
              height={1190}
              alt="Retrato de Eduarda Passos"
            />
          </figure>

          <figure className="about-oab">
            <Picture
              base="/img/eduarda-oab"
              widths={[480, 800]}
              sizes="(max-width: 900px) 44vw, 240px"
              width={800}
              height={1067}
              alt="Eduarda Passos na sede da OAB Ceará"
            />
            <figcaption>OAB · Ceará</figcaption>
          </figure>
        </div>

        <div className="about-copy">
          <p className="eyebrow reveal">Sobre mim</p>

          <h2 className="section-title reveal">
            Quando a vida atravessa fronteiras, <em>o Direito precisa acompanhar.</em>
          </h2>

          <p className="about-text reveal">
            Sou Eduarda Passos, advogada formada pela Universidade Regional do
            Cariri (URCA), pós-graduada em Direito Internacional, Imigração e
            Migração pela EB Pós e membro da Comissão de Direito Internacional
            da OAB/CE.
          </p>

          <ul className="credentials">
            {CREDENTIALS.map((item, index) => (
              <li
                key={item.label}
                className="reveal"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <span className="credential-icon">{item.icon}</span>
                {item.label}
              </li>
            ))}
          </ul>

          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline reveal"
          >
            Falar com a advogada
            <ArrowRight size={18} strokeWidth={1.6} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
