import CustomBreadcrumb from "@/components/custom-breadcrumb";
import Card from "@/components/ui/code-card";
import ColorsTextarea from "./colors-textarea";
import { colorsTextarea } from "./source-code";

const Page = () => {
    return (
        <div>
            <CustomBreadcrumb pageTitle="Textarea" />
            <Card title="Textarea" code={colorsTextarea} >
                <ColorsTextarea />
            </Card>
        </div >
    );
};

export default Page;