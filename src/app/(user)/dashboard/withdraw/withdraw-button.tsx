'use client';

import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
} from '@/components/ui/form';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { withdrawSchema } from '../../../../../schema/withdrawSchema';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { useTransition } from 'react';
import { requestWithdrawal } from '@/actions/withdraw';
import { Loader } from '@/components/Loader';
interface WithdrawButtonProps {
	id: string;
	ethAddress: string;
	usdtAddress: string;
	btcAddress: string;
}

export function WithdrawButton({
	id,
	ethAddress,
	usdtAddress,
	btcAddress,
}: WithdrawButtonProps) {
	const [isPending, startTransition] = useTransition();
	type FormData = z.infer<typeof withdrawSchema>;
	const form = useForm<FormData>({
		resolver: zodResolver(withdrawSchema),
		defaultValues: {
			id,
			paymentMethod: '',
			wallet: '',
			amount: '',
		},
	});
	const onSubmit = (data: FormData) => {
		if (data.wallet === '') {
			toast.error('Please select a wallet', {
				position: 'top-center',
			});
		} else if (Number(data.amount) > 0) {
			startTransition(async () => {
				const result = await requestWithdrawal(data);
				if (result.error) {
					toast.error(result.error, {
						position: 'top-center',
					});
				} else {
					toast.success(result.success, {
						position: 'top-center',
					});
					form.reset();
				}
			});
		} else {
			toast.error('Amount must be greater than 0', {
				position: 'top-center',
			});
		}
	};
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className='bg-orange-500 text-white hover:bg-orange-600 rounded-lg p-2 px-5 mt-4'>
					Place Withdrawal Request
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Withdraw Funds</DialogTitle>
				</DialogHeader>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='flex flex-col gap-4'
					>
						{isPending && <Loader />}
						<Select
							onValueChange={(value) => {
								form.setValue('wallet', value);
								// Set payment method based on which address was selected
								if (value === ethAddress) {
									form.setValue('paymentMethod', 'ETH');
								} else if (value === usdtAddress) {
									form.setValue('paymentMethod', 'USDT');
								} else if (value === btcAddress) {
									form.setValue('paymentMethod', 'BTC');
								} else {
									form.setValue('paymentMethod', '');
								}
							}}
						>
							<SelectTrigger className='w-full'>
								<SelectValue placeholder='Select a wallet' />
							</SelectTrigger>
							<SelectContent>
								{ethAddress && (
									<SelectItem value={ethAddress}>
										{ethAddress}
									</SelectItem>
								)}
								{usdtAddress && (
									<SelectItem value={usdtAddress}>
										{usdtAddress}
									</SelectItem>
								)}
								{btcAddress && (
									<SelectItem value={btcAddress}>
										{btcAddress}
									</SelectItem>
								)}
							</SelectContent>
						</Select>

						<FormField
							control={form.control}
							name='amount'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Amount</FormLabel>
									<FormControl>
										<Input
											type='number'
											{...field}
											placeholder='Enter amount to withdraw'
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<Button
							type='submit'
							className='bg-orange-500 text-white hover:bg-orange-600 rounded-lg p-2 px-5 mt-4'
						>
							Withdraw
						</Button>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
}
