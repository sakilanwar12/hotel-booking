import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Product } from "./data";

interface Products {
    products: Product[]
}

const ProductsTable = ({ products }: Products) => {
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
                    products.map((item, index) => (
                        <TableRow key={index} className="last:border-0">
                            <TableCell className="font-medium">{item.productName}</TableCell>
                            <TableCell>{item.area}</TableCell>
                            <TableCell>{item.price}</TableCell>
                            <TableCell className="text-right">{item.sales}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>

    );
};

export default ProductsTable;