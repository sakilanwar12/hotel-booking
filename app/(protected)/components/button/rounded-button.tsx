import { Button } from "@/components/ui/button";

const RoundedButton = () => {
    return (
        <div className="flex flex-wrap gap-3">
            <Button color="primary" className="rounded-full">Primary</Button>
            <Button color="secondary" className="rounded-full">Secondary</Button>
            <Button color="info" className="rounded-full">Info</Button>
            <Button color="success" className="rounded-full">Success</Button>
            <Button color="warning" className="rounded-full">Warning</Button>
            <Button color="danger" className="rounded-full">Danger</Button>
        </div>
    );
};

export default RoundedButton;