import CustomBreadcrumb from "@/components/custom-breadcrumb";
import Card from "@/components/ui/code-card";
import BasicInput from "./basic-input";
import SizeInput from "./size-input";
import { basicInput, sizesInput } from "./source-code";
const InputPage = () => {
    return (
        <div>
            <CustomBreadcrumb pageTitle="Input" />
            <div className="grid grid-cols-2 gap-6">
                <Card title="Colors" code={basicInput}>
                    <BasicInput/>
                </Card>
                <Card title="Size" code={sizesInput}>
                    <SizeInput/>
                </Card>
            </div>
        </div>
    );
};

export default InputPage;