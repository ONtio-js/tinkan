import { getTradingTransactions } from "@/actions/getAllTransactions";
import SuccessBadge from "@/app/(admin)/components/SuccessBadge";
import { Table, TableBody, TableCell, TableRow,  TableHead,  TableHeader } from "@/components/ui/table";
import PendingBadge from "@/app/(admin)/components/PendingBadge";
const CopyTrading = async () => {
    const transactions = await getTradingTransactions();
    return (
		<Table>
			<TableHeader>
				<TableRow className="bg-gray-800">
					<TableHead className="text-white">Date</TableHead>
					<TableHead className="text-white">Transaction ID</TableHead>
					<TableHead className="text-white">Order Type</TableHead>
					<TableHead className="text-white">Pair</TableHead>
					<TableHead className="text-white">Transaction Type</TableHead>
					<TableHead className="text-white">Amount</TableHead>
					<TableHead className="text-white">Status</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{transactions.map((transaction) => (
					<TableRow key={transaction.id}>
						<TableCell>{transaction.date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</TableCell>
						<TableCell>{transaction.transactionId}</TableCell>
						<TableCell>{transaction.type === 'buy' ? <span className="text-green-500">Buy</span> : <span className="text-red-500">Sell</span>}</TableCell>
						<TableCell>{transaction.postType}</TableCell>
						<TableCell>{transaction.transactionType}</TableCell>
						<TableCell>${transaction.amount.toFixed(2)}</TableCell>
						<TableCell>
							{transaction.status === 'pending' ? <PendingBadge /> : <SuccessBadge />}
						</TableCell>
					</TableRow>
				))}
				</TableBody>
		</Table>
	);
}

export default CopyTrading;