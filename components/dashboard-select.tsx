
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
const DashboardSelect = () => {
    return (
        <Select>
            <SelectTrigger className="w-fit h-8">
                <SelectValue placeholder="Today" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="week">Week</SelectItem>
                    <SelectItem value="month">Month</SelectItem>
                    <SelectItem value="year">Year</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

export default DashboardSelect;