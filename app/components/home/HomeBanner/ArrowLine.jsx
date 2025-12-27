export default function ArrowLine({ lineRef, dotRef, reverse = false }) {
  return (
    <svg
      width="180"
      height="20"
      viewBox="0 0 180 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        ref={dotRef}
        cx={reverse ? 170 : 10}
        cy="10"
        r="4"
        fill="white"
      />
      <path
        ref={lineRef}
        d={reverse ? "M160 10 L20 10" : "M20 10 L160 10"}
        stroke="white"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}
