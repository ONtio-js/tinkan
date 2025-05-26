import {
	BarChart2,
	PiggyBankIcon,
	UsersRoundIcon,
	CreditCardIcon,
	ActivitySquareIcon,
} from 'lucide-react';
import { getAllUsers } from '@/actions/admin/users';
import { getAllTrade } from '@/actions/admin/getAlltrade';

const AdminDashboard = async () => {
	const users = await getAllUsers();
	const trades = await getAllTrade();
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
			<div className='bg-gray-100 rounded-lg p-4 space-y-5 shadow-md hover:bg-gray-200 cursor-pointer hover:translate-x-1.5 transition-all duration-300 ease-in-out'>
				<div className='flex items-center justify-between'>
					<h4>Total Users</h4>
					<UsersRoundIcon color='green' />
				</div>
				<h3>{users.length}</h3>
			</div>
			<div className='bg-gray-100 rounded-lg p-4 space-y-5 shadow-md hover:bg-gray-200 cursor-pointer hover:translate-x-1.5 transition-all duration-300 ease-in-out'>
				<div className='flex items-center justify-between'>
					<h4>Total Trades</h4>
					<BarChart2 color='green' />
				</div>
				<h3>{trades.length}</h3>
			</div>
			<div className='bg-gray-100 rounded-lg p-4 space-y-5 shadow-md hover:bg-gray-200 cursor-pointer hover:translate-x-1.5 transition-all duration-300 ease-in-out'>
				<div className='flex items-center justify-between'>
					<h4>Total Deposits</h4>
					<PiggyBankIcon color='green' />
				</div>
				<h3>100</h3>
			</div>
			<div className='bg-gray-100 rounded-lg p-4 space-y-5 shadow-md hover:bg-gray-200 cursor-pointer hover:translate-x-1.5 transition-all duration-300 ease-in-out'>
				<div className='flex items-center justify-between'>
					<h4>Total Withdrawals</h4>
					<CreditCardIcon color='red' />
				</div>
				<h3>100</h3>
			</div>
			<div className='bg-gray-100 rounded-lg p-4 space-y-5 shadow-md hover:bg-gray-200 cursor-pointer hover:translate-x-1.5 transition-all duration-300 ease-in-out'>
				<div className='flex items-center justify-between'>
					<h4>Online Users</h4>
					<ActivitySquareIcon color='green' />
				</div>
				<h3>100</h3>
			</div>
			<div className='bg-gray-100 rounded-lg p-4 space-y-5 shadow-md hover:bg-gray-200 cursor-pointer hover:translate-x-1.5 transition-all duration-300 ease-in-out'>
				<div className='flex items-center justify-between'>
					<h4>Total deposit requests</h4>
					<UsersRoundIcon color='green' />
				</div>
				<h3>100</h3>
			</div>
			<div className='bg-gray-100 rounded-lg p-4 space-y-5 shadow-md hover:bg-gray-200 cursor-pointer hover:translate-x-1.5 transition-all duration-300 ease-in-out'>
				<div className='flex items-center justify-between'>
					<h4>Total withdrawals requests</h4>
					<UsersRoundIcon color='red' />
				</div>
				<h3>100</h3>
			</div>
		</div>
	);
};

export default AdminDashboard;
