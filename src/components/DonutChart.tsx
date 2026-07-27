import { useEffect, useRef, useState } from "react";

interface DonutChartProps {
  /** Porcentaje a mostrar, se recorta automáticamente entre 0 y 100 */
  percentage: number;
  /** Diámetro total del componente en px */
  size?: number;
  /** Grosor del anillo en px */
  strokeWidth?: number;
  /** Duración de la animación de llenado en ms */
  duration?: number;
  /** Texto opcional debajo del porcentaje (ej. "Completado") */
  label?: string;
  /** Color del riel de fondo (el "vacío" sin llenar) */
  trackColor?: string;
  /** Permite personalizar el color según el porcentaje (ej. verde/amarillo/rojo) */
  getColor?: (percentage: number) => string;
  className?: string;
}

const defaultGetColor = (percentage: number): string => {
  if (percentage < 40) return "#ef4444"; // red-500
  if (percentage < 70) return "#f59e0b"; // amber-500
  return "#22c55e"; // green-500
};

export default function DonutChart({
  percentage,
  size = 160,
  strokeWidth = 12,
  duration = 900,
  label,
  trackColor = "#e5e7eb", // gray-200
  getColor = defaultGetColor,
  className = "",
}: DonutChartProps) {
  const clamped = Math.min(100, Math.max(0, percentage));
  const [animated, setAnimated] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const start = performance.now();
    const from = animated;
    const to = clamped;

    const step = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setAnimated(from + (to - from) * eased);
      if (t < 1) rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [clamped, duration]);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (animated / 100) * circumference;
  const color = getColor(clamped);

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
      role="progressbar"
      aria-valuenow={Math.round(clamped)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={trackColor}
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: "stroke 0.3s ease" }}
        />
      </svg>

      <div className="absolute flex flex-col items-center justify-center px-2 text-center">
        <span
          className="font-bold leading-none tabular-nums"
          style={{ color, fontSize: size * 0.22 }}
        >
          {Math.round(animated)}%
        </span>
        {label && (
          <span
            className="mt-1 font-medium text-gray-500 leading-tight"
            style={{ fontSize: size * 0.08 }}
          >
            {label}
          </span>
        )}
      </div>
    </div>
  );
}