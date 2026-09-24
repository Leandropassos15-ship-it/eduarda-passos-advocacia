import { useEffect, useRef, useState } from "react";

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
  const [reviewIndex, setReviewIndex] = useState(0);
  const reviewsData = [
  {
    name: "ERIBERTO GOMES",
    info: "1 avaliação",
    initials: "EG",
    text: "“Excelente atendimento e profissionalismo. A Dra. Eduarda transmite muita confiança, esclarece todas as dúvidas com clareza e acompanha o processo com dedicação.”",
  },
  {
    name: "JOÃO VITOR",
    info: "Cliente",
    initials: "JV",
    text: "“Excelente profissional! Muito atenciosa, criteriosa e dedicada no que faz. É extremamente prestativa, acompanha de perto o andamento do caso e mantém o cliente sempre bem informado.”",
  },
  {
    name: "MIGUEL ORTIZ",
    info: "1 avaliação",
    initials: "MO",
    text: "“Consegui resolver meu status migratório no Brasil de forma satisfatória. A Dra. Eduarda é uma profissional bem confiável.”",
  },
  {
    name: "ROBERTA",
    info: "1 avaliação",
    initials: "R",
    text: "“Comprometimento, competência, confiança e transparência. Super indico EP advocacia.”",
  },
];
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
  Assessoria
  <br />
  sem fronteiras
</h1>

<p className="hero-description">
  Assessoria jurídica e imigratória nas áreas de Direito de Família,
  Direito Internacional, Direito Civil e Imigração, com atendimento a
  brasileiros no exterior e regularização de estrangeiros no Brasil.
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
                src="/eduarda-hero.jpeg"
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
      Quando a vida atravessa fronteiras,
      <br />
      o Direito precisa acompanhar.
    </h2>

    <p className="about-description">
      Sou Eduarda Passos, advogada formada pela Universidade Regional do Cariri (URCA), pós-graduada em Direito Internacional, Imigração e Migração pela EB Pós e membro da Comissão de Direito Internacional da OAB/CE.
    </p>

    <a href="#contato" className="about-history-button interactive">
      <span>Conheça minha história</span>
      <ArrowRight size={19} strokeWidth={1.5} />
    </a>
  </div>


  {/* FOTO */}
  <div className="about-photo reveal">
    <img
      src="/eduarda-hero.jpg"
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
        Prevenção de erros
        <br />
        e retrabalho
      </span>
    </div>

    <div className="about-highlight">
      <span className="highlight-icon">
        <Globe2 size={25} strokeWidth={1.4} />
      </span>

      <span>
        Atendimento humanizado
      </span>
    </div>

    <div className="about-highlight">
      <span className="highlight-icon">
        <FileText size={24} strokeWidth={1.4} />
      </span>

      <span>
        Análise individual 
        <br />
        do seu caso
      </span>
    </div>

    <div className="about-highlight">
      <span className="highlight-icon">
        <Users size={25} strokeWidth={1.4} />
      </span>

      <span>
        Organização
        <br />
        documental
      </span>
    </div>

  </div>


  {/* FRASE */}
  <div className="about-quote reveal">

    <blockquote>
      “A migração é uma expressão
      <br />
      da aspiração humana por dignidade,
      <br />
      segurança e um futuro melhor.”
    
    </blockquote>

    <div className="about-quote-line"></div>

    <span>Ban Ki-moon</span>

  </div>

</section>

      {/* ÁREAS DE ATUAÇÃO */}
<section className="areas-section" id="atuacao">

  <div className="areas-header reveal">
    <div>
      <p className="section-eyebrow">ÁREAS DE ATUAÇÃO</p>
    </div>

    <p className="areas-description">
      Uma atuação estratégica para questões que atravessam
      fronteiras, famílias e diferentes momentos da vida.
    </p>
  </div>

  <div className="areas-carousel">

    {/* SETA ESQUERDA */}
    <button
      className="areas-arrow areas-arrow-left"
      aria-label="Áreas anteriores"
      onClick={() => scrollAreas("left")}
    >
      ←
    </button>

    <div className="areas-track" ref={areasTrackRef}>

      {/* CARD 01 — IMIGRAÇÃO */}
      <article
        className="area-card area-card-1 reveal"
        style={{
          backgroundImage: "url('/Card-1imi.png')",
        }}
      >
        <span>01</span>

        <h3>
          Imigração e Regularização no Brasil
        </h3>

        <p>
          Assessoria para estrangeiros que desejam viver,
          trabalhar ou regularizar sua situação no Brasil.
        </p>

        <ArrowRight size={20} strokeWidth={1.5} />
      </article>


      {/* CARD 02 — VISTOS INTERNACIONAIS */}
      <article
        className="area-card area-card-2 reveal"
        style={{
          backgroundImage: "url('/Card-2Vistos.png')",
        }}
      >
        <span>02</span>

        <h3>
          Vistos Internacionais
        </h3>

        <p>
          Atuação em processos relacionados a países como
          Reino Unido, Estados Unidos e Portugal, incluindo
          vistos familiares, profissionais e outras categorias
          migratórias.
        </p>

        <ArrowRight size={20} strokeWidth={1.5} />
      </article>


      {/* CARD 03 — NACIONALIDADE E NATURALIZAÇÃO */}
<article
  className="area-card area-card-3 reveal"
  style={{
    backgroundImage: "url('/Card-3Nacio.png')",
  }}
>
  <span>03</span>

  <h3>
    Nacionalidade e Naturalização
  </h3>

  <p>
    Orientação jurídica para processos de nacionalidade
    e naturalização, análise dos requisitos, documentos
    necessários e acompanhamento das etapas
    correspondentes no Brasil ou no exterior.
  </p>

  <ArrowRight size={20} strokeWidth={1.5} />
</article>


      {/* CARD 04 — DIREITO DE FAMÍLIA INTERNACIONAL */}
<article
  className="area-card area-card-4 reveal"
  style={{
    backgroundImage: "url('/Card-4Vist.png')",
  }}
>
  <span>04</span>

  <h3>
    Vistos
  </h3>

  <p>
    Direito de Família Internacional Atuação em questões como divórcio internacional, guarda de filhos, pensão alimentícia, pacto antenupcial, autorizações envolvendo menores e outras demandas familiares com elementos estrangeiros.
  </p>

  <ArrowRight size={20} strokeWidth={1.5} />
</article>


      {/* CARD 05 — BRASILEIROS NO EXTERIOR */}
      <article
        className="area-card area-card-5 reveal"
        style={{
          backgroundImage: "url('/Card-5Bra.png')",
        }}
      >
        <span>05</span>

        <h3>
          Brasileiros no Exterior e Documentos Internacionais
        </h3>

        <p>
          Orientação em procedimentos no consulado como
          passaporte brasileiro, documentos internacionais e
          questões civis que envolvam Brasil e exterior,
          casamento por procuração e transcrição no Brasil
          de casamento realizado no exterior.
        </p>

        <ArrowRight size={20} strokeWidth={1.5} />
      </article>

    </div>

    {/* SETA DIREITA */}
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
  <div className="international-main reveal">
    <div className="international-copy">
      <p className="section-eyebrow">ATUAÇÃO INTERNACIONAL</p>

      <h2>
        Regularização
        <br />
        migratória
        <br />
        no Brasil.
      </h2>

      <p className="international-text">
        Auxiliamos estrangeiros que desejam morar, trabalhar,
        constituir família ou regularizar sua situação migratória
        no Brasil, com orientação jurídica personalizada em todas
        as etapas aplicáveis.
      </p>

      <a href="#contato" className="international-button interactive">
        <span>FALAR COM A ADVOGADA</span>
        <ArrowRight size={18} strokeWidth={1.5} />
      </a>
    </div>

    <div className="international-visual">
      <div className="international-orbit orbit-one"></div>
      <div className="international-orbit orbit-two"></div>

      <img
  src="/passaporte.png"
  alt="Passaporte brasileiro"
  className="passport-image"
/>
      <div className="international-caption">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div className="international-services">
      <p className="services-title">NOSSOS SERVIÇOS</p>

      <div className="service-list">
        <div className="service-item">
          <span>⌂</span>
          <p>Autorização de Residência no Brasil</p>
        </div>

        <div className="service-item">
          <span>▤</span>
          <p>Registro Migratório de Estrangeiro no Brasil</p>
        </div>

        <div className="service-item">
          <span>▦</span>
          <p>Prorrogação de Estada</p>
        </div>

        <div className="service-item">
          <span>▤</span>
          <p>Certidão de Movimentos Migratórios</p>
        </div>

        <div className="service-item">
          <span>♧</span>
          <p>Naturalização Brasileira</p>
        </div>

        <div className="service-item">
          <span>▣</span>
          <p>Autorização de Residência para fins de trabalho</p>
        </div>

        <div className="service-item">
          <span>▭</span>
          <p>Autorização de Residência para Nômades Digitais</p>
        </div>

        <div className="service-item">
          <span>✈</span>
          <p>Autorização de Viagem para Crianças e Adolescentes</p>
        </div>

        <div className="service-item">
          <span>▣</span>
          <p>Emissão e regularização de CPF para estrangeiros</p>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* COMO PODEMOS AJUDAR */}
<section className="help-section" id="ajuda">
  <div className="help-header reveal">
    <div>
      <p className="section-eyebrow">COMO PODEMOS AJUDAR?</p>

      <h2>
        Encontre o atendimento
        <br />
        adequado para o seu caso.
      </h2>
    </div>
  </div>

  <div className="help-grid">
    <article className="help-card reveal">
      <span className="help-number">01</span>

      <div>
        <h3>Quero morar ou trabalhar no exterior</h3>

        <p>
          Vistos, residência e processos migratórios para Reino Unido,
          Estados Unidos e Portugal.
        </p>
      </div>

      <ArrowRight size={20} strokeWidth={1.5} />
    </article>

    <article className="help-card help-card-dark reveal">
      <span className="help-number">02</span>

      <div>
        <h3>Sou estrangeiro e preciso me regularizar no Brasil</h3>

        <p>
          Residência, registro migratório, CPF, naturalização e outros
          procedimentos.
        </p>
      </div>

      <ArrowRight size={20} strokeWidth={1.5} />
    </article>

    <article className="help-card reveal">
      <span className="help-number">03</span>

      <div>
        <h3>Tenho uma questão familiar entre dois países</h3>

        <p>
          Divórcio, guarda, pensão, pacto antenupcial, casamento e
          autorizações para menores.
        </p>
      </div>

      <ArrowRight size={20} strokeWidth={1.5} />
    </article>

    <article className="help-card reveal">
      <span className="help-number">04</span>

      <div>
        <h3>Preciso resolver documentos entre Brasil e exterior</h3>

        <p>
          Passaporte, transcrição de casamento, casamento por procuração
          e outros documentos com efeitos internacionais.
        </p>
      </div>

      <ArrowRight size={20} strokeWidth={1.5} />
    </article>
  </div>

  <div className="help-cta reveal">
    <p>
      Não encontrou exatamente o que procura?
    </p>

    <a
      href="https://wa.me/558598391959"
      target="_blank"
      rel="noopener noreferrer"
      className="help-whatsapp"
    >
      <span>Falar sobre o caso em específico</span>
      <FaWhatsapp size={18} />
    </a>
  </div>
</section>
{/* AVALIAÇÕES */}
<section className="reviews-section" id="avaliacoes">
  <div className="reviews-editorial">

    {/* CABEÇALHO */}
    <div className="reviews-intro reveal">
      <p className="section-eyebrow">AVALIAÇÕES REAIS</p>

      <h2>
        A confiança dos
        <br />
        nossos clientes
        <br />
        fala por nós.
      </h2>

      <p className="reviews-intro-text">
        São pessoas e famílias que confiaram em nosso trabalho
        e hoje vivem novas histórias, em novos destinos.
      </p>
    </div>

    {/* NOTA GOOGLE */}
    <div className="reviews-google reveal">
      <p className="google-label">AVALIAÇÃO NO GOOGLE</p>

      <div className="google-rating">
        <strong>4,8</strong>

        <div className="google-rating-info">
          <div className="google-stars">★★★★★</div>
          <span>19 avaliações</span>
        </div>
      </div>

      <a
        href="https://www.google.com/maps/place/EP+Advocacia+e+Assessoria+Imigrat%C3%B3ria/@-3.7727251,-38.4780859,17z/data=!4m16!1m9!3m8!1s0x7c745ddba4a031d:0x6a963d5b8caf9358!2sEP+Advocacia+e+Assessoria+Imigrat%C3%B3ria!8m2!3d-3.7727251!4d-38.4780859!9m1!1b1!16s%2Fg%2F11ybvv3gq0!3m5!1s0x7c745ddba4a031d:0x6a963d5b8caf9358!8m2!3d-3.7727251!4d-38.4780859!16s%2Fg%2F11ybvv3gq0?entry=ttu"
        target="_blank"
        rel="noopener noreferrer"
        className="google-profile-link"
      >
        <span className="google-letter">G</span>

        <span className="google-profile-text">
          <strong>EP Advocacia e Assessoria Imigratória</strong>
          <small>VER AVALIAÇÕES NO GOOGLE →</small>
        </span>
      </a>
    </div>

    {/* FOTO */}
    <div className="reviews-photo reveal">
      <img
        src="/eduarda-sobre.jpg"
        alt="Eduarda Passos, advogada"
      />
    </div>

    {/* DEPOIMENTOS */}
    <div className="reviews-carousel reveal">

  <button
    type="button"
    className="reviews-arrow reviews-arrow-left"
    aria-label="Avaliação anterior"
    onClick={() =>
      setReviewIndex(
        (reviewIndex - 1 + reviewsData.length) % reviewsData.length
      )
    }
  >
    ←
  </button>

  {[0, 1, 2].map((offset) => {
    const review =
      reviewsData[(reviewIndex + offset) % reviewsData.length];

    return (
      <article
        key={`${review.name}-${reviewIndex}-${offset}`}
        className={`review-slide ${
          offset === 1
            ? "review-slide-dark"
            : "review-slide-light"
        }`}
      >
        <div className="review-slide-stars">★★★★★</div>

        <blockquote>{review.text}</blockquote>

        <div className="review-person">
          <div className="review-avatar">
            {review.initials}
          </div>

          <div>
            <strong>{review.name}</strong>
            <span>{review.info}</span>
          </div>
        </div>
      </article>
    );
  })}

  <button
    type="button"
    className="reviews-arrow reviews-arrow-right"
    aria-label="Próxima avaliação"
    onClick={() =>
      setReviewIndex(
        (reviewIndex + 1) % reviewsData.length
      )
    }
  >
    →
  </button>

</div>

    {/* INDICADORES */}
    <div className="reviews-dots reveal">
  {reviewsData.map((_, index) => (
    <button
      key={index}
      type="button"
      className={reviewIndex === index ? "active" : ""}
      aria-label={`Ir para avaliação ${index + 1}`}
      onClick={() => setReviewIndex(index)}
    />
  ))}
</div>

    {/* DIFERENCIAIS */}
    <div className="reviews-benefits reveal">

      <div className="reviews-benefit">
        <Scale size={30} strokeWidth={1.2} />
        <span>
          ATENDIMENTO
          <br />
          DE EXCELÊNCIA
        </span>
      </div>

      <div className="reviews-benefit">
        <Users size={30} strokeWidth={1.3} />
        <span>
          SEGURANÇA
          <br />
          EM CADA PROCESSO
        </span>
      </div>

      <div className="reviews-benefit">
        <Globe2 size={30} strokeWidth={1.2} />
        <span>
          SUPORTE EM
          <br />
          NOVOS COMEÇOS
        </span>
      </div>

    </div>

    {/* FRASE FINAL */}
    <div className="reviews-signature reveal">
      <span>
        “CONFIANÇA TAMBÉM SE CONSTRÓI COM RESULTADOS REAIS.”
      </span>

      <div className="signature-mark">EP</div>
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