import { CheckCircleIcon } from "lucide-react";


const SuccessBadge = () => {
	return (
		<div className='flex items-center gap-2'>
			<span className='bg-green-500 text-white text-sm font-bold w-4 h-4 flex items-center justify-center rounded-full'>
				<CheckCircleIcon className='w-4 h-4' /> 
			</span>
			approved
		</div>
	);
};

export default SuccessBadge;