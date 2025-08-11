import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-[#02BAD6] text-white shadow-xs hover:bg-[#1b1e3f] hover:text-white", // Bleu clair en fond, hover bleu foncé
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outline:
          "border border-[#02BAD6] text-[#1b1e3f] bg-white hover:bg-[#02BAD6] hover:text-white",
        secondary:
          "bg-[#1b1e3f] text-white shadow-xs hover:bg-[#02BAD6] hover:text-white",
        ghost:
          "text-[#1b1e3f] hover:bg-[#02BAD6]/20 hover:text-[#1b1e3f]",
        link:
          "text-[#02BAD6] underline-offset-4 hover:underline",
        send:
          "bg-[#edeff5] rounded-none text-[#02BAD6] shadow-xs hover:bg-[#1b1e3f] hover:text-white transition-colors duration-300 cursor-pointer",
        read:
          "bg-[#13727B] rounded-none text-white shadow-xs hover:bg-[#1b1e3f] hover:text-white transition ease-out duration-300 cursor-pointer",
        submit:
          "bg-[#02BAD6] text-white rounded-none shadow-xs hover:bg-[#1b1e3f] hover:text-white transition ease-out duration-300 cursor-pointer",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 px-6 has-[>svg]:px-4",
        xlg: "h-16 w-auto px-4 has-[>svg]:px-6",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
