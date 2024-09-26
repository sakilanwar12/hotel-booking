export const basicInput=`
import { Input } from "@/components/ui/input";

const BasicInput = () => {
    return (
        <div className="space-y-2">
            <Input type="text" color="primary" placeholder="Text Input"/>
            <Input type="text" color="secondary" placeholder="Text Input"/>
            <Input type="text" color="success" placeholder="Text Input"/>
            <Input type="text" color="danger" placeholder="Text Input"/>
            <Input type="text" color="warning" placeholder="Text Input"/>
            <Input type="text" color="info" placeholder="Text Input"/>
        </div>
    );
};

export default BasicInput;
`

export const sizesInput=`
import { Input } from "@/components/ui/input";

const SizeInput = () => {
    return (
        <div className="space-y-2">
            <Input type="text" size="sm" placeholder="Small Input" />
            <Input type="text" size="md" placeholder="Medium Input" />
            <Input type="text" size="lg" placeholder="Large Input" />
            <Input type="text" size="xl" placeholder="Extra Large Input" />
        </div>
    );
};

export default SizeInput;
`