import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { invoices } from "../data";

const BorderlessTable = () => {
    return (
        <Table>
            <TableHeader className="[&_tr]:border-b-0 border-b-0">
                <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead >Status</TableHead>
                    <TableHead >Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {invoices.slice(0, 5).map((invoice) => (
                    <TableRow key={invoice.invoice} className="border-b-0">
                        <TableCell className="font-medium">{invoice.invoice}</TableCell>
                        <TableCell >{invoice.paymentStatus}</TableCell>
                        <TableCell >{invoice.paymentMethod}</TableCell>
                        <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter className="border-t-0">
                <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    );
};

export default BorderlessTable;