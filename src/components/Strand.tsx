type StrandProps = {
  className?: string;
  color?: string;
  flip?: boolean;
};

/**
 * Signature element: a single continuous strand line that recurs through
 * the page as a section-transition motif. Not literal hair clipart —
 * a quiet, confident curve that references the product without illustrating it.
 */
export default function Strand({
  className = "",
  color = "var(--sand)",
  flip = false,
}: StrandProps) {
  return (
    <svg
      viewBox="0 0 1400 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
      style={flip ? { transform: "scaleY(-1)" } : undefined}
    >
      <path
        className="strand-path"
        d="M0 80C120 20 240 20 360 55C480 90 600 100 720 60C840 20 960 10 1080 45C1200 80 1300 90 1400 40"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
