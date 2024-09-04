import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronDown, ChevronUp } from "lucide-react";

type CountryItemProps = {
    item: {
        name: string;
        amount: string;
        sales_rate: string;
        image: string;
        isUp: boolean;
    };
};
const CountryItem = ({ item }: CountryItemProps) => {
    const { name, amount, sales_rate, image, isUp } = item;
    return (
        <li className="flex flex-wrap items-center gap-4 ">
            <div className="flex-1 flex items-center gap-4">
                <Avatar>
                    <AvatarImage src={image} />
                    <AvatarFallback>F</AvatarFallback>
                </Avatar>
                <div>
                    <h3 className="font-medium text-default-900">{amount}</h3>
                    <div className="text-sm text-default-600">{name}</div>
                </div>
            </div>
            <div className="flex-none">
                {
                    isUp ? <div className="flex items-center gap-1">
                        <ChevronUp className="text-success" />
                        <div className="text-sm text-success">{sales_rate}</div>
                    </div> :
                        <div  className="flex items-center gap-1">
                            <ChevronDown className="text-destructive" />
                            <div className="text-sm text-destructive">{sales_rate}</div>
                        </div>
                }


            </div>
        </li>
    );
};

export default CountryItem;