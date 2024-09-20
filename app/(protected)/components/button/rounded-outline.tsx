import { Button } from "@/components/ui/button";

const RoundedOutlineButton = () => {
    return (
        <div className="flex flex-wrap gap-3">
            <Button color="primary" variant="outline" className="rounded-full">Primary</Button>
            <Button color="secondary" variant="outline" className="rounded-full">Secondary</Button>
            <Button color="info" variant="outline" className="rounded-full">Info</Button>
            <Button color="success" variant="outline" className="rounded-full">Success</Button>
            <Button color="warning" variant="outline" className="rounded-full">Warning</Button>
            <Button color="danger" variant="outline" className="rounded-full">Danger</Button>
        </div>
    );
};

export default RoundedOutlineButton;