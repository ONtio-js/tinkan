'use client'
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { AdminForgotPasswordSchema } from "../../../../../../schema/AdminLoginSschema";
import { FormField, FormLabel, FormItem, FormControl, Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const AdminForgotPassword = () => {
    const form = useForm<z.infer<typeof AdminForgotPasswordSchema>>({
        resolver: zodResolver(AdminForgotPasswordSchema),
        defaultValues: {
            email: "",
        },
    }); 

    const onSubmit = (data: z.infer<typeof AdminForgotPasswordSchema>) => {
        console.log(data);
    };      
  return <div className="w-full max-w-md mx-auto  px-10">
    <div className="w-full max-w-md">
        <h1 className="text-2xl font-semibold">Forgot Password</h1>
        <p className="text-gray-500">Enter your email to reset your password</p>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-5">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="email" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full">Send Reset Link</Button>
            </form>
        </Form>
        <Link href="/admin/login" className="text-sm mt-10 text-gray-500 hover:text-gray-700 transition-all duration-300 ease-in-out">Back to Login</Link>
    </div>
  </div>;
};

export default AdminForgotPassword;
