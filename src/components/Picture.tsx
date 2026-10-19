type PictureProps = {
  base: string;
  widths: number[];
  alt: string;
  sizes: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
};

/** Imagem WebP responsiva gerada a partir dos originais em /public. */
function Picture({
  base,
  widths,
  alt,
  sizes,
  width,
  height,
  className,
  priority = false,
}: PictureProps) {
  return (
    <img
      className={className}
      src={`${base}-${widths[widths.length - 1]}.webp`}
      srcSet={widths.map((w) => `${base}-${w}.webp ${w}w`).join(", ")}
      sizes={sizes}
      width={width}
      height={height}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
    />
  );
}

export default Picture;
