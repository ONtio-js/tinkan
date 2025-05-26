'use client';
import {
	Form,
	FormLabel,
	FormField,
	FormItem,
	FormControl,
	FormDescription,
} from '@/components/ui/form';
import { UserRegisterSchema } from '../../../../../schema/UserSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';
import Image from 'next/image';
import { useTransition } from 'react';
import { signup } from '@/actions/auth/signup';
import { Loader } from '@/components/Loader';
import { toast } from 'sonner';
export const SignupForm = () => {
	const [isPending, startTransition] = useTransition();
	const form = useForm<z.infer<typeof UserRegisterSchema>>({
		resolver: zodResolver(UserRegisterSchema),
		defaultValues: {
			email: '',
			password: '',
			confirmPassword: '',
			fullName: '',
			phoneNumber: '',
			address: '',
			country: '',
			accountType: '',
			agreement: false,
		},
	});
	
	const onSubmit = async (data: z.infer<typeof UserRegisterSchema>) => {
		startTransition(async () => {
			const res = await signup(data);
			if (res.error) {		
				toast.error(res.error);

			} else {
				toast.success('Account created successfully, please verify your email');
			}
		});
	};
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='space-y-4 w-full pt-20 p-10'
			>
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
				{isPending && <Loader />}
				<FormField
					control={form.control}
					name='fullName'
					
					render={({ field }) => (
						<FormItem className='mt-7'>
							<FormLabel>Full Name</FormLabel>
							<FormControl>
								<Input
									type='text'
									{...field}
									placeholder='Enter your full name'
									
								/>
							</FormControl>
						</FormItem>
					)}
				/>
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
									placeholder='Enter your email'
								/>
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='phoneNumber'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Phone Number</FormLabel>
							<FormControl>
								<Input
									type='text'
									{...field}
									placeholder='Enter your phone number'
								/>
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='address'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Address</FormLabel>
							<FormControl>
								<Input
									type='text'
									{...field}
									placeholder='Enter your address'
								/>
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='country'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Country</FormLabel>
							<FormControl>
								<Input
									{...field}
									placeholder='Enter your country'
								/>
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='accountType'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Account Type</FormLabel>
							<FormControl>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<SelectTrigger className='w-full'>
										<SelectValue placeholder='Select an account type' />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value='tradding account'>
											Trading Account
										</SelectItem>
										<SelectItem value='traditional IRA'>
											Traditional IRA
										</SelectItem>
										<SelectItem value='Roth IRA'>
											Roth IRA
										</SelectItem>
										<SelectItem value='401(k)s'>
											401(k)s
										</SelectItem>
									</SelectContent>
								</Select>
							</FormControl>
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
									placeholder='Enter your password'
								/>
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='confirmPassword'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Confirm Password</FormLabel>
							<FormControl>
								<Input
									{...field}
									placeholder='Confirm your password'
									type='password'
								/>
							</FormControl>
							<FormDescription className='text-red-500'>
								{form.formState.errors.confirmPassword?.message}
							</FormDescription>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='agreement'
					render={({ field }) => (
						<FormItem className='flex items-center gap-2 py-5'>
							<FormControl>
								<Checkbox
									checked={field.value}
									onCheckedChange={field.onChange}
								/>
							</FormControl>
							<FormLabel>
								Agree to our terms and conditions
							</FormLabel>
						</FormItem>
					)}
				/>
				<Button
					type='submit'
					className='md:w-1/3 capitalize'
					disabled={isPending}
				>
					create account
				</Button>
				<Link
					href='/auth/login'
					className='text-sm block text-gray-500'
				>
					Already have an account? Login
				</Link>
			</form>
		</Form>
	);
};
