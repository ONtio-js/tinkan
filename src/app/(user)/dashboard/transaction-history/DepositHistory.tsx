import PendingBadge from "@/app/(admin)/components/PendingBadge";
import SuccessBadge from "@/app/(admin)/components/SuccessBadge";
import { Table, TableRow, TableHeader, TableBody, TableHead, TableCell } from "@/components/ui/table";
import { getDepositTransactions } from "@/actions/getAllTransactions";
import CancelledBadge from "@/app/(admin)/components/CancelledBadge";
    const DepositHistory = async () => {
        const transactions = await getDepositTransactions();
    return (
		<Table>
			<TableHeader>
				<TableRow className='bg-gray-800 py-5 '>
					<TableHead className='text-white'>Date</TableHead>
					<TableHead className='text-white'>Transaction ID</TableHead>
					<TableHead className='text-white'>User</TableHead>
					<TableHead className='text-white'>Amount</TableHead>
					<TableHead className='text-white'>Payment Method</TableHead>
					<TableHead className='text-white'>Status</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{transactions.map((transaction) => (
					<TableRow
						key={transaction.transactionId}
						className='h-10'
					>
						<TableCell>
							{transaction.createdAt.toLocaleDateString('en-US', {
								year: 'numeric',
								month: 'long',
								day: 'numeric',
							})}
						</TableCell>
						<TableCell>{transaction.transactionId}</TableCell>
						<TableCell>{transaction.user.name}</TableCell>
						<TableCell>${transaction.amount.toFixed(2)}</TableCell>
						<TableCell>{transaction.paymentMethod}</TableCell>
						<TableCell>
							{transaction.status === 'success' ? (
								<SuccessBadge />
							) : transaction.status === 'pending' ? (
								<PendingBadge />
							) : (
								<CancelledBadge />
							)}
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>    
	);
}

export default DepositHistory;