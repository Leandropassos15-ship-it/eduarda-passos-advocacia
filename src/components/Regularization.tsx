import {
  ArrowRight,
  Briefcase,
  CalendarClock,
  CreditCard,
  FileSearch,
  House,
  IdCard,
  Landmark,
  Laptop,
  Plane,
} from "lucide-react";
import { LINKS, SERVICES } from "../data/content";

const SERVICE_ICONS = [House, IdCard, CalendarClock, FileSearch, Landmark, Briefcase, Laptop, Plane, CreditCard];

function Regularization() {
  return (
    <section className="section regularization" aria-labelledby="regularizacao-titulo">
      <div className="container">
        <div className="reg-panel reveal">
          <div className="reg-top">
            <div className="reg-copy">
              <p className="eyebrow eyebrow-light">Atuação internacional</p>
              <h2 className="section-title" id="regularizacao-titulo">
                Regularização migratória <em>no Brasil.</em>
              </h2>
              <p className="reg-text">
                Auxiliamos estrangeiros que desejam morar, trabalhar, constituir
                família ou regularizar sua situação migratória no Brasil, com
                orientação jurídica personalizada em todas as etapas aplicáveis.
              </p>
              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light"
              >
                Falar com a advogada
                <ArrowRight size={18} strokeWidth={1.6} />
              </a>
            </div>

            <div className="reg-visual" aria-hidden="true">
              <span className="orbit orbit-1" />
              <span className="orbit orbit-2" />
              <img
                src="/img/passaporte-700.webp"
                width={700}
                height={640}
                alt=""
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className="reg-services">
            <p className="reg-services-title">Nossos serviços</p>
            <ul>
              {SERVICES.map((service, index) => {
                const Icon = SERVICE_ICONS[index];
                return (
                  <li key={service}>
                    <span className="reg-icon">
                      <Icon size={18} strokeWidth={1.5} />
                    </span>
                    {service}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Regularization;
