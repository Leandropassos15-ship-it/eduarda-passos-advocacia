import { useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import About from "./components/About";
import Help from "./components/Help";
import Areas from "./components/Areas";
import Regularization from "./components/Regularization";
import Reviews from "./components/Reviews";
import Quote from "./components/Quote";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function useReveal() {
  useEffect(() => {
    // A classe "reveal-ready" é aplicada em index.html antes da primeira pintura.
    const root = document.documentElement;
    const elements = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      root.classList.remove("reveal-ready");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
}

function App() {
  useReveal();

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Nav />
      <main id="conteudo">
        <Hero />
        <TrustBar />
        <About />
        <Help />
        <Areas />
        <Regularization />
        <Reviews />
        <Quote />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
