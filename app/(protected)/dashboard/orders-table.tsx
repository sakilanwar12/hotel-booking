import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Order } from "./data";
import { Checkbox } from "@/components/ui/checkbox";
import { SquarePen, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface OrdersProps {
    orders: Order[]
}

const getStatusColor = (status: "Shipped" | "Pending" | "Delivered" | "Cancelled" | "Processing") => {
    const statusColors = {
        "Shipped": "bg-primary",
        "Pending": "bg-info",
        "Delivered": "bg-success",
        "Cancelled": "bgdanger",
        "Processing": "bg-warning"
    }
    return statusColors[status];
}
const OrdersTable = ({ orders }: OrdersProps) => {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead><Checkbox /></TableHead>
                    <TableHead>Order ID</TableHead>
                    <TableHead>date</TableHead>
                    <TableHead>amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    orders.map((item, index) => (
                        <TableRow key={index} className="last:border-0">
                            <TableCell><Checkbox /></TableCell>
                            <TableCell className="font-medium">{item.orderId}</TableCell>
                            <TableCell>{item.date}</TableCell>
                            <TableCell>{item.amount}</TableCell>
                            <TableCell>
                                <div className="flex items-center gap-1.5">
                                    <div className={cn("h-2 w-2 rounded-full bg-primary", getStatusColor(item.status))}></div>
                                    {item.status}
                                </div>
                            </TableCell>
                            <TableCell className="flex justify-end items-center gap-2.5">
                                <SquarePen className="h-4 w-4 text-default-500 cursor-pointer hover:text-primary" />
                                <Trash2 className="h-4 w-4 text-default-500 cursor-pointer hover:text-danger" />
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>

    );
};

export default OrdersTable;