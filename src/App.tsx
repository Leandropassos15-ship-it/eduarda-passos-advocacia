import { useEffect, useRef } from "react";

import {
  ArrowRight,
  Scale,
  Globe2,
  FileText,
  Users,
} from "lucide-react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

import { SiTiktok } from "react-icons/si";
import "./App.css";

function App() {
  const areasTrackRef = useRef<HTMLDivElement>(null);

  const scrollAreas = (direction: "left" | "right") => {
    if (!areasTrackRef.current) return;

    const amount = areasTrackRef.current.clientWidth * 0.85;

    areasTrackRef.current.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <header className="hero-header">
          <a href="#" className="brand">
            <span className="brand-monogram">EP</span>

            <span className="brand-name">
              EDUARDA PASSOS
              <small>ADVOCACIA INTERNACIONAL</small>
            </span>
          </a>

          <nav className="navigation">
  <a href="#inicio">Início</a>
  <a href="#sobre">Sobre</a>
  <a href="#atuacao">Áreas de atuação</a>
  <a href="#conteudos">Conteúdos</a>
  <a href="#contato">Contato</a>
</nav>

          <div className="social-links">
            <a
              href="https://www.instagram.com/adv.eduardapassos/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="social-link"
            >
              <FaInstagram size={17} />
            </a>

            <a
  href="https://www.linkedin.com/in/eduarda-passos-908a95156/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="LinkedIn"
  className="social-link"
>
  <FaLinkedinIn size={17} />
</a>

            <a
  href="https://wa.me/558598391959"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="WhatsApp"
  className="social-link"
>
  <FaWhatsapp size={18} />
</a>
          </div>
        </header>

        <div className="hero-content" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow">MAIS QUE DIREITO.</p>

            <h1>
              Novos
              <br />
              começos.
            </h1>

            <p className="hero-description">
              Assessoria jurídica especializada em imigração,
              nacionalidade, vistos e Direito de Família, com
              atendimento no Brasil e no exterior.
            </p>

            <a href="#contato" className="hero-button">
              <span>Agende sua consulta</span>
              <ArrowRight size={18} strokeWidth={1.5} />
            </a>

            <div className="hero-location">
              <span>BRASIL</span>
              <i></i>
              <span>MUNDO</span>
            </div>
          </div>

          <div className="hero-image-area">
            <div className="hero-image-placeholder">
              <img
                src="/eduarda-hero.jpg"
                alt="Eduarda Passos, advogada"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="about-section" id="sobre">

  {/* TEXTO */}
  <div className="about-intro reveal">
    <p className="section-eyebrow">SOBRE MIM</p>

    <h2>
      Mais do que processos,
      <br />
      eu cuido de pessoas.
    </h2>

    <p className="about-description">
      Sou Eduarda Passos, advogada, atuo com Direito Internacional,
      Imigração, Nacionalidade, Vistos e Direito de Família, com foco
      em soluções jurídicas personalizadas e humanizadas.
    </p>

    <a href="#contato" className="about-history-button interactive">
      <span>Conheça minha história</span>
      <ArrowRight size={19} strokeWidth={1.5} />
    </a>
  </div>


  {/* FOTO */}
  <div className="about-photo reveal">
    <img
      src="/eduarda-sobre.jpg"
      alt="Eduarda Passos"
    />
  </div>


  {/* DIFERENCIAIS */}
  <div className="about-highlights reveal">

    <div className="about-highlight">
      <span className="highlight-icon">
        <Scale size={25} strokeWidth={1.4} />
      </span>

      <span>
        Atendimento
        <br />
        personalizado
      </span>
    </div>

    <div className="about-highlight">
      <span className="highlight-icon">
        <Globe2 size={25} strokeWidth={1.4} />
      </span>

      <span>
        Brasil e exterior
      </span>
    </div>

    <div className="about-highlight">
      <span className="highlight-icon">
        <FileText size={24} strokeWidth={1.4} />
      </span>

      <span>
        Estratégia em
        <br />
        todas as etapas
      </span>
    </div>

    <div className="about-highlight">
      <span className="highlight-icon">
        <Users size={25} strokeWidth={1.4} />
      </span>

      <span>
        Sua história no
        <br />
        centro da decisão
      </span>
    </div>

  </div>


  {/* FRASE */}
  <div className="about-quote reveal">

    <blockquote>
      “O mundo é grande
      <br />
      para quem tem
      <br />
      orientação.”
    </blockquote>

    <div className="about-quote-line"></div>

    <span>Eduarda Passos</span>

  </div>

</section>

      {/* ÁREAS DE ATUAÇÃO */}
      <section className="areas-section" id="atuacao">
        
        <div className="areas-header reveal">
          <div>
            <p className="section-eyebrow">ÁREAS DE ATUAÇÃO</p>

            <h2>
              Soluções jurídicas
              <br />
              para novos caminhos.
            </h2>
          </div>

          <p className="areas-description">
            Uma atuação estratégica para questões que atravessam
            fronteiras, famílias e diferentes momentos da vida.
          </p>
        </div>

        <div className="areas-carousel">
  <button
  className="areas-arrow areas-arrow-left"
  aria-label="Áreas anteriores"
  onClick={() => scrollAreas("left")}
>
  ←
</button>

  <div className="areas-track" ref={areasTrackRef}>
    <article className="area-card area-card-1 reveal">
      <span>01</span>
      <h3>Imigração</h3>
      <p>
        Orientação jurídica para processos e estratégias
        relacionadas à imigração.
      </p>
      <ArrowRight size={20} strokeWidth={1.5} />
    </article>

    <article className="area-card area-card-2 reveal">
      <span>02</span>
      <h3>Nacionalidade</h3>
      <p>
        Assessoria em processos de reconhecimento e obtenção
        de nacionalidade.
      </p>
      <ArrowRight size={20} strokeWidth={1.5} />
    </article>

    <article className="area-card area-card-3 reveal">
      <span>03</span>
      <h3>Naturalização</h3>
      <p>
        Acompanhamento jurídico para processos de naturalização
        em diferentes contextos.
      </p>
      <ArrowRight size={20} strokeWidth={1.5} />
    </article>

    <article className="area-card area-card-4 reveal">
      <span>04</span>
      <h3>Vistos</h3>
      <p>
        Orientação sobre possibilidades e procedimentos
        relacionados a vistos.
      </p>
      <ArrowRight size={20} strokeWidth={1.5} />
    </article>

    <article className="area-card area-card-5 reveal">
      <span>05</span>
      <h3>Direito de Família</h3>
      <p>
        Assessoria jurídica para questões familiares no Brasil
        e em contextos internacionais.
      </p>
      <ArrowRight size={20} strokeWidth={1.5} />
    </article>
  </div>

  <button
  className="areas-arrow areas-arrow-right"
  aria-label="Próximas áreas"
  onClick={() => scrollAreas("right")}
>
  →
</button>
</div>
      </section>
      {/* ATUAÇÃO INTERNACIONAL */}
<section className="international-section">
  <div className="international-content reveal">
    <p className="section-eyebrow">ATUAÇÃO INTERNACIONAL</p>

    <h2>
      Conectando você
      <br />
      ao mundo.
    </h2>

    <p className="international-text">
      Com uma visão global e conhecimento em diferentes jurisdições,
      ofereço suporte jurídico para brasileiros no exterior e
      estrangeiros no Brasil.
    </p>
  </div>

  <div className="international-visual reveal">
    <div className="international-circle">
      <div className="passport-icon">
        <span className="passport-symbol">✦</span>
        <span className="passport-title">PASSAPORTE</span>
      </div>

      <div className="airplane-icon">✈</div>
    </div>

    <div className="international-orbit orbit-one"></div>
    <div className="international-orbit orbit-two"></div>
  </div>
</section>
      {/* CONTEÚDOS */}
      <section className="content-section" id="conteudos">
        <div className="content-header reveal">
          <div>
            <p className="section-eyebrow">CONTEÚDOS</p>

            <h2>
              Informação para
              <br />
              novas decisões.
            </h2>
          </div>

          <p className="content-description">
            Conteúdos jurídicos para ajudar você a compreender seus
            direitos, possibilidades e os próximos passos da sua história.
          </p>
        </div>

        <div className="content-grid">
          <article className="content-card reveal">
            <span className="content-number">01</span>

            <div>
              <p className="content-category">IMIGRAÇÃO</p>

              <h3>
                Antes de
                <br />
                mudar de país.
              </h3>

              <p>
                Informações importantes para quem está planejando viver,
                estudar ou trabalhar no exterior.
              </p>
            </div>

            <a
              href="https://www.youtube.com/@Adv.eduardapassos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Ver conteúdos</span>
              <ArrowRight size={17} strokeWidth={1.5} />
            </a>
          </article>

          <article className="content-card content-card-dark reveal">
            <span className="content-number">02</span>

            <div>
              <p className="content-category">NACIONALIDADE</p>

              <h3>
                Seus direitos
                <br />
                além das fronteiras.
              </h3>

              <p>
                Conteúdos sobre nacionalidade, naturalização e questões
                jurídicas relacionadas à vida internacional.
              </p>
            </div>

            <a
              href="https://www.tiktok.com/@adv.eduardapassos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Ver conteúdos</span>
              <ArrowRight size={17} strokeWidth={1.5} />
            </a>
          </article>

          <article className="content-card reveal">
            <span className="content-number">03</span>

            <div>
              <p className="content-category">DIREITO DE FAMÍLIA</p>

              <h3>
                Direito que
                <br />
                acolhe histórias.
              </h3>

              <p>
                Reflexões e orientações sobre questões familiares no Brasil
                e em contextos internacionais.
              </p>
            </div>

            <a
              href="https://www.instagram.com/adv.eduardapassos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Ver conteúdos</span>
              <ArrowRight size={17} strokeWidth={1.5} />
            </a>
          </article>
        </div>

        <div className="content-social reveal">
          <h3>
            Acompanhe
            <br />
            meu trabalho.
          </h3>

          <div className="content-social-links">
            <a
              href="https://www.instagram.com/adv.eduardapassos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={16} />
              <span>Instagram</span>
            </a>

            <a
              href="https://www.tiktok.com/@adv.eduardapassos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiTiktok size={15} />
              <span>TikTok</span>
            </a>

            <a
              href="https://www.youtube.com/@Adv.eduardapassos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size={17} />
              <span>YouTube</span>
            </a>
          </div>
        </div>
      </section>
{/* DEPOIMENTO + CTA */}
<section className="quote-cta-section">
  <div className="quote-block reveal">
    <span className="quote-mark">“</span>

    <blockquote>
      Cada cliente tem uma história.
      <br />
      É por elas que eu trabalho.
    </blockquote>

    <span className="quote-author">Eduarda Passos</span>
  </div>

  <div className="cta-block reveal">
    <p className="section-eyebrow">VAMOS CONVERSAR?</p>

    <h2>
      Orientação jurídica
      <br />
      para novas possibilidades.
    </h2>

    <a
  href="https://wa.me/558598391959"
  target="_blank"
  rel="noopener noreferrer"
  className="cta-button interactive"
>
  <span>Fale comigo!</span>
  <ArrowRight size={18} strokeWidth={1.5} />
</a>

    <p className="cta-info">
      Atendimento online e presencial
      <br />
      Brasil e exterior
    </p>
  </div>
</section>
{/* FOOTER */}
<footer className="site-footer" id="contato">
  <div className="footer-main">
    <a href="#inicio" className="footer-brand">
      <span className="footer-monogram">EP</span>

      <span className="footer-brand-name">
        EDUARDA PASSOS
        <small>ADVOCACIA INTERNACIONAL</small>
      </span>
    </a>

    <nav className="footer-navigation">
      <a href="#inicio">Início</a>
      <a href="#sobre">A advogada</a>
      <a href="#atuacao">Especialidades</a>
      <a href="#conteudos">Conteúdos</a>
      <a href="#contato">Contato</a>
    </nav>

    <div className="footer-social">
  <a
    href="https://www.instagram.com/adv.eduardapassos/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    title="Instagram"
  >
    <FaInstagram size={17} />
  </a>

  <a
    href="https://www.linkedin.com/in/eduarda-passos-908a95156/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    title="LinkedIn"
  >
    <FaLinkedinIn size={17} />
  </a>

  <a
    href="https://www.tiktok.com/@adv.eduardapassos"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="TikTok"
    title="TikTok"
  >
    <SiTiktok size={16} />
  </a>

  <a
    href="https://www.youtube.com/@Adv.eduardapassos"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="YouTube"
    title="YouTube"
  >
    <FaYoutube size={18} />
  </a>

  <a
    href="https://wa.me/558598391959"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
    title="WhatsApp"
  >
    <FaWhatsapp size={18} />
  </a>
</div>

    <p className="footer-slogan">
      Direito que conecta
      <br />
      você ao próximo capítulo.
    </p>
  </div>

  <div className="footer-bottom">
    <span>© 2026 Eduarda Passos. Todos os direitos reservados.</span>
    <span>Advocacia Internacional</span>
  </div>
</footer>
    </main>
  );
}

export default App;