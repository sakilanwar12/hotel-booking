import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

const ButtonSizes = () => {
    return (
        <div className="flex flex-wrap gap-3">
            <Button size="sm">Primary</Button>
            <Button size="md">Secondary</Button>
            <Button size="lg">Info</Button>
            <Button size="icon">
                <Bell className="w-4 h-4" />
            </Button>
        </div>
    );
};

export default ButtonSizes;