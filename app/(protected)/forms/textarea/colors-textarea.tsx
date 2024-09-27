import { Textarea } from "@/components/ui/textarea";
const ColorsTextarea = () => {
    return (
        <div className="space-y-3">
        <Textarea color="primary" placeholder="Hello World"/>
        <Textarea color="secondary" placeholder="Hello World"/>
        <Textarea color="info" placeholder="Hello World"/>
        <Textarea color="warning" placeholder="Hello World"/>
        <Textarea color="success" placeholder="Hello World"/>
        <Textarea color="danger" placeholder="Hello World"/>
    </div>
    );
};

export default ColorsTextarea;