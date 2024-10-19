import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
const SearchContent = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>
          <Button
            variant="outline"
            className="relative w-[120px] rounded-full border-default-300 shadow-none hover:shadow-none md:min-w-[220px] lg:min-w-[400px] hidden md:block"
          >
            <Search className="absolute end-3 top-1/2 h-5 w-5 -translate-y-1/2 text-default-300" />
          </Button>
          <Search className=" h-5 w-5  text-default-900 md:hidden" />
        </div>
      </DialogTrigger>
      <DialogContent className="p-0">
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList className="px-2">
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>Calendar</CommandItem>
              <CommandItem>Search Emoji</CommandItem>
              <CommandItem>Calculator</CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>Profile</CommandItem>
              <CommandItem>Billing</CommandItem>
              <CommandItem>Settings</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
};

export default SearchContent;
