type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, subtitle, align = "center" }: Props) {
  const a = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${a}`}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-coffee text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground text-balance">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-5 h-[2px] w-16 rounded gradient-gold ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
