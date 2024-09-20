import { Button } from "@/components/ui/button";

const ButtonFullWidth = () => {
    return (
        <div className="flex flex-wrap gap-3">
            <Button color="primary" className="w-full">Primary</Button>
            <Button color="secondary" className="w-full">Secondary</Button>
        </div>
    );
};

export default ButtonFullWidth;