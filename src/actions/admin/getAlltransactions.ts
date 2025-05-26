import { db } from '@/lib/db';

export const getAllTransactions = async () => {
	const transactions = await db.transaction.findMany({
		include: {
			user: {
				select: {
					name: true,
					email: true,
				},
			},
		},
		orderBy: {
			createdAt: 'desc',
		},
	});
	return transactions;
};
