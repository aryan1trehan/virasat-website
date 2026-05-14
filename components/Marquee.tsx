const items = [
  "Sarees", "Lehengas", "Sherwanis", "Anarkali Suits",
  "Kurta Sets", "Bridal Wear", "Festive Collections", "Custom Orders",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div
      className="overflow-hidden whitespace-nowrap group"
      style={{ background: "var(--gold)", padding: "13px 0" }}
    >
      <div
        className="inline-flex group-hover:[animation-play-state:paused]"
        style={{ animation: "marquee 28s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-[0.68rem] tracking-[0.28em] uppercase px-8"
            style={{ color: "var(--deep-maroon)" }}
          >
            {item}
            <span className="ml-8 opacity-50">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
