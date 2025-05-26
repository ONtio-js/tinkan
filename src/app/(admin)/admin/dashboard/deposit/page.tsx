
import { Table, TableRow, TableHead, TableHeader, TableBody, TableCell   } from "@/components/ui/table";
import SuccessBadge from "@/app/(admin)/components/SuccessBadge";
import CancelledBadge from "@/app/(admin)/components/CancelledBadge";
import { getDepositRequest } from "@/actions/admin/getDepositRequest";
import PendingBadge from "@/app/(admin)/components/PendingBadge";
import HandleButton from "./HandleButton";
const Deposit = async () => {
    const depositRequest = await getDepositRequest();
	
  return (
		<div>
			<h2 className='text-2xl font-bold'>Deposit History</h2>
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
					{depositRequest.map((deposit) => (
						<TableRow key={deposit.id}>
							<TableCell>
								{deposit.createdAt.toLocaleDateString('en-US', {
									year: 'numeric',
									month: 'long',
									day: 'numeric',
								})}
							</TableCell>
							<TableCell>{deposit.user.name}</TableCell>
							<TableCell>{deposit.amount}</TableCell>
							<TableCell>{deposit.paymentMethod}</TableCell>
							<TableCell>
								{deposit.status === 'pending' ? (
									<PendingBadge />
								) : deposit.status === 'success' ? (
									<SuccessBadge />
								) : (
									<CancelledBadge />
								)}
							</TableCell>
							<TableCell>
								<HandleButton depositId={deposit.id} userId={deposit.userId} 	/>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
  );
};

export default Deposit;
