import { useRef, useState } from "react";
import { ArrowUpRight, Globe2, Scale, Star, Users } from "lucide-react";
import { GOOGLE_RATING, LINKS, REVIEWS } from "../data/content";

const BENEFITS = [
  { icon: <Scale size={22} strokeWidth={1.3} />, label: "Atendimento de excelência" },
  { icon: <Users size={22} strokeWidth={1.3} />, label: "Segurança em cada processo" },
  { icon: <Globe2 size={22} strokeWidth={1.3} />, label: "Suporte em novos começos" },
];

function Stars({ size = 14 }: { size?: number }) {
  return (
    <span className="stars" aria-label="5 de 5 estrelas" role="img">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} size={size} fill="currentColor" strokeWidth={0} />
      ))}
    </span>
  );
}

function Reviews() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    if (!card) return;
    const step = card.offsetWidth + parseFloat(getComputedStyle(track).columnGap || "0");
    setActive(Math.min(REVIEWS.length - 1, Math.round(track.scrollLeft / step)));
  };

  const goTo = (index: number) => {
    const track = trackRef.current;
    const card = track?.children[index] as HTMLElement | undefined;
    if (!track || !card) return;
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
  };

  return (
    <section className="section reviews" id="avaliacoes">
      <div className="container">
        <header className="section-head section-head-center">
          <p className="eyebrow reveal">Avaliações reais</p>
          <h2 className="section-title reveal">
            A confiança dos nossos clientes <em>fala por nós.</em>
          </h2>
          <p className="section-lead reveal">
            São pessoas e famílias que confiaram em nosso trabalho e hoje vivem
            novas histórias, em novos destinos.
          </p>
        </header>

        <a
          href={LINKS.google}
          target="_blank"
          rel="noopener noreferrer"
          className="rating-card reveal"
        >
          <span className="rating-score">{GOOGLE_RATING.score}</span>
          <span className="rating-meta">
            <Stars size={18} />
            <span>{GOOGLE_RATING.count} · Avaliação no Google</span>
          </span>
          <span className="rating-divider" aria-hidden="true" />
          <span className="rating-profile">
            <span className="google-g" aria-hidden="true">G</span>
            <span>
              <strong>EP Advocacia e Assessoria Imigratória</strong>
              <small>
                Ver avaliações no Google <ArrowUpRight size={13} strokeWidth={1.8} />
              </small>
            </span>
          </span>
        </a>

        <div className="reviews-track" ref={trackRef} onScroll={handleScroll}>
          {REVIEWS.map((review, index) => (
            <figure
              key={review.name}
              className={`review-card reveal${index === 1 ? " review-card-dark" : ""}`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <Stars />
              <blockquote>“{review.text}”</blockquote>
              <figcaption>
                <span className="review-avatar" aria-hidden="true">
                  {review.initials}
                </span>
                <span>
                  <strong>{review.name}</strong>
                  <small>{review.info}</small>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="reviews-dots" role="tablist" aria-label="Escolher avaliação">
          {REVIEWS.map((review, index) => (
            <button
              key={review.name}
              type="button"
              role="tab"
              aria-selected={active === index}
              aria-label={`Avaliação ${index + 1} de ${REVIEWS.length}`}
              className={active === index ? "is-active" : ""}
              onClick={() => goTo(index)}
            />
          ))}
        </div>

        <ul className="benefits">
          {BENEFITS.map((benefit, index) => (
            <li
              key={benefit.label}
              className="reveal"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <span className="icon-tile">{benefit.icon}</span>
              {benefit.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Reviews;
