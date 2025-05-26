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
	CreditCardIcon,
	HistoryIcon,
	HomeIcon,
	CopyIcon,
	Grid2x2,
	ScanBarcodeIcon,
	BellIcon,
	SettingsIcon,
	LogOutIcon,
	UsersIcon,
} from 'lucide-react';
import Image from 'next/image';
import { logout } from '@/actions/auth/login';
const SideBar = () => {
	const items = [
		{
			label: 'Dashboard',
			icon: <HomeIcon />,
			href: '/dashboard',
		},
		{
			label: ' Deposit',
			icon: <CreditCardIcon />,
			href: '/dashboard/deposit',
		},
		{
			label: 'Transactions History',
			icon: <HistoryIcon />,
			href: '/dashboard/transaction-history',
		},
		{
			label: 'Trading History',
			icon: <CopyIcon />,
			href: '/dashboard/trading-history',
		},
		{
			label: 'Live trading',
			icon: <Grid2x2 />,
			href: '/dashboard/live-trading',
		},
		// {
		// 	label: 'Plans & pricing',
		// 	icon: <IdCardIcon />,
		// 	href: '/dashboard/plans',
		// },
		{
			label: 'Trade Scanner',
			icon: <ScanBarcodeIcon />,
			href: '/dashboard/trade-scanner',
		},
		{
			label: 'Trade signals',
			icon: <BellIcon />,
			href: '/dashboard/trade-signals',
		},
		{
			label: 'Invite friends',
			icon: <UsersIcon />,
			href: '/dashboard/invite-friends',
		},
		{
			label: 'Settings',
			icon: <SettingsIcon />,
			href: '/dashboard/settings',
		},	
	];
	return (
		<Sidebar
			collapsible='icon'
			className='mt-16'
		>
			<SidebarContent className='bg-black text-white border-r-none'>
				<SidebarGroup>
					<SidebarGroupContent>
						<div className='flex md:hidden items-center pl-2 pt-5 pb-10'>
							<Image
								src='/logo.png'
								alt='logo'
								width={100}
								height={100}
							/>
						</div>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem
									key={item.label}
									className='py-1 hover:py-3 transition-all duration-300 hover:bg-blue-500/10 hover:text-blue-500 '
								>
									<SidebarMenuButton
										asChild
										tooltip={item.label}
										className='hover:bg-transparent transition-all duration-300'
									>
										<a
											href={item.href}
											className=' font-medium hover:py-3 hover:bg-blue-500/10 hover:text-blue-500 '
										>
											<span className='text-blue-500'>
												{item.icon}
											</span>
											<span className='ml-2 text-white hover:text-blue-500/40'>
												{item.label}
											</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
							<div className='pl-3 pt-3 flex items-center gap-3' onClick={async ()=>{
								await logout()
							}}>
								<LogOutIcon className='text-blue-500' />
								Logout
							</div>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter />
		</Sidebar>
	);
};

export default SideBar;
