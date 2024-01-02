import React from "react";
import { cn } from "../../utils/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface Props extends ButtonProps {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

function Button({
  children,
  variant = "primary",
  size = "md",
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={cn(
        "text-white  rounded-md",
        variant === "primary" && "bg-blue-500",
        variant === "secondary" && "bg-lime-500",
        size === "sm" && "text-sm py-2 px-4",
        size === "md" && "text-sm py-2 px-6",
        size === "lg" && "text-sm py-2 px-6 w-full text-center"
      )}
    >
      {children}
    </button>
  );
}

export default Button;
