'use client';

import { useUser } from '@/lib/context/UserContext';
import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
	MenubarTrigger,
} from '@/components/ui/menubar';
import {
	UserIcon,
	ChevronDownIcon,
	SettingsIcon,
	CreditCardIcon,
} from 'lucide-react';
import Link from 'next/link';
import { Logout } from './Logout';

export const UserMenu = () => {
	const { user, loading } = useUser();

	if (loading) {
		return (
			<div className='w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full animate-pulse' />
		);
	}

	return (
		<Menubar className='border-none bg-black text-white shadow-none'>
			<MenubarMenu>
				<MenubarTrigger className='flex items-center active:bg-black focus:bg-black gap-2 bg-black text-white'>
					<div className='w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex items-center justify-center'>
						<UserIcon className='w-4 h-4 sm:w-6 sm:h-6 text-gray-700' />
					</div>
					<div className='hidden sm:flex flex-col items-start'>
						<p className='text-sm font-medium text-white truncate'>
							{user?.name?.split(' ')[0]}
						</p>
						<p className='text-sm font-medium text-white'>
							{user?.email}
						</p>
					</div>
					<ChevronDownIcon className='w-4 h-4 text-white' />
				</MenubarTrigger>
				<MenubarContent className='bg-black text-white p-2 shadow-lg border-gray-700'>
					<MenubarItem>
						<Link
							href='/dashboard/settings'
							className='flex items-center gap-2'
						>
							<UserIcon className='w-4 h-4 text-blue-500' />
							Profile
						</Link>
					</MenubarItem>
					<MenubarSeparator className='bg-gray-700' />
					<MenubarItem>
						<Link
							href='/dashboard/withdraw'
							className='flex items-center gap-2'
						>
							<CreditCardIcon className='w-4 h-4 text-blue-500' />
							Withdraw
						</Link>
					</MenubarItem>
					<MenubarSeparator className='bg-gray-700' />
					<MenubarItem>
						<Link
							href='/dashboard/settings'
							className='flex items-center gap-2'
						>
							<SettingsIcon className='w-4 h-4 text-blue-500' />
							Settings
						</Link>
					</MenubarItem>
					<MenubarSeparator className='bg-gray-700' />
					<MenubarItem>
						<Link
							href='/dashboard/deposit'
							className='flex items-center gap-2'
						>
								<CreditCardIcon className='w-4 h-4 text-blue-500' />
							Deposit
						</Link>
					</MenubarItem>
					<MenubarSeparator className='bg-gray-700' />
					<MenubarItem>
						<Logout />
					</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
	);
};
