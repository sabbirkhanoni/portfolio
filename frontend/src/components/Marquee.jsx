export function Marquee({ items }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-t border-b border-black py-4">
      <div className="flex gap-12 animate-marquee" style={{ width: "max-content" }}>
        {doubled.map((item, i) => (
          <span key={i} className="font-mono-custom text-xs tracking-[3px] text-black whitespace-nowrap uppercase">
            <span className="text-[#c9a84c] mr-4">✦</span>{item}
          </span>
        ))}
      </div>
    </div>
  );
}