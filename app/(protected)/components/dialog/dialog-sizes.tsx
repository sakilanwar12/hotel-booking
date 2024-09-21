import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


const DialogSizes = () => {
    return (
        <div className="flex flex-wrap gap-4">
            <Dialog>
                <DialogTrigger asChild>
                    <Button>Small</Button>
                </DialogTrigger>
                <DialogContent size="sm">
                    <DialogHeader>
                        <DialogTitle>Dialog Title</DialogTitle>
                        <DialogDescription>
                            Dialog Description
                        </DialogDescription>
                    </DialogHeader>
                    <div>
                        <h2 className="mb-1">Dialog Content</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A debitis officiis quasi, exercitationem totam laudantium est esse voluptas tempore laboriosam!</p>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            <Dialog>
                <DialogTrigger asChild>
                    <Button>Medium</Button>
                </DialogTrigger>
                <DialogContent size="md">
                    <DialogHeader>
                        <DialogTitle>Dialog Title</DialogTitle>
                        <DialogDescription>
                            Dialog Description
                        </DialogDescription>
                    </DialogHeader>
                    <div>
                        <h2 className="mb-1">Dialog Content</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A debitis officiis quasi, exercitationem totam laudantium est esse voluptas tempore laboriosam!</p>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            <Dialog>
                <DialogTrigger asChild>
                    <Button>Large</Button>
                </DialogTrigger>
                <DialogContent size="lg">
                    <DialogHeader>
                        <DialogTitle>Dialog Title</DialogTitle>
                        <DialogDescription>
                            Dialog Description
                        </DialogDescription>
                    </DialogHeader>
                    <div>
                        <h2 className="mb-1">Dialog Content</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A debitis officiis quasi, exercitationem totam laudantium est esse voluptas tempore laboriosam!</p>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
           
            <Dialog>
                <DialogTrigger asChild>
                    <Button>Extra Large</Button>
                </DialogTrigger>
                <DialogContent size="xl">
                    <DialogHeader>
                        <DialogTitle>Dialog Title</DialogTitle>
                        <DialogDescription>
                            Dialog Description
                        </DialogDescription>
                    </DialogHeader>
                    <div>
                        <h2 className="mb-1">Dialog Content</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A debitis officiis quasi, exercitationem totam laudantium est esse voluptas tempore laboriosam!</p>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
           
        </div>
    );
};

export default DialogSizes;