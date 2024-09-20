
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center px-3.5 justify-center border border-default whitespace-nowrap hover:shadow rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      color: {
        default: "bg-primary text-primary-foreground border-primary hover:bg-primary/90",
        primary: "bg-primary text-primary-foreground border-primary hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground border-secondary hover:bg-secondary/80",
        success: "bg-success text-success-foreground hover:bg-success/80 border-success",
        info: "bg-info text-info-foreground hover:bg-info/80 border-info",
        warning: "bg-warning text-warning-foreground hover:bg-warning/80 border-warning",
        danger: "bg-danger text-danger-foreground hover:bg-danger/90 border-danger",

      },
      variant: {
        default:"",
        ghost: "bg-transparent hover:bg-primary/10 hover:text-default-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        outline: "bg-transparent hover:bg-default/10  text-default   ",
      },
      size: {
        sm: "h-8 text-xs rounded-md px-3",
        md: "h-9 ",
        lg: "h-11 rounded-md px-8",
        icon: "h-8 w-8 p-0  rounded-full",
      },
    },
    compoundVariants: [
      {
        variant: "outline",
        color:"primary",
        className:"text-primary"
      },
      {
        variant: "outline",
        color:"secondary",
        className:"text-default-400"
      },
      {
        variant: "outline",
        color:"info",
        className:"text-info"
      },
      {
        variant: "outline",
        color:"warning",
        className:"text-warning"
      },
      {
        variant: "outline",
        color:"danger",
        className:"text-danger"
      },
      {
        variant: "outline",
        color:"success",
        className:"text-success"
      },
    ],
    defaultVariants: {
      color: "default",
      size: "md",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean,
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, color, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, color, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
