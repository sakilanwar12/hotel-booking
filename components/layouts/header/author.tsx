import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Author = () => {
  return (
    <div>
      <Avatar className="cursor-pointer">
        <AvatarImage src="images/all/author.jpg"></AvatarImage>
        <AvatarFallback>SA</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default Author;