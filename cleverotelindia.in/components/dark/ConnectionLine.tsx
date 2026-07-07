"use client";

export interface ConnectionLineProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  delay: number;
}

export default function ConnectionLine({
  x1,
  y1,
  x2,
  y2,
}: ConnectionLineProps) {
  return (
    <>
      {/* Thin elegant connector line */}
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="#3B82F6"
        strokeWidth="0.3"
        opacity="0.25"
        strokeLinecap="round"
      />
      {/* Small circular connection point at the node end */}
      <circle
        cx={x2}
        cy={y2}
        r="0.8"
        fill="#3B82F6"
        opacity="0.3"
      />
    </>
  );
}
