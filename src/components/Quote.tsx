function Quote() {
  return (
    <section className="section quote" aria-label="Citação">
      <figure className="container quote-inner reveal">
        <span className="quote-mark" aria-hidden="true">“</span>
        <blockquote>
          A migração é uma expressão da aspiração humana por dignidade,
          segurança e um futuro melhor.
        </blockquote>
        <figcaption>
          <i aria-hidden="true" />
          Ban Ki-moon
        </figcaption>
      </figure>
    </section>
  );
}

export default Quote;
