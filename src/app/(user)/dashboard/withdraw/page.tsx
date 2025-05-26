'use client';
import { WithdrawButton } from './withdraw-button';
import { useUser } from '@/lib/context/UserContext';

const Withdraw = () => {
	const { user } = useUser();

	return (
		<div>
			<div className='p-10 bg-black text-white rounded-lg flex flex-col gap-4 items-center justify-center'>
				<h1 className='text-2xl font-bold'>Account Balance</h1>
				<p className='text-4xl font-bold bg-green-500 rounded-lg p-2 px-5'>
					${user?.walletBalance?.toFixed(2)}
				</p>
				<WithdrawButton
					id={user?.id || ''}
					ethAddress={user?.ethAddress || ''}
					usdtAddress={user?.usdtAddress || ''}
					btcAddress={user?.btcAddress || ''}
				/>
			</div>
		</div>
	);
};

export default Withdraw;
