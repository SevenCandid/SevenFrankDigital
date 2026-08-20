import { cn } from "@/lib/utils";

interface PlaceholderProps {
  label?: string;
  aspectRatio?: string;
  variant?: "default" | "dark" | "light";
  className?: string;
  children?: React.ReactNode;
}

export function Placeholder({
  label,
  aspectRatio = "aspect-video",
  variant = "default",
  className,
  children,
}: PlaceholderProps) {
  const baseClasses = "relative w-full overflow-hidden";

  const variants = {
    default: "bg-ink/5 text-ink",
    dark: "bg-[#0d0d0d] text-soft-white",
    light: "bg-[#eceae6] text-ink",
  };

  return (
    <div className={cn(baseClasses, aspectRatio, variants[variant], className)}>
      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')",
        }}
      />
      {children ? (
        children
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-sans text-[10px] tracking-[0.2em] uppercase opacity-30">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}
