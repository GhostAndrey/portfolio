const items = [
  "Unity",
  "C#",
  "Go",
  "Next.js",
  "Game feel",
  "Systems design",
  "World building",
  "Co-op",
  "Horror",
  "UI / UX",
  "Prototyping",
];

export function Marquee() {
  const loop = [...items, ...items];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {loop.map((item, index) => (
          <span className="marquee__item" key={`${item}-${index}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
