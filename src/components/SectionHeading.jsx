export default function SectionHeading({ eyebrow, title, description, center }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-wide text-brand-accent">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-2 text-3xl font-bold text-brand-primary sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base text-slate-600">{description}</p>
      )}
    </div>
  );
}
