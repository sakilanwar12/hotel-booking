import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

interface CampaignItemProps {
    item: {
        name: string;
        amount: string;
        isIncrease?: boolean;
        rate?: string;
        color?: any;
        icon?: any;
    };
}
const CampaignItem = ({ item }: CampaignItemProps) => {
    const { name, amount, isIncrease, rate, color, icon } = item
    return (
        <li className="flex items-center gap-3">
            <Button size="icon" color={color} className="rounded-md bg-opacity-10">
                <Icon icon={icon} className="w-5 h-5" />
            </Button>
            <div className="flex-1 text-sm font-medium text-default-900">{name}</div>
            <div className="flex-none text-sm text-default-800">{amount}</div>
            <div className={cn("text-sm font-medium", {
                "text-success": isIncrease,
                "text-destructive": !isIncrease
            })}>{rate}%</div>
        </li>
    );
};

export default CampaignItem;