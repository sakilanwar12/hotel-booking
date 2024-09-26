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