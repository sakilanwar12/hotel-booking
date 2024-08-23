import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bell, CircleUser, Mail, Settings, Star, UserPlus, UsersRound } from "lucide-react";
import Link from "next/link";

const UserProfile = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                    <AvatarImage src="images/avatar/avatar-2.jpg" />
                    <AvatarFallback>SD</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" >
                <DropdownMenuLabel>Profile</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <div className="flex items-center gap-6 w-full">
                        <div className="flex-1 flex items-center gap-2">
                            <Avatar>
                                <AvatarImage src="images/avatar/avatar-2.jpg" />
                                <AvatarFallback>SD</AvatarFallback>
                            </Avatar>
                            <div>
                                <h2 className="text-base font-medium text-default-900">Sakil Anwar</h2>
                                <Link href="mailto:sakilanwar60@gmail.com" className="text-xs text-primary hover:opacity-80">sakilanwar60@gmail.com</Link>
                            </div>
                        </div>
                        <Badge className="flex-none">Admin</Badge>
                    </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link href="#" className="flex items-center gap-2 px-1">
                        <UsersRound className="w-4 h-4" />
                        <span>Public Profile</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href="#" className="flex items-center gap-2 px-1">
                        <CircleUser className="w-4 h-4" />
                        <span>My Profile</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link href="#" className="flex items-center gap-2 px-1">
                        <Mail className="w-4 h-4" />
                        <span>Messages</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href="#" className="flex items-center gap-2 px-1">
                        <Bell className="w-4 h-4" />
                        <span>Notifications</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href="#" className="flex items-center gap-2 px-1">
                        <Settings className="w-4 h-4" />
                        <span>Settings</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link href="#" className="flex items-center gap-2 px-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>Upgrade Account</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href="#" className="flex items-center gap-2 px-1">
                        <UserPlus className="w-4 h-4" />
                        <span>Add Account</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem >
                 <Button className="w-full">Log Out</Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserProfile;