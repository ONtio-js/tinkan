import { Table, TableHead, TableRow, TableHeader, TableCell, TableBody } from "@/components/ui/table";
import SuccessBadge from "@/app/(admin)/components/SuccessBadge";
import { getAllTransactions } from "@/actions/admin/getAlltransactions";
import PendingBadge from "@/app/(admin)/components/PendingBadge";
import CancelledBadge from "@/app/(admin)/components/CancelledBadge";
const Transactions = async () => {
    const transactions = await getAllTransactions();
  return <div>
    <h2 className="text-2xl font-bold mb-5 bg-gray-100/50 py-5 pl-5 "> All Transactions History</h2>
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Transaction ID</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Transaction Type</TableHead>
                <TableHead>Payment Method</TableHead>
                <TableHead>Status</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {transactions.map((transaction) => (
                <TableRow key={transaction.transactionId}>
                    <TableCell>{transaction.createdAt.toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })  }</TableCell>
                    <TableCell>{transaction.transactionId}</TableCell>
                    <TableCell>{transaction.user.name}</TableCell>
                    <TableCell>{transaction.amount}</TableCell>
                    <TableCell>{transaction.transactionType}</TableCell>
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
  </div>;
};

export default Transactions;
