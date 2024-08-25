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
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowBigRight, BellDot, Clock, MoveRight } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";

const Notification = () => {
  const notifications = [
    {
      id: 1,
      name: "John_Doe",
      text: "followed you",
      avatar: "/images/avatar/avatar-3.png",
      time: "Friday  10:30 AM",
      lastTime: "4 sec"
    },
    {
      id: 2,
      name: "Jessica",
      text: "commented on your post",
      avatar: "/images/avatar/avatar-2.jpg",
      time: "Saturday  11:30 pm",
      lastTime: "10 min"
    },
    {
      id: 3,
      name: "Sakil_Anwar",
      text: "liked your post",
      avatar: "/images/avatar/avatar-1.jpg",
      time: "Sunday  10:30 AM",
      lastTime: "yesterday"
    },
    {
      id: 4,
      name: "Alex_Doe",
      text: "commented on your post",
      avatar: "/images/avatar/avatar-3.png",
      time: "Saturday  11:30 pm",
      lastTime: "10 min"
    },
    {
      id: 5,
      name: "Sadikul_Islam",
      text: "liked your post",
      avatar: "/images/avatar/avatar-5.png",
      time: "Monday  10:30 AM",
      lastTime: "yesterday"
    },
    {
      id: 6,
      name: "Sabrin_Islam",
      text: "commented on your post",
      avatar: "/images/avatar/avatar-3.png",
      time: "Saturday  11:30 pm",
      lastTime: "10 min"
    },
    {
      id: 7,
      name: "Sakibul_Islam",
      text: "liked your post",
      avatar: "/images/avatar/avatar-5.png",
      time: "Monday  10:30 AM",
      lastTime: "yesterday"
    }
  ]
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <BellDot className="w-6 h-6 text-default-700" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="lg:w-96" >
        <DropdownMenuLabel className="flex items-center py-2">Notifications <Badge className="ms-2 bg-destructive text-destructive-foreground">10</Badge></DropdownMenuLabel>
        <DropdownMenuSeparator />
        <ScrollArea className="h-[400px]">
          {
            notifications.map((notification) => (
              <Fragment key={notification.id}>
                <DropdownMenuItem >
                  <div className="flex items-center gap-6 w-full ">
                    <div className="flex-1 flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={notification.avatar} />
                        <AvatarFallback>
                          {notification.name.slice(0, 1)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="max-w-[200px]">
                        <div className="text-sm">
                          <span className="font-medium text-default-900 me-1">@{notification.name}</span>
                          <span className="text-default-700 text-sm">{notification.text}</span>
                        </div>
                        <div className="mt-1 flex items-center gap-1">
                          <Clock className="w-4 h-4 text-default-700" />
                          <span className="text-default-800">{notification.time}</span>
                        </div>
                      </div>
                    </div>
                    <div>

                      <p className="text-xs text-default-600">{notification.lastTime}</p>
                    </div>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
              </Fragment>
            ))
          }
        </ScrollArea>
        <DropdownMenuItem className="focus:bg-transparent">
          <div className="flex items-center justify-between w-full py-1">
            <Link href="#" className="text-sm text-default-900">Manage Notifications</Link>
            <Button>View All <MoveRight className="w-4 h-4" /></Button>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Notification;