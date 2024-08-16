
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import AuthBackground from "@/components/auth/auth-background";
import SocialLogin from "@/components/auth/social-login";
import LoginForm from "@/components/auth/login-form";

const Home = () => {
  return (
    <AuthBackground>
      <Card className="max-w-xs w-full relative">
        <CardContent>
          <h2 className="text-center font-medium text-default-900">Sign In</h2>
          <div className="text-center mt-1 text-sm font-medium text-default-700">
            {"Need an account? "}
            <Link href="/auth/signup" className="text-primary hover:opacity-90">Sign Up</Link>
            <SocialLogin />
          </div>

          <div className="flex items-center gap-2 mt-4">
            <Separator />
            <div className="text-sm font-normal text-default-700">OR</div>
            <Separator />
          </div>
          <LoginForm />
        </CardContent>
      </Card>
    </AuthBackground >
  );
}
export default Home;