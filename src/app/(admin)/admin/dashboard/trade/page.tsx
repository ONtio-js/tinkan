import {
	TableHeader,
	TableRow,
	Table,
	TableHead,
	TableBody,
	TableCell,
} from '@/components/ui/table';
import SuccessBadge from '@/app/(admin)/components/SuccessBadge';
import { getAllTrades, getAllTrade } from '@/actions/admin/getAlltrade';
import { getAllApprovedTrade } from '@/actions/admin/getAlltrade';
import { getAllCancelledTrade } from '@/actions/admin/getAlltrade';

const Trade = async () => {
	const totalTrade = await getAllTrades();
	const successTrade = await getAllApprovedTrade();
	const cancelledTrade = await getAllCancelledTrade();
	const trade = await getAllTrade();
	return (
		<div>
			<h2 className='text-2xl font-bold mb-5 bg-gray-100/50 py-5 pl-5 '>
				{' '}
				All Trade History
			</h2>
			<div className='grid grid-cols-3 gap-5 mb-5'>
				<div className='w-full bg-gray-100/50 py-5 pl-5 rounded-lg space-y-2'>
					<h3 className='text-sm md:text-lg md:font-semibold '>Total Trade</h3>
					<p className='text-2xl font-bold text-blue-500'>
						{totalTrade}
					</p>
				</div>
				<div className='w-full bg-gray-100/50 py-5 pl-5 rounded-lg space-y-2'>
					<h3 className='text-sm md:text-lg md:font-semibold'>Success Trade</h3>
					<p className='text-2xl font-bold text-green-500'>
						{successTrade}
					</p>
				</div>
				<div className='w-full bg-gray-100/50 py-5 pl-5 rounded-lg space-y-2'>
					<h3 className='text-sm md:text-lg md:font-semibold'>
						Cancelled Trade
					</h3>
					<p className='text-2xl font-bold text-red-500'>
						{cancelledTrade}
					</p>
				</div>
			</div>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Date</TableHead>
						<TableHead>User</TableHead>
						<TableHead>Pair</TableHead>
						<TableHead>Type</TableHead>
						<TableHead>Amount</TableHead>
						<TableHead>Status</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{trade.map((trade) => (
						<TableRow key={trade.id}>
							<TableCell>
								{trade.date.toLocaleDateString()}
							</TableCell>
							<TableCell>{trade.user.name}</TableCell>
							<TableCell>{trade.postType}</TableCell>
							<TableCell className={trade.type === 'buy' ? 'text-green-500' : 'text-red-500'}>{trade.type}</TableCell>
							<TableCell>{trade.amount}</TableCell>
							<TableCell>
								<SuccessBadge />
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
};

export default Trade;
