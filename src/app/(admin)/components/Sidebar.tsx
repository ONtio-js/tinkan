'use client';
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar';
import {
	History,
	HomeIcon,
	CopyIcon,
	BellIcon,
	SettingsIcon,
	UsersIcon,
	ChevronDownIcon,
} from 'lucide-react';
import { useState } from 'react';

const SideBar = () => {
	const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>(
		{}
	);

	const toggleDropdown = (label: string) => {
		setOpenDropdowns((prev) => ({
			...prev,
			[label]: !prev[label],
		}));
	};

	const items = [
		{
			label: 'Home',
			icon: <HomeIcon />,
			href: '/admin/dashboard',
		},

		{
			label: 'Transactions',
			icon: <History />,
			href: '/admin/dashboard/transactions',
			hasDropdown: true,
			subItems: [
				{
					label: 'Transactions',
					href: '/admin/dashboard/transactions',
				},
				{
					label: 'Deposit Requests',
					href: '/admin/dashboard/deposit',
				},
				{
					label: 'Withdrawal Requests',
					href: '/admin/dashboard/withdrawal',
				},
			],
		},
		{
			label: 'Trading',
			icon: <CopyIcon />,
			hasDropdown: true,
			subItems: [
				{
					label: 'Trading History',
					href: '/admin/dashboard/trade',
				},
				{
					label: 'Live Trading',
					href: '/admin/dashboard/livetrade',
				},
			],
		},

		{
			label: 'Users',
			icon: <UsersIcon />,
			href: '/admin/dashboard/users',
			hasDropdown: true,
			subItems: [
				{
					label: 'View Users',
					href: '/admin/dashboard/users',
				},
				{
					label: 'Manage Users',
					href: '/admin/dashboard/users',
				},
			],
		},
		{
			label: 'KYC Management',
			icon: <BellIcon />,
			href: '/admin/dashboard/kyc',
			hasDropdown: true,
			subItems: [
				{
					label: 'KYC',
					href: '/admin/dashboard/kyc',
				},
				// {
				// 	label: 'Pending KYC',
				// 	href: '/admin/dashboard/kyc',
				// },
				// {
				// 	label: 'Rejected KYC',
				// 	href: '/admin/dashboard/kyc',
				// },
				// {
				// 	label: 'Approved KYC',
				// 	href: '/admin/dashboard/kyc',
				// },
			],
		},

		{
			label: 'Settings',
			icon: <SettingsIcon />,
			href: '/admin/dashboard/settings',
		},
	];

	return (
		<Sidebar
			collapsible='icon'
			className='mt-16'
		>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem
									key={item.label}
									className='py-1 hover:py-3 transition-all duration-300 hover:bg-blue-600/10 hover:text-blue-600'
								>
									{item.hasDropdown ? (
										<div>
											<SidebarMenuButton
												onClick={() =>
													toggleDropdown(item.label)
												}
												className='hover:bg-transparent transition-all duration-300 w-full'
											>
												<div className='flex items-center justify-between w-full'>
													<div className='flex items-center'>
														<span className='text-blue-800'>
															{item.icon}
														</span>
														<span className='ml-2 text-primary hover:text-blue-600/40'>
															{item.label}
														</span>
													</div>
													<ChevronDownIcon
														className={`w-4 h-4 transition-transform ${
															openDropdowns[
																item.label
															]
																? 'rotate-180'
																: ''
														}`}
													/>
												</div>
											</SidebarMenuButton>
											{openDropdowns[item.label] && (
												<div className='pl-8 mt-1 space-y-1'>
													{item.subItems?.map(
														(subItem) => (
															<a
																key={
																	subItem.label
																}
																href={
																	subItem.href
																}
																className='block py-1 text-sm hover:text-blue-600'
															>
																{subItem.label}
															</a>
														)
													)}
												</div>
											)}
										</div>
									) : (
										<SidebarMenuButton
											asChild
											tooltip={item.label}
											className='hover:bg-transparent transition-all duration-300'
										>
											<a
												href={item.href}
												className='font-medium hover:py-3 hover:bg-blue-600/10 hover:text-blue-600'
											>
												<span className='text-blue-800'>
													{item.icon}
												</span>
												<span className='ml-2 text-primary hover:text-blue-600/40'>
													{item.label}
												</span>
											</a>
										</SidebarMenuButton>
									)}
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter />
		</Sidebar>
	);
};

export default SideBar;
