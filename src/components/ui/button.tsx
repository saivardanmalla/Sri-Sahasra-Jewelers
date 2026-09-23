import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-sans text-[11px] font-medium uppercase tracking-[0.22em] transition-[color,background-color,border-color,transform,opacity] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
  {
    variants: {
      variant: {
        gold: "bg-gold text-fg hover:bg-gold-deep hover:text-bg",
        outline:
          "border border-fg/25 bg-transparent text-fg hover:border-gold hover:text-gold-deep",
        ghost: "text-fg hover:text-gold-deep",
        light:
          "border border-bg/55 bg-transparent text-bg hover:border-gold hover:text-gold",
      },
      size: {
        default: "px-7 py-3.5",
        sm: "px-4 py-2.5",
        lg: "px-9 py-4",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "gold",
      size: "default",
    },
  },
);

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export { buttonVariants };
