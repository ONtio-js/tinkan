import TradeForm from '@/app/(admin)/components/form/TradeForm';
import BalanceForm from '@/app/(admin)/components/form/BalanceForm';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { getAllUsers } from '../../../../../actions/admin/users';
import UserSelect from '@/app/(admin)/components/UserSelect';

type UserData = {
	id: string;
	name: string;
	email: string;
	phone: string;
	walletBalance: number | null;
	profitBalance: number | null;
	investmentBalance: number | null;
	targetBalance: number | null;
	refcode: string | null;
	isVerified: boolean;
	createdAt: Date;
};

export default async function LiveTrade({
	searchParams,
}: {
	searchParams: Promise<{ userId?: string }>;
}) {
	const users = await getAllUsers();
	const params = await searchParams;
	const selectedUser: UserData | null = params.userId
		? users.find((user) => user.id === params.userId) || null
		: null;

	return (
		<div className='w-full bg-gray-100/50 py-5 px-5 rounded-lg '>
			<div className='flex flex-col md:flex-row gap-x-5 justify-between items-start w-full'>
				<UserSelect
					users={users}
					defaultUserId={selectedUser?.id}
				/>
				<div className='w-full md:w-2/3'>
					<Tabs defaultValue='trade'>
						<TabsList className='w-full flex justify-between gap-4'>
							<TabsTrigger
								value='balance'
								className='bg-gray-500 min-w-[100px]'
							>
								Balance
							</TabsTrigger>
							<TabsTrigger
								value='trade'
								className='bg-gray-500  min-w-[100px]'
							>
								Trade
							</TabsTrigger>
						</TabsList>
						<TabsContent
							value='balance'
							className='w-full mx-auto'
						>
							<BalanceForm user={selectedUser} />
						</TabsContent>
						<TabsContent
							value='trade'
							className='w-full mx-auto'
						>
							<TradeForm user={selectedUser} />
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</div>
	);
}
