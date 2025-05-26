'use client';
import { AdminLoginSchema } from '../../../../../../schema/AdminLoginSschema';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	Form,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { loginAdmin } from '@/actions/auth/admin';
import { redirect } from 'next/navigation';
import { useTransition } from 'react';
import { Loader } from '@/components/Loader';
import { toast } from 'sonner';
import Image from 'next/image';
const AdminLogin = () => {
	const [isPending, startTransition] = useTransition();
	

	const form = useForm<z.infer<typeof AdminLoginSchema>>({
		resolver: zodResolver(AdminLoginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit = async (data: z.infer<typeof AdminLoginSchema>) => {
		startTransition(async () => {
			const response = await loginAdmin(data);
			if (response?.error) {
				toast.error(response.error);
			}
			if (response?.redirect) {
				redirect(response.redirect);
        
			}
		});
	};

	return (
		<div className='w-full max-w-md mx-auto p-10 shadow-md'>
			<div className='w-full h-20 bg-black flex items-center px-5 rounded-md gap-2'>
				<Link
					href='/'
					className='w-full h-full flex items-center justify-center'
				>
					<Image
						src='/logo.png'
						alt='logo'
						width={200}
						height={100}
					/>
				</Link>
			</div>
			<h1 className='text-2xl font-semibold pt-5'>Manager Login</h1>
			<p className='text-gray-500'>Login to your manager account</p>
			<Form {...form}>
				{isPending && <Loader />}
				
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='space-y-4 mt-5'
				>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										type='email'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='password'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input
										type='password'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className='flex flex-col gap-2 justify-between'>
						<Link
							href='/admin/forgot-password'
							className='text-sm text-gray-500 hover:text-gray-700 transition-all duration-300 ease-in-out'
						>
							Forgot Password?
						</Link>
						<Button
							type='submit'
							className='w-full'
							disabled={isPending}
						>
							Login
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
};

export default AdminLogin;
