import { XCircleIcon } from 'lucide-react';

const CancelledBadge = () => {
	return (
		<div className='flex items-center gap-2'>
			<span className='bg-red-500 text-white text-sm font-bold w-4 h-4 flex items-center justify-center rounded-full'>
				<XCircleIcon className='w-4 h-4' />
			</span>
			cancelled
		</div>
	);
};
export default CancelledBadge;
