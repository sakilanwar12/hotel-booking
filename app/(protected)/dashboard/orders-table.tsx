import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Order } from "./data";

interface OrdersProps {
    orders: Order[]
}

const OrdersTable = ({ orders }: OrdersProps) => {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Product Name</TableHead>
                    <TableHead>Area</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead className="text-right">Sales</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    orders.map((item, index) => (
                        <TableRow key={index} className="last:border-0">
                            <TableCell className="font-medium">{item.orderId}</TableCell>
                            <TableCell>{item.date}</TableCell>
                            <TableCell>{item.amount}</TableCell>
                            <TableCell className="text-right">{item.status}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>

    );
};

export default OrdersTable;