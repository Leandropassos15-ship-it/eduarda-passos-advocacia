import { AREAS } from "../data/content";
import Picture from "./Picture";

function Areas() {
  return (
    <section className="section areas" id="atuacao">
      <div className="container">
        <header className="section-head">
          <p className="eyebrow reveal">Áreas de atuação</p>
          <h2 className="section-title reveal">
            Uma atuação estratégica para questões que atravessam fronteiras,{" "}
            <em>famílias e diferentes momentos da vida.</em>
          </h2>
        </header>

        <div className="areas-grid" role="list">
          {AREAS.map((area, index) => (
            <article
              key={area.number}
              className={`area-card area-card-${index + 1} reveal`}
              style={{ transitionDelay: `${(index % 3) * 80}ms` }}
              role="listitem"
            >
              <Picture
                base={area.image}
                widths={area.sizes}
                sizes={index === 0 ? "(max-width: 760px) 86vw, 760px" : "(max-width: 760px) 86vw, 440px"}
                width={1000}
                height={667}
                alt=""
                className="area-image"
              />
              <span className="area-number">{area.number}</span>
              <div className="area-body">
                <h3>{area.title}</h3>
                <p>{area.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Areas;
