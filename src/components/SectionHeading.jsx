export default function SectionHeading({ eyebrow, title, description, center }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <div className="text-eyebrow text-brand-primary-dark">{eyebrow}</div>
      )}
      <h2 className="text-display-l mt-3 text-brand-ink">{title}</h2>
      {description && (
        <p className="mt-3 text-base text-brand-ink/65">{description}</p>
      )}
    </div>
  );
}
