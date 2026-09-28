import Link from "next/link";
import React, { type ReactNode, type CSSProperties } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost";

export interface ButtonProps {
  variant?: ButtonVariant;
  className?: string;
  style?: CSSProperties;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  className = "",
  style,
  href,
  onClick,
  type = "button",
  disabled,
  children,
}: ButtonProps) {
  const variantClass =
    variant === "primary" ? "btn-primary" : variant === "secondary" ? "btn-secondary" : "btn-ghost";
  const combinedClass = `${variantClass} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={combinedClass} style={style} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedClass}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
