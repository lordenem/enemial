import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  /** `wide` for hero/feature rows, `narrow` for long-form reading columns. */
  width?: "default" | "wide" | "narrow";
};

const widths = {
  default: "max-w-6xl",
  wide: "max-w-7xl",
  narrow: "max-w-3xl",
} as const;

export function Container({
  children,
  className,
  width = "default",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-5 sm:px-6 lg:px-8 ${widths[width]} ${
        className ?? ""
      }`}
    >
      {children}
    </div>
  );
}
