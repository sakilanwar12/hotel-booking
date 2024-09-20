import { Button } from "@/components/ui/button";
const BasicButton = () => {
    return (
        <div className="flex flex-wrap gap-3">
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
            <Button color="info">Info</Button>
            <Button color="success">Success</Button>
            <Button color="warning">Warning</Button>
            <Button color="danger">Danger</Button>
        </div>
    );
};

export default BasicButton;