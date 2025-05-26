import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { CheckCircleIcon, XCircleIcon } from "lucide-react"
import PendingBadge from "@/app/(admin)/components/PendingBadge";
import { approveWithdrawalRequest, getAllWithdrawalRequest, rejectWithdrawalRequest } from "@/actions/admin/getWithdrawalRequest";
import SuccessBadge from "@/app/(admin)/components/SuccessBadge";
import CancelledBadge from "@/app/(admin)/components/CancelledBadge";
const Withdrawal = async () => {
    const withdrawalRequest = await getAllWithdrawalRequest();
    return <div>
    <h2 className="text-2xl font-bold">Withdrawal History</h2>
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {withdrawalRequest.map((request) => (
                <TableRow key={request.id}>
                    <TableCell>{request.createdAt.toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })}</TableCell>
                    <TableCell>{request.user.name}</TableCell>
                    <TableCell>{request.amount}</TableCell>
                    <TableCell>{request.paymentMethod}</TableCell>
                    <TableCell> {request.status === 'pending' ? <PendingBadge /> : request.status === 'success' ? <SuccessBadge /> : <CancelledBadge />}     </TableCell>
                    <TableCell className="flex gap-2">
                    <form action={async () => {
                        "use server"
                        await approveWithdrawalRequest(request.id);
                    }}>
                    <Button variant="outline" className="bg-green-500 text-white">
                        <CheckCircleIcon className="w-4 h-4" />
                    </Button>
                    </form>
                    <form action={async () => {
                        "use server"
                        await rejectWithdrawalRequest(request.id);
                    }}>
                    <Button variant="outline" className="bg-red-500 text-white">
                        <XCircleIcon className="w-4 h-4" />
                    </Button>
                    </form>
                </TableCell>
            </TableRow>
            ))}
        </TableBody>
    </Table>
  </div>;
};

export default Withdrawal;
    