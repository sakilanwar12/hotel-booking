export const basicDialog=`
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
import { ScrollArea } from "@/components/ui/scroll-area"

const BasicDialog = () => {
    return (
        <div className="flex flex-wrap gap-4">
            <Dialog>
                <DialogTrigger asChild>
                    <Button>Default</Button>
                </DialogTrigger>
                <DialogContent>
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
                    <Button>Scroll Content</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Dialog Title</DialogTitle>
                        <DialogDescription>
                            Dialog Description
                        </DialogDescription>
                    </DialogHeader>
                    <div>
                        <h2 className="mb-1">Dialog Content</h2>
                        <ScrollArea className="h-[200px]">
                            <div className="space-y-1">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A debitis officiis quasi, exercitationem totam laudantium est esse voluptas tempore laboriosam!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A debitis officiis quasi, exercitationem totam laudantium est esse voluptas tempore laboriosam!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A debitis officiis quasi, exercitationem totam laudantium est esse voluptas tempore laboriosam!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A debitis officiis quasi, exercitationem totam laudantium est esse voluptas tempore laboriosam!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A debitis officiis quasi, exercitationem totam laudantium est esse voluptas tempore laboriosam!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A debitis officiis quasi, exercitationem totam laudantium est esse voluptas tempore laboriosam!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A debitis officiis quasi, exercitationem totam laudantium est esse voluptas tempore laboriosam!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A debitis officiis quasi, exercitationem totam laudantium est esse voluptas tempore laboriosam!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A debitis officiis quasi, exercitationem totam laudantium est esse voluptas tempore laboriosam!</p>
                            </div>
                        </ScrollArea>

                    </div>
                    <DialogFooter>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default BasicDialog;`

export const dialogSizes=`
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

export default DialogSizes;`