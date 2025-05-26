import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { XCircleIcon, PencilIcon, EyeIcon } from 'lucide-react';
import { deleteUser, getAllUsers } from '@/actions/admin/users';
import Link from 'next/link';
const Users = async () => {
	const users = await getAllUsers();
	return (
		<div>
			<h1 className='text-2xl font-bold mb-5 bg-gray-100/50 py-5 pl-5 '>
				Manage Users
			</h1>

			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Name</TableHead>
						<TableHead>Email</TableHead>
						<TableHead>Phone</TableHead>
						<TableHead>Balance</TableHead>
						<TableHead>Referral Code</TableHead>
						<TableHead>KYC Status</TableHead>
						<TableHead>Registration Date</TableHead>
						<TableHead>Action</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{users.map((user) => (
						<TableRow key={user.id}>
							<TableCell>{user.name}</TableCell>
							<TableCell>{user.email}</TableCell>
							<TableCell>{user.phone}</TableCell>
							<TableCell>
								$
								<span className='text-green-500'>
									{user.walletBalance?.toFixed(2)}{' '}
								</span>
							</TableCell>
							<TableCell>{user.refcode}</TableCell>
							<TableCell>
								{user.isVerified ? (
									<span className='text-green-500'>
										Verified
									</span>
								) : (
									<span className='text-red-500'>
										Not Verified
									</span>
								)}
							</TableCell>
							<TableCell>
								{user.createdAt.toLocaleDateString()}
							</TableCell>
							<TableCell className='flex items-center gap-2 flex-wrap'>
								<Link
									href={`/admin/dashboard/users/${user.id}`}
								>
									<Button
										variant='outline'
										className='bg-green-500 text-white'
									>
										<EyeIcon className='w-4 h-4' />
									</Button>
								</Link>
								<Button
									variant='outline'
									className='bg-blue-500 text-white  '
								>
									<PencilIcon className='w-4 h-4' />
								</Button>
								<form
									action={async () => {
										'use server';
										await deleteUser(user.id);
									}}
								>
									<Button
										variant='outline'
										className='bg-red-500 text-white'
									>
										<XCircleIcon className='w-4 h-4' />
									</Button>
								</form>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
};

export default Users;
