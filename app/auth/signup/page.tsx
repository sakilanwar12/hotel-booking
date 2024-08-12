

import AuthBackground from "@/components/auth/auth-background";
import RegisterForm from "@/components/auth/register-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const SignUp = () => {
  return (
    <AuthBackground>
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
        <RegisterForm/>
        </CardContent>
      </Card>
    </AuthBackground>
  );
}
export default SignUp;