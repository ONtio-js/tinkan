import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AllTransactions from './AllTransactions';
import DepositHistory from './DepositHistory';
import WithdrawalHistory from './WithdrawalHistory';
const TransactionHistory =  () => {
	
	return (
		<Tabs
			className='w-full'
			defaultValue='transaction'
		>
			<TabsList className='flex justify-end items-end max-w-[500px] h-12'>
				<TabsTrigger value='transaction'>
					Transaction History
				</TabsTrigger>
				<TabsTrigger value='deposit'>Deposit History</TabsTrigger>
				<TabsTrigger value='withdraw'>Withdrawal History</TabsTrigger>
			</TabsList>

			<TabsContent
				value='transaction'
				className='w-full mt-5'
			>
				<AllTransactions />
			</TabsContent>
			<TabsContent
				value='deposit'
				className='w-full mt-5'
			>
				<DepositHistory />
			</TabsContent>
			<TabsContent
				value='withdraw'
				className='w-full mt-5'
			>
				<WithdrawalHistory />
			</TabsContent>
		</Tabs>
	);
};

export default TransactionHistory;
