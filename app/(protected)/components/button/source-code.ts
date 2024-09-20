export const basicButton=`
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
`

export const roundedButton=`

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

export default RoundedButton;`

export const outlineButton=`

import { Button } from "@/components/ui/button";

const OutlineButton = () => {
    return (
        <div className="flex flex-wrap gap-3">
            <Button color="primary" variant="outline">Primary</Button>
            <Button color="secondary" variant="outline">Secondary</Button>
            <Button color="info" variant="outline">Info</Button>
            <Button color="success" variant="outline">Success</Button>
            <Button color="warning" variant="outline">Warning</Button>
            <Button color="danger" variant="outline">Danger</Button>
        </div>
    );
};

export default OutlineButton;`

export const roundedOutline=`

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

export default RoundedOutlineButton;`

export const buttonSizes =`
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

const ButtonSizes = () => {
    return (
        <div className="flex flex-wrap gap-3">
            <Button size="sm">Primary</Button>
            <Button size="md">Secondary</Button>
            <Button size="lg">Info</Button>
            <Button size="icon">
                <Bell className="w-4 h-4" />
            </Button>
        </div>
    );
};

export default ButtonSizes;
`

export const buttonFullWidth=`
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
`