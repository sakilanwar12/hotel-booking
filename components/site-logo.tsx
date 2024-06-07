
import { cn } from "@/lib/utils";
import Link from "next/link";

const SiteLogo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("mt-4 px-2", className)}>
      <Link href="#" className="font-robotoSlab text-base font-bold ">
        DashUI
      </Link>
    </div>
  );
};

export default SiteLogo;