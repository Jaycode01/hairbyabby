import { ImageIcon } from "lucide-react";

type PlaceholderImageProps = {
  label: string;
  className?: string;
  tone?: "charcoal" | "sage" | "sand" | "cream";
  aspect?: string;
};

const tones: Record<string, string> = {
  charcoal: "from-[#3d3b3f] to-[#5f6062]",
  sage: "from-[#c9dcb3] to-[#a9c187]",
  sand: "from-[#c6ca53] to-[#a9ac3f]",
  cream: "from-[#efece2] to-[#d9d4c4]",
};
export default function PlaceholderImage({
  label,
  className = "",
  tone = "charcoal",
  aspect = "aspect-[4/5]",
}: PlaceholderImageProps) {
  const isDark = tone === "charcoal";
  return (
    <div
      className={`relative overflow-hidden rounded-sm bg-gradient-to-br ${tones[tone]} ${aspect} ${className}`}
    >
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 14px)",
          color: isDark ? "#fff" : "#211f21",
        }}
      />
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center ${
          isDark ? "text-white/70" : "text-ink/50"
        }`}
      >
        <ImageIcon size={22} strokeWidth={1.5} />
        <span className="font-body text-[11px] uppercase tracking-[0.15em]">
          {label}
        </span>
      </div>
    </div>
  );
}
