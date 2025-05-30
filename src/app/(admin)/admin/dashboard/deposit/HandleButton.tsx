import { Button } from '@/components/ui/button';
import { CheckCircleIcon, TrashIcon, XCircleIcon } from 'lucide-react';
import {
	approveDepositRequest,
	deleteDepositRequest,
	rejectDepositRequest,
} from '@/actions/admin/getDepositRequest';

export default function HandleButton({
	depositId,
	userId,
}: {
	depositId: string;
	userId: string;
}) {
	return (
		<div className='flex gap-2'>
			<form
				action={async () => {
					'use server';
					await approveDepositRequest(depositId, userId);
				}}
			>
				<Button
					type='submit'
					variant='outline'
					className='bg-green-500 text-white'
				>
					<CheckCircleIcon className='w-4 h-4' />
				</Button>
			</form>
			<form
				action={async () => {
					'use server';
					await rejectDepositRequest(depositId);
				}}
			>
				<Button
					type='submit'
					variant='outline'
					className='bg-amber-500 text-white'
				>
					<XCircleIcon className='w-4 h-4' />
				</Button>
			</form>
			<form
				action={async () => {
					'use server';
					await deleteDepositRequest(depositId);
				}}
			>
				<Button
					type='submit'
					variant='outline'
					className='bg-red-500 text-white'
				>
					<TrashIcon className='w-4 h-4' />
				</Button>
			</form>
		</div>
	);
}
