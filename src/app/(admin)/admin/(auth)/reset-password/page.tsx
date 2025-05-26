'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ResetPasswordSchema } from "../../../../../../schema/AdminLoginSschema";
import { z } from "zod";
import { FormLabel, FormItem, Form, FormField, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const ResetPassword = () => {
    const form = useForm<z.infer<typeof ResetPasswordSchema>>({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });
  const onSubmit = (data: z.infer<typeof ResetPasswordSchema>) => {
    console.log(data);
  };
    return <div className="max-w-md mx-auto w-full px-10">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-5">
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} placeholder="Enter your password" />
              </FormControl>
            </FormItem>
          )}
        />  
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} placeholder="Confirm your password" />
              </FormControl>
            </FormItem>
          )}
        />
        
        <Button type="submit">Reset Password</Button>
      </form>
    </Form>
    <Link href="/admin/login" className="text-sm mt-10 text-gray-500 hover:text-gray-700 transition-all duration-300 ease-in-out">Back to Login</Link>  
  </div>;
};

export default ResetPassword;