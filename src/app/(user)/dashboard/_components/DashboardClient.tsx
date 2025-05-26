'use client';

import TradingViewWidget2 from './TradingView/TradingView2';
import TradingViewWidget from './TradingView/Tradeview1';
import Link from 'next/link';
import Image from 'next/image';
import ChartComponent from './ChartComponent';
import type { User } from '@/generated/prisma';

interface DashboardClientProps {
	user: User;
}

const DashboardClient = ({ user }: DashboardClientProps) => {
	return (
		<div className='flex flex-col gap-4  w-full'>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
				<div className='bg-black rounded-md p-5 flex flex-col gap-6  border-gray-300'>
					<div className='flex flex-col gap-1'>
						<p className='text-sm font-medium'>Account Balance</p>
						<div className='bg-blue-600/20 text-white rounded-md p-2 py-1 w-full'>
							<p className='text-xl font-semibold text-white'>
								${user.walletBalance?.toFixed(2) || '0.00'}
							</p>
						</div>
					</div>
					<div className='grid grid-cols-3 gap-2'>
						<div className='col-span-2 space-y-2'>
							<p className='text-sm font-medium'>{user.name}</p>
							<p className='text-sm font-medium'>{user.email}</p>
							<div className='flex justify-between items-center mt-4'>
								<h4>TARGET</h4>{' '}
								<div className='text-xs bg-orange-500 px-2 py-[1px] rounded-md'>
									in active
								</div>
							</div>
							<div className='w-full h-[7px] bg-gray-300 rounded-full mb-4'>
								<div className='h-[7px] bg-green-500 rounded-full w-1/2'></div>
							</div>
							<Link
								href='/dashboard/transaction-history'
								className='text-sm bg-blue-600 text-white rounded-md p-2 w-[170px] text-center mt-2'
							>
								View Transactions
							</Link>
						</div>
						<div>
							<Image
								src={'/dashboard/trade-icc.gif'}
								alt='profile'
								width={100}
								height={100}
								className='max-h-[250px] max-w-[200px]'
							/>
						</div>
					</div>
				</div>
				<div className='space-y-6'>
					<div className='bg-black rounded-md p-5 flex flex-col gap-2'>
						<p className='text-sm font-medium'>Total Deposit</p>
						<div className='bg-blue-600/20 text-white rounded-md p-2 py-1 w-full'>
							<p className='text-xl font-semibold text-white'>
								${user.investmentBalance?.toFixed(2) || '0.00'}
							</p>
						</div>
					</div>
					<div className='bg-black rounded-md p-5 flex flex-col gap-2 '>
						<p className='text-sm font-medium'>Trading Interest</p>
						<div className='bg-blue-600/20 text-white rounded-md p-2 py-1 w-full'>
							<p className='text-xl font-semibold text-white'>
								${user.profitBalance?.toFixed(2) || '0.00'}
							</p>
						</div>
						<Link
							href='/dashboard/trading-history'
							className='text-sm bg-blue-600 text-white rounded-md p-2 w-[150px] text-center'
						>
							View Trades
						</Link>
					</div>
				</div>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
				<div className='bg-black  rounded-md p-5 flex flex-col gap-6 '>
					<ChartComponent />
				</div>
				<div className='flex justify-between items-center gap-4  text-white min-h-[200px] p-10  rounded-md'>
					<div className='flex flex-col gap-2 max-w-2/3 '>
						<h3 className='text-2xl font-semibold '>
							Hello,{' '}
							<span className='clr-grad-1'>
								{user.name.split(' ')[0]}
							</span>
						</h3>
						<p className=''>
							Welcome Trader, Let&apos;s get your account up to
							date.
						</p>
						<Link
							href='/dashboard/settings'
							className=' text-white border border-white rounded-md p-2  font-semibold max-w-[150px] text-center'
						>
							Update Profile
						</Link>
					</div>
					<Image
						src={'/dashboard/welcome.webp'}
						alt='welcome'
						width={100}
						height={100}
						className='max-h-[150px] max-w-[200px]'
					/>
				</div>
			</div>
			<div className='h-[700px] w-full'>
				<div className='flex justify-between items-center py-2 bg-black rounded-md px-5'>
					<p className=' font-medium'>
						Latest price quotes/Highlights
					</p>
					<p className='text-sm bg-orange-500/20 px-2 py-1 rounded-md text-orange-500'>
						Updated every 5 seconds
					</p>
				</div>
				<div className='flex flex-col gap-4 w-full h-[300px]'>
					<TradingViewWidget2 />
				</div>
				<div className='flex flex-col gap-4 w-full h-[300px] mt-5'>
					<TradingViewWidget />
				</div>
			</div>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-4  bg-black rounded-md p-5'>
				<div className='clr-grad-1 border border-gray-200 flex flex-col rounded-md gap-2 items-center py-5'>
					<h3 className='text-2xl uppercase font-semibold'>
						unlock next level
					</h3>
					<p className='text-sm'>
						Get access to our premium features and tools.
					</p>
					<Image
						src={'/dashboard/silver.png'}
						alt='welcome'
						width={100}
						height={100}
						className='max-h-[150px] max-w-[200px]'
					/>
					<h2 className='text-2xl font-semibold'>
						${user.investmentBalance || '0.00'}/$100,000.00
					</h2>
					<p className='text-sm max-w-[400px] text-center'>
						Your account balance is $
						{user.walletBalance?.toFixed(2) || '0.00'}. To unlock
						the next level, you need to deposit $
						{100000 - (user.walletBalance ?? 0)}.
					</p>
				</div>
				<div className='flex flex-col gap-2 items-center justify-center'>
					<p className='font-medium text-center'>
						Upgrade to the next level to get access to our premium
						features and tools.
					</p>
					<Link
						href='/dashboard/deposit'
						className='text-sm bg-green-500 text-white rounded-md p-2 w-[150px] text-center'
					>
						Upgrade
					</Link>
				</div>
			</div>
		</div>
	);
};

export default DashboardClient;
