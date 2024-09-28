import { cn } from "@/lib/utils";

const SectionTitle = ({ children,className }: { children: React.ReactNode,className?:string}) => {
    return (
     <h2 className={cn("text-xl lg:text-2xl text-default-900",className)}>{children}</h2>
    );
};

export default SectionTitle;