import { getUserById } from '@/actions/admin/users';

const ViewUser = async ({ params }: { params: Promise<{ id: string }> }) => {
	const resolvedParams = await params;
	const user = await getUserById(resolvedParams.id);
	if (!user) return <div>User not found</div>;
	return (
		<div className='flex h-screen flex-col items-center justify-center gap-4 px-5 bg-gray-100'>
			<div className='bg-white rounded-lg  w-full md:w-1/2 space-y-5 p-5'>
				<h1 className='text-2xl font-bold clr-grad-1'>{user.name}</h1>
				<div className='grid md:grid-cols-3 gap-5'>
					<div className='bg-green-500 text-center text-white p-2 rounded-md'>
						<h4>Balance</h4>
						<h2>${user.walletBalance?.toFixed(2)}</h2>
					</div>
					<div className='bg-blue-500 text-center text-white p-2 rounded-md'>
						<h4>Invested Amount</h4>
						<h2>${user.investmentBalance?.toFixed(2)}</h2>
					</div>
					<div className='bg-orange-500 text-center text-white p-2 rounded-md'>
						<h4>Profit Earned</h4>
						<h2>${user.profitBalance?.toFixed(2)}</h2>
					</div>
				</div>
				<p className='text-sm text-gray-500 bg-gray-100 p-2 rounded-md'>
					<span className='font-bold'>Email:</span> {user.email}
				</p>
				<p className='text-sm text-gray-500 bg-gray-100 p-2 rounded-md'>
					<span className='font-bold'>Phone:</span> {user.phone}
				</p>
				<p className='text-sm text-gray-500 bg-gray-100 p-2 rounded-md'>
					<span className='font-bold'>Address:</span> {user.address}
				</p>
				<p className='text-sm text-gray-500 bg-gray-100 p-2 rounded-md'>
					<span className='font-bold'>Country:</span> {user.country}
				</p>
				<p className='text-sm text-gray-500 bg-gray-100 p-2 rounded-md'>
					<span className='font-bold'>Account Type:</span>{' '}
					{user.AccountType}
				</p>
				<p className='text-sm text-gray-500 bg-gray-100 p-2 rounded-md'>
					<span className='font-bold'>Registration Date:</span>{' '}
					{user.createdAt.toLocaleDateString()}
				</p>
				<p className='text-sm text-gray-500 bg-gray-100 p-2 rounded-md'>
					<span className='font-bold'>KYC Status:</span>{' '}
					{user.isVerified ? 'Verified' : 'Not Verified'}
				</p>
				<p className='text-sm text-gray-500 bg-gray-100 p-2 rounded-md'>
					<span className='font-bold'>Referral Code:</span>{' '}
					{user.refcode}
				</p>
			</div>
		</div>
	);
};

export default ViewUser;
