'use server';
import { db } from '@/lib/db';
import { BalanceSchema } from '../../../schema/balanceSchema';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
export const updateUserBalance = async (
	data: z.infer<typeof BalanceSchema>
) => {
	const validatedFields = BalanceSchema.safeParse(data);
	if (!validatedFields.success) {
		return { error: 'Invalid fields' };
	}
	const user = await db.user.findUnique({
		where: {
			id: validatedFields.data.userId,
		},
	});
	if (!user) {
		return { error: 'User not found' };
	}
	const balance = validatedFields.data.balance
		? parseInt(validatedFields.data.balance)
		: 0;
	const profit = validatedFields.data.profit
		? parseInt(validatedFields.data.profit)
		: 0;
	const investment = validatedFields.data.investment
		? parseInt(validatedFields.data.investment)
		: 0;
	const credit = validatedFields.data.credit;
	const target = validatedFields.data.target
		? parseInt(validatedFields.data.target)
		: 0;
	const updatedUser = await db.user.update({
		where: { id: user.id },
		data: {
			walletBalance: credit ? (user.walletBalance ?? 0) + balance : (user.walletBalance ?? 0) - balance,
			profitBalance: credit ? (user.profitBalance ?? 0) + profit : (user.profitBalance ?? 0) - profit,
			investmentBalance: credit ? (user.investmentBalance ?? 0) + investment : (user.investmentBalance ?? 0) - investment,
			targetBalance: credit ? (user.targetBalance ?? 0) + target : (user.targetBalance ?? 0) - target,
		},
	});
	if (updatedUser) {
		revalidatePath('/admin/dashboard/livetrade');
		return { success: 'Balance updated successfully' };
	}
	return { error: 'Failed to update balance' };
};
