import SideBar from '@/app/(admin)/components/Sidebar';
import {
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
} from '@/components/ui/menubar';
import {
	Menubar,
	MenubarContent,
	MenubarTrigger,
} from '@/components/ui/menubar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import {
	ChevronDownIcon,
	SettingsIcon,
	UserIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import LogoutButton from '../../components/LogoutButton';

const AdminDashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<SidebarProvider>
			<SideBar />
			<main className='w-full'>
				<div className='fixed top-0 left-0 right-0 w-full z-50 flex justify-between items-center px-4 sm:px-6 md:px-10 py-4 bg-white shadow-sm'>
					<div className='flex items-center gap-2'>
						<SidebarTrigger className='text-[var(--myGreen)]' />
						<div className='hidden sm:flex items-center gap-2 logo-container border-l-2 border-gray-300 pl-2'>
							<Image
								src='/logo-black.png'
								alt='logo'
								width={100}
								height={100}
								className='object-contain'
							/>
						</div>
					</div>

					<Menubar className='border-none bg-white shadow-none'>
						<MenubarMenu>
							<MenubarTrigger className='flex items-center gap-2'>
								<div className='w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex items-center justify-center'>
									<UserIcon className='w-4 h-4 sm:w-6 sm:h-6 text-gray-700' />
								</div>
								<div className='hidden sm:flex flex-col items-start'>
									<p className='text-sm font-medium text-gray-700'>
										Admin
									</p>
									<p className='text-sm font-medium text-gray-700'>
										support@tinkantrust.com
									</p>
								</div>
								<ChevronDownIcon className='w-4 h-4 text-gray-700' />
							</MenubarTrigger>
							<MenubarContent>
								<MenubarItem>
									<Link
										href='/admin/dashboard/settings'
										className='flex items-center gap-2'
									>
										<UserIcon className='w-4 h-4 text-gray-700' />
										Profile
									</Link>
								</MenubarItem>
								<MenubarSeparator />
								<MenubarItem>
									<Link
										href='/admin/dashboard/settings'
										className='flex items-center gap-2'
									>
										<SettingsIcon className='w-4 h-4 text-gray-700' />
										Settings
									</Link>
								</MenubarItem>
								<MenubarSeparator />
								<MenubarItem>
									<LogoutButton />
								</MenubarItem>
							</MenubarContent>
						</MenubarMenu>
					</Menubar>
				</div>
				<div className='md:p-10 p-4 mt-16 min-h-[calc(100vh-100px)]'>
					{children}
				</div>
				<div className='flex justify-between items-center px-10 py-10 bg-gray-100/50'>
					<p className='text-sm font-medium text-gray-700 capitalize'>
						Copyright {new Date().getFullYear()} &copy; All rights
						reserved
					</p>
					<p className='text-sm font-medium text-gray-700'>
						<Link
							href='/privacy-policy'
							className='text-sm font-medium text-gray-700'
						>
							Privacy Policy
						</Link>
					</p>
				</div>
			</main>
		</SidebarProvider>
	);
};

export default AdminDashboardLayout;
