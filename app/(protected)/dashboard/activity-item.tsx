import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"


type ActivityItemProps = {
    item: {
        title: string
        time: string
        icon: any
        color: any
    }
}
const ActivityItem = ({ item }: ActivityItemProps) => {
    const { title, time, icon, color } = item;
    return (
        <li className="flex items-center gap-4">
            <Button className="flex-none" size="icon" color={color}>
                <Icon icon={icon} />
            </Button>
            <h5 className="flex-1">{title}</h5>
            <span className="flex-none">{time}</span>
        </li>
    );
};

export default ActivityItem;