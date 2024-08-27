import Card from "@/components/ui/code-card";
import BasicTable from "./basic-table";
import BorderlessTable from "./borderless-table";
import StripedEven from "./striped-even";
import StripedOdd from "./striped-odd";

const TablePage = () => {
    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
            <Card title="Basic Table">
                <BasicTable />
            </Card>
            <Card title="Borderless Table">
                <BorderlessTable />
            </Card>
            <Card title="Striped Even">
                <StripedEven />
            </Card>
            <Card title="Striped Odd">
                <StripedOdd />
            </Card>
        </div>
    );
};

export default TablePage;