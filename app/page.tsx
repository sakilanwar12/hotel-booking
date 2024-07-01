import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

// https://demo.dashboardmarket.com/ecommerce-react/?_gl=1*1v767hr*_ga*MTMxNDkwODg2MS4xNzEzODA4MzIy*_ga_353SHRS4EJ*MTcxOTg1NTM1OS45LjAuMTcxOTg1NTM1OS4wLjAuMA..*_ga_DT4CJHG13E*MTcxOTg1NTM2MC45LjAuMTcxOTg1NTM2MC4wLjAuMA..&_ga=2.115696773.2044394504.1719855360-1314908861.1713808322
export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen">
      <Image
        src="/images/all/img-1.jpg"
        alt=""
        fill
        objectFit="cover"
      />
      <Card className="max-w-sm w-full relative">
        <CardContent>
          <form action="#">
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" placeholder="example@gmail.com" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="Enter Password" />
            </div>
          </form>
        </CardContent>
      </Card>

    </main>
  );
}
