'use server';

import {
	UserRegisterSchema,
	verifyEmailSchem,
} from '../../../schema/UserSchema';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import { db } from '@/lib/db';
import { sendEmail } from '@/lib/email';
import { generateReferralCode } from '@/lib/utils';
import { redirect } from 'next/navigation';
export const signup = async (formData: z.infer<typeof UserRegisterSchema>) => {
	const validatedFields = UserRegisterSchema.safeParse({
		email: formData.email,
		password: formData.password,
		fullName: formData.fullName,
		phoneNumber: formData.phoneNumber,
		address: formData.address,
		country: formData.country,
		accountType: formData.accountType,
		agreement: formData.agreement,
		confirmPassword: formData.confirmPassword,
	});
	if (!validatedFields.success) {
		return { error: 'Invalid fields' };
	}
	const {
		email,
		password,
		fullName,
		phoneNumber,
		address,
		country,
		accountType,
	} = validatedFields.data;

	// Check if user with email already exists
	const existingUser = await db.user.findUnique({
		where: { email },
	});

	if (existingUser) {
		return { error: 'Email already registered' };
	}

	const hashedPassword = await bcrypt.hash(password, 10);
	const user = await db.user.create({
		data: {
			email,
			password: hashedPassword,
			name: fullName,
			phone: phoneNumber,
			refcode: generateReferralCode(),
			walletBalance: 50,
			address,
			country,
			AccountType: accountType,
			token: Math.random().toString(36).substring(2, 15),
		},
	});
	if (!user) {
		return { error: 'User creation failed' };
	}

	// Send welcome email
	await sendEmail(email, 'welcome', {
		name: fullName,
		token: user.token as string,
		email: email,
	});

	redirect(`/auth/verify?email=${encodeURIComponent(email)}`);
};

export const verifyEmail = async (
	formData: z.infer<typeof verifyEmailSchem>
) => {
	const validatedFields = verifyEmailSchem.safeParse({
		token: formData.token,
		email: formData.email,
	});
	if (!validatedFields.success) {
		return { error: 'Invalid fields' };
	}
	const { token, email } = validatedFields.data;

	const user = await db.user.findUnique({
		where: { email },
	});
	if (!user) {
		return { error: 'User not found' };
	}

	const isTokenValid = token === user.token;
	if (!isTokenValid) {
		return { error: 'Invalid verification token' };
	}

	// Update user verification status
	await db.user.update({
		where: { email },
		data: {
			confirm: 'true',
			token: null, // Clear the token after successful verification
		},
	});

	return { success: 'Email verified successfully' };
};
