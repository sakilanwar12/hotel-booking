
import Auth from "@/components/auth/auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Icon } from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

import { signIn } from "@/lib/auth"

const Home = () => {
  return (
    <div>
       <form
      action={async () => {
        "use server"
        await signIn("github")
      }}
    >
      <button type="submit">Signin with GitHub</button>
    </form>
    </div>
    // <Auth>
    //   <Card className="max-w-xs w-full relative">
    //     <CardContent>
        
    //       <h2 className="text-center font-medium text-default-900">Sign In</h2>
    //       <div className="text-center mt-1 text-sm font-medium text-default-700">
    //         {"Need an account? "}
    //         <Link href="/signup" className="text-primary hover:opacity-90">Sign Up</Link></div>
    //       <div className="flex gap-1 mt-4 px-4">
    //         <Button
    //           size="sm"
    //           className="flex-1 text-default-700"
    //           variant="outline"
    //         >
    //           <Icon icon="flat-color-icons:google" className="w-4 h-4 me-1" />
    //           Use Google
    //         </Button>
    //         <Button
    //           size="sm"
    //           className="flex-1 text-default-700"
    //           variant="outline"
    //           onClick={() => signIn("github")}
    //         >
    //           <Icon icon="devicon:github" className="w-4 h-4 me-1" />
    //           Use Github
    //         </Button>
    //       </div>
    //       <div className="flex items-center gap-2 mt-4">
    //         <Separator />
    //         <div className="text-sm font-normal text-default-700">OR</div>
    //         <Separator />
    //       </div>
    //       <form action="#" className="mt-3">
    //         <div className="space-y-3">
    //           <div>
    //             <Label htmlFor="email">Email</Label>
    //             <Input id="email" placeholder="example@gmail.com" />
    //           </div>
    //           <div>
    //             <div className="flex items-center justify-between mb-2">
    //               <Label htmlFor="password" className="mb-0">Password</Label>
    //               <Link href="/forgot" className="text-xs font-medium text-primary hover:opacity-80">Forgot Password?</Link>
    //             </div>
    //             <Input id="password" placeholder="Enter Password" />
    //           </div>
    //           <div className="flex items-center gap-1">
    //             <Checkbox id="remember" />
    //             <Label htmlFor="remember" className="mb-0">Remember Me</Label>
    //           </div>
    //         </div>
    //         <div className="mt-4">
    //           <Button size="md" className="py-0 w-full">Sign In</Button>
    //         </div>
    //       </form>
    //     </CardContent>
    //   </Card>
    // </Auth>

  );
}
export default Home;