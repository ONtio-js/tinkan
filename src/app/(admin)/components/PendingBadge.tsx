

const PendingBadge = () => {
	return (
		<div className='flex items-center gap-2'>
			<span className='bg-yellow-500 text-white text-sm font-bold w-4 h-4 flex items-center justify-center rounded-full'>
				?
			</span>
			pending
		</div>
	);
};

export default PendingBadge;    