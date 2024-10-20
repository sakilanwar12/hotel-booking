import { cn } from "@/lib/utils";

const SectionTitle = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return ( 
        <h2 className={cn("text-xl lg:text-2xl text-default-900 font-semibold mb-2", className)}>{children}</h2>
    );
};


const Section = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={cn("py-6", className)}>
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

const SectionLayer = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={cn("bg-section/20 rounded-md p-4", className)}>
            {children}
        </div>
    );
};

export { Section, SectionTitle ,Container,SectionLayer};