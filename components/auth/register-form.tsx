"use client"
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
    username: string
    email: string
    password: string
    confirmPassword: string
}
const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async(data) =>{
        try {
            const response = await fetch('/auth/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Registration failed');
            }

            const result = await response.json();
            console.log('Registration successful', result);
        } catch (error) {
            console.error('Error:', error);
        }
    }
    return (
        <form action="#" className="mt-3" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-3">
                <div className="space-y-1">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username"  {...register("username", { required: "Your Username is required." })} />
                    {errors.username && <p className="text-xs text-destructive mt-1">{errors.username.message}</p>}
                </div>
                <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" {...register("email", { required: "Your Email is required." })} />
                    {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
                </div>
                <div className="space-y-1">
                    <Label htmlFor="password" className="mb-0">Password</Label>
                    <Input id="password" {...register("password", { required: "Your Password is required." })} />
                    {errors.password && <p className="text-xs text-destructive mt-1">{errors.password.message}</p>}
                </div>
                <div className="space-y-1">
                    <Label htmlFor="confirmPassword" className="mb-0">Confirm Password</Label>
                    <Input id="confirmPassword" {...register("confirmPassword", { required: "Your Password is required." })} />
                    {errors.confirmPassword && <p className="text-xs text-destructive mt-1">{errors.confirmPassword.message}</p>}
                </div>
                <div className="flex items-center gap-1">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember" className="mb-0">I accept</Label>
                    <Link href="#" className="text-xs text-primary ">Terms and Conditions</Link>
                </div>
            </div>
            <div className="mt-4">
                <Button size="md" className="py-0 w-full" type="submit">Sign Up</Button>
            </div>
        </form>
    );
};

export default RegisterForm;