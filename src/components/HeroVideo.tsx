import { useEffect, useRef, useState } from "react";

const POSTER = "/video/hero-bandeiras-poster.webp";
const VIDEO_RATIO = 714 / 1920;
/** Faixa vertical das bandeiras dentro do vídeo (do topo dos mastros à base dos tecidos). */
const FLAGS_TOP = 0.11;
const FLAGS_BOTTOM = 0.8;

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

/** Posição vertical de um elemento dentro do HERO, ignorando transformações de animação. */
function offsetWithin(element: HTMLElement | null, container: HTMLElement) {
  let top = 0;
  let node: HTMLElement | null = element;
  while (node && node !== container) {
    top += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }
  return node === container ? top : null;
}

/**
 * Fundo do HERO: vídeo em loop (10 s) das cinco bandeiras gerado a partir da
 * foto de referência. No celular, a faixa do vídeo é posicionada no espaço
 * livre entre os botões e a foto, para as bandeiras não ficarem sob o texto.
 */
function HeroVideo() {
  const rootRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reducedMotion, setReducedMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia(reducedMotionQuery).matches
  );
  const [src] = useState(() =>
    typeof window !== "undefined" && window.innerWidth < 640
      ? "/video/hero-bandeiras-960.mp4"
      : "/video/hero-bandeiras-1920.mp4"
  );

  useEffect(() => {
    const query = window.matchMedia(reducedMotionQuery);
    const onChange = (event: MediaQueryListEvent) => setReducedMotion(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  // Posiciona a faixa do vídeo conforme o layout real
  useEffect(() => {
    const root = rootRef.current;
    const hero = root?.parentElement;
    if (!root || !hero) return;

    const place = () => {
      const width = hero.clientWidth;
      const bandHeight = width * VIDEO_RATIO;
      let top = width >= 1024 ? 44 : 36;

      if (width < 640) {
        const actions = hero.querySelector<HTMLElement>(".hero-actions");
        const stage = hero.querySelector<HTMLElement>(".hero-stage");
        const actionsTop = offsetWithin(actions, hero);
        const stageTop = offsetWithin(stage, hero);
        if (actions && actionsTop !== null && stageTop !== null) {
          const gapTop = actionsTop + actions.offsetHeight;
          const flagsHeight = bandHeight * (FLAGS_BOTTOM - FLAGS_TOP);
          top = gapTop + (stageTop - gapTop - flagsHeight) / 2 - bandHeight * FLAGS_TOP;
          root.style.setProperty("--hero-gap-top", `${gapTop}px`);
        }
      }

      root.style.setProperty("--band-top", `${Math.round(top)}px`);
      root.style.setProperty("--band-height", `${Math.round(bandHeight)}px`);
    };

    place();
    const observer = new ResizeObserver(place);
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  // Reproduz apenas quando o HERO está visível e a aba está ativa
  useEffect(() => {
    const video = videoRef.current;
    const root = rootRef.current;
    if (!video || !root || reducedMotion) return;

    video.muted = true;
    video.defaultMuted = true;
    let inView = true;

    const sync = () => {
      if (inView && !document.hidden) {
        video.play().catch(() => {
          /* autoplay bloqueado: o pôster continua visível */
        });
      } else {
        video.pause();
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      sync();
    });
    observer.observe(root);
    document.addEventListener("visibilitychange", sync);
    sync();

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
      video.pause();
    };
  }, [reducedMotion]);

  return (
    <div className="hero-sky" ref={rootRef} aria-hidden="true">
      <div className="hero-band">
        {reducedMotion ? (
          <img className="hero-band-media" src={POSTER} alt="" width={1920} height={714} decoding="async" />
        ) : (
          <video
            ref={videoRef}
            className="hero-band-media"
            src={src}
            poster={POSTER}
            width={1920}
            height={714}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            disablePictureInPicture
            tabIndex={-1}
          />
        )}
      </div>
      <div className="hero-veil" />
    </div>
  );
}

export default HeroVideo;
