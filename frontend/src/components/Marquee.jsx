export function Marquee({ items }) {
  const doubled = [...items, ...items, ...items];
  return (
    <div className="overflow-hidden border-y border-white/10 py-3 my-6 bg-gradient-to-r from-black/60 via-[#0a151d]/70 to-black/60 backdrop-blur-md relative">
      <div className="flex gap-10 animate-marquee" style={{ width: "max-content" }}>
        {doubled.map((item, i) => (
          <span key={i} className="font-mono text-xs tracking-[3px] text-gray-300 whitespace-nowrap uppercase flex items-center">
            <span className="text-[rgb(8,165,202)] mr-3 text-sm animate-pulse">✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}