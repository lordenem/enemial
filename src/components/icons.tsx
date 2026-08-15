import type { SVGProps } from "react";

/**
 * Hand-rolled line-icon set so the site does not depend on an icon package.
 * All icons share a 24x24 box, 1.5 stroke width, and inherit `currentColor`.
 */

type IconProps = SVGProps<SVGSVGElement>;

function Icon({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

/** Software development — angle brackets over a terminal caret. */
export function CodeIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M8.5 8.5 5 12l3.5 3.5" />
      <path d="M15.5 8.5 19 12l-3.5 3.5" />
      <path d="M13.2 6.5 10.8 17.5" />
    </Icon>
  );
}

/** Data & analytics — bar chart with a trend line. */
export function ChartIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 19h16" />
      <path d="M7 19v-5" />
      <path d="M12 19V9" />
      <path d="M17 19v-8" />
      <path d="m5.5 9.5 4-3.5 3.5 2.5L19 4" />
    </Icon>
  );
}

/** Data engineering — nodes joined into a pipeline. */
export function PipelineIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3" y="4" width="6" height="5" rx="1.5" />
      <rect x="15" y="15" width="6" height="5" rx="1.5" />
      <path d="M6 9v4.5A3.5 3.5 0 0 0 9.5 17H15" />
      <path d="M12.5 14.5 15 17l-2.5 2.5" />
    </Icon>
  );
}

/** Data science — scatter points with a fitted curve. */
export function InsightIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 4v16h16" />
      <path d="M7 16c3.5 0 4.5-7 10-9" />
      <circle cx="8.5" cy="13.5" r="1.1" />
      <circle cx="12.5" cy="10" r="1.1" />
      <circle cx="16" cy="7.5" r="1.1" />
    </Icon>
  );
}

/** Products — layered stack. */
export function StackIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z" />
      <path d="m4 12 8 4.5 8-4.5" />
      <path d="m4 16.5 8 4.5 8-4.5" />
    </Icon>
  );
}

/** Services — interlocking handshake-style rings. */
export function ServicesIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="8" cy="12" r="4.5" />
      <circle cx="16" cy="12" r="4.5" />
    </Icon>
  );
}

/** Document with a signature stroke — used for Attestway. */
export function SignatureIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M6 3h7l5 5v9a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Z" />
      <path d="M13 3v5h5" />
      <path d="M6.5 16c1.8 0 2-4 3.4-4 1 0 .9 2.2 2 2.2.8 0 1.1-1.2 2.1-1.2" />
    </Icon>
  );
}

/** Calendar with a spark — used for FunInvite. */
export function InviteIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3" y="5" width="18" height="16" rx="2.5" />
      <path d="M3 10h18" />
      <path d="M8 3v4M16 3v4" />
      <path d="m12 13 .9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9L12 13Z" />
    </Icon>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </Icon>
  );
}

export function ExternalLinkIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M14 4h6v6" />
      <path d="m20 4-8.5 8.5" />
      <path d="M18 14.5V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.5" />
    </Icon>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="m4.5 12.5 5 5 10-11" />
    </Icon>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </Icon>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M7 3.5h2.2l1.5 4-2 1.4a11.5 11.5 0 0 0 5.4 5.4l1.4-2 4 1.5V16a3.5 3.5 0 0 1-3.9 3.5A15.5 15.5 0 0 1 3.5 7.4 3.5 3.5 0 0 1 7 3.5Z" />
    </Icon>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </Icon>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Icon>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </Icon>
  );
}

/** Icons selectable from data files (see `@/data/services`). */
export const icons = {
  code: CodeIcon,
  chart: ChartIcon,
  pipeline: PipelineIcon,
  insight: InsightIcon,
  stack: StackIcon,
  services: ServicesIcon,
  signature: SignatureIcon,
  invite: InviteIcon,
} as const;

export type IconName = keyof typeof icons;
