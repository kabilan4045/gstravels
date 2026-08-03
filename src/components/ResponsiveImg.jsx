// Maps each real source photo to its true pixel width, so the srcset's
// width descriptors are accurate rather than assumed.
const ORIGINAL_WIDTHS = {
  "/images/office/branch-tada.jpg": 1600,
  "/images/team/drivers-team.jpg": 1600,
  "/images/fleet/cars.jpg": 1280,
  "/images/fleet/hero-lineup.jpg": 1600,
  "/images/fleet/tempo-traveller-front.jpg": 1032,
  "/images/fleet/tempo-traveller-rear-branding.jpg": 1600,
  "/images/fleet/tempo-traveller-rear.jpg": 1600,
  "/images/fleet/tour-bus.jpg": 1032,
};

const STEP_WIDTHS = [480, 768, 1024];

export default function ResponsiveImg({
  src,
  alt,
  sizes = "100vw",
  className,
  loading = "lazy",
  fetchPriority,
}) {
  const originalWidth = ORIGINAL_WIDTHS[src];
  const dot = src.lastIndexOf(".");
  const base = src.slice(0, dot);
  const ext = src.slice(dot);

  const srcSet = originalWidth
    ? [
        ...STEP_WIDTHS.filter((w) => w < originalWidth).map(
          (w) => `${base}-${w}w${ext} ${w}w`
        ),
        `${src} ${originalWidth}w`,
      ].join(", ")
    : undefined;

  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={srcSet ? sizes : undefined}
      alt={alt}
      className={className}
      loading={loading}
      fetchPriority={fetchPriority}
    />
  );
}
