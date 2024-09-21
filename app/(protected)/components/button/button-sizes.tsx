import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

const ButtonSizes = () => {
    return (
        <div className="flex flex-wrap gap-3">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
            <Button size="icon">
                <Bell className="w-4 h-4" />
            </Button>
        </div>
    );
};

export default ButtonSizes;