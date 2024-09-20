import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const inputVariants = cva(
  " w-full   border  px-2  rounded  text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium  read-only:leading-9 read-only:bg-background  disabled:cursor-not-allowed disabled:opacity-50  transition duration-300 ",
  {
    variants: {
      color: {
        default:
          "border-default-200 text-default focus:outline-none focus:border-primary disabled:bg-default-200  placeholder:text-accent-foreground/50",
        primary:
          "border-primary text-primary focus:outline-none focus:border-primary-700 disabled:bg-primary/30 disabled:placeholder:text-primary  placeholder:text-primary/70",
        info: "border-info/50 text-info focus:outline-none focus:border-info-700 disabled:bg-info/30 disabled:placeholder:text-info  placeholder:text-info/70",
        warning:
          "border-warning/50 text-warning focus:outline-none focus:border-warning-700 disabled:bg-warning/30 disabled:placeholder:text-info  placeholder:text-warning/70",
        success:
          "border-success/50 text-success focus:outline-none focus:border-success-700 disabled:bg-success/30 disabled:placeholder:text-info  placeholder:text-success/70",
        danger:
          "border-danger/50 text-danger focus:outline-none focus:border-danger-700 disabled:bg-danger/30 disabled:placeholder:text-danger  placeholder:text-danger/70",
      },
      size: {
        sm: "h-8 text-xs read-only:leading-8",
        md: "h-9 text-xs read-only:leading-9",
        lg: "h-10 text-sm read-only:leading-10",
        xl: "h-12 text-base read-only:leading-[48px]",
      },
    },

    defaultVariants: {
      color: "default",
      size: "sm",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
  VariantProps<typeof inputVariants> {

  color?: "primary" | "info" | "warning" | "success" | "danger" | "default";
  size?: any;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      size,
      color,
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex-1 w-full">
        <input
          type={type}
          className={cn(
            inputVariants({ color, size }),
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };