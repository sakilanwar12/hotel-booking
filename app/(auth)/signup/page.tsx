
import Auth from "@/components/auth/auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Icon } from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const SignUp = () => {
  return (
    <Auth>
      <Card className="max-w-xs w-full relative">
        <CardContent>
          <h2 className="text-center font-medium text-default-900">Sign Up</h2>
          <div className="text-center mt-1 text-sm font-medium text-default-700">
            {"Already have an account? "}
            <Link href="/" className="text-primary hover:opacity-90">Sign In</Link></div>
          <div className="flex gap-1 mt-4 px-4">
            <Button
              size="sm"
              className="flex-1 text-default-700"
              variant="outline"
            >
              <Icon icon="flat-color-icons:google" className="w-4 h-4 me-1" />
              Use Google
            </Button>
            <Button
              size="sm"
              className="flex-1 text-default-700"
              variant="outline"
            >
              <Icon icon="devicon:github" className="w-4 h-4 me-1" />
              Use Github
            </Button>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <Separator />
            <div className="text-sm font-normal text-default-700">OR</div>
            <Separator />
          </div>
          <form action="#" className="mt-3">
            <div className="space-y-3">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="example@gmail.com" />
              </div>
              <div>
                <Label htmlFor="password" className="mb-0">Password</Label>
                <Input id="password" placeholder="Enter Password" />
              </div>
              <div>
                <Label htmlFor="confirmPassword" className="mb-0">Confirm Password</Label>
                <Input id="confirmPassword" placeholder="Enter Confirm Password" />
              </div>
              <div className="flex items-center gap-1">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="mb-0">I accept</Label>
                <Link href="#" className="text-xs text-primary ">Terms and Conditions</Link>
              </div>
            </div>
            <div className="mt-4">
              <Button size="md" className="py-0 w-full">Sign Up</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </Auth>
  );
}
export default SignUp;