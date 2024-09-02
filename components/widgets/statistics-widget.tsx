import { cn } from "@/lib/utils";
import { Card, CardContent } from "../ui/card";

const StatisticsWidget = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <Card className={cn("bg-primary/10 hover:bg-primary/20", className)}>
            <CardContent>
                {children}
            </CardContent>
        </Card>
    );
};

export { StatisticsWidget };