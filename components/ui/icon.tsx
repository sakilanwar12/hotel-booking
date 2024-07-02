"use client"
import { cn } from "@/lib/utils";
import { Icon as Iconify } from '@iconify/react';
interface IconProps {
  className?: string;
  icon: string;
}
const Icon = ({ className, icon, ...props }: IconProps) => {
  return (
    <Iconify
      icon={icon}
      {...props}
      className={cn(className)}
    />
  );
};

export { Icon };