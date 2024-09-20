import { ChevronDown, ChevronUp } from "lucide-react";

type RevinueItemProps = {
    item: {
        name: string;
        amount: string;
        isIncrease?: boolean;
    };
};
const RevinueItem = ({ item }: RevinueItemProps) => {
    const { name, amount, isIncrease } = item
    return (
        <li className="flex gap-4 flex-wrap  items-center">
            <div className="flex-1 text-sm font-medium text-default-900">{name}</div>
            <div className="flex-1 text-sm text-default-600">${amount}</div>
            <div className="flex-none">
            {
                isIncrease ?
                    <ChevronUp className="text-success" />
                    :
                    <ChevronDown className="text-danger" />

            }
            </div>
        </li>
    );
};

export default RevinueItem;