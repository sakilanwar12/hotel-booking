
import Auth from "@/components/auth/auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MoveRight } from "lucide-react";


const ForgotPassword = () => {
  return (
    <Auth>
      <Card className="max-w-xs w-full relative">
        <CardContent>
          <h2 className="text-center font-medium text-default-900">Your Email</h2>
          <div className="text-center mt-1 text-sm font-medium text-default-700">
            Enter your email to reset password
          </div>
          <form action="#" className="mt-5">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="example@gmail.com" />
            <div className="mt-4">
              <Button size="md" className="py-0 w-full flex items-center gap-1">
                Continue
                <MoveRight className="mt-0.5 ms-1 w-4 h-4" />
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </Auth>
  );
}
export default ForgotPassword;