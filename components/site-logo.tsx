import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const SiteLogo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("", className)}>
      <Link href="#" className="flex items-center gap-3">
        <Image
          src="/images/logo/logo-2.png"
          alt="DashUI Logo"
          width={42}
          height={42}
          className="h-8 w-8 rounded-md"
        />

        <span className="text-lg font-bold"> Book Hotel</span>
      </Link>
    </div>
  );
};

export default SiteLogo;
