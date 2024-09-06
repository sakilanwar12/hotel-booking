import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";
import { Ellipsis } from "lucide-react";
const DashboardDropdown = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="bg-default-100">
                    <Ellipsis className="w-5 h-5 text-default-600" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem>Download</DropdownMenuItem>
                <DropdownMenuItem>Refresh</DropdownMenuItem>
                <DropdownMenuItem>Share</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default DashboardDropdown;