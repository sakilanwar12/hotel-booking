import { cn } from "@/lib/utils";

const SectionTitle = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <h2 className={cn("text-xl lg:text-2xl text-default-900", className)}>{children}</h2>
    );
};


const Section = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={cn("bg-background py-11 lg:py-14", className)}>
            {children}
        </div>
    );
};
const Container = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={cn("container", className)}>
            {children}
        </div>
    );
};

export { Section, SectionTitle ,Container};