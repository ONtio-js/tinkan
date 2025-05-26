import Image from 'next/image';
import Link from 'next/link';
import { UserProvider } from '@/lib/context/UserContext';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='w-full h-full flex  '>
			<div className="hidden md:block  w-full min-h-screen  mx-auto  px-10 bg-[url('/bg-1.jpg')] bg-cover bg-center p-10">
				<div className='flex items-center gap-2'>
					<Link
						href='/'
						className='w-full h-full flex items-center '
					>
						<Image
							src='/logo.png'
							alt='logo'
							width={200}
							height={100}
						/>
					</Link>
				</div>
			</div>
			<div className='w-full  flex items-center justify-center '>
				<UserProvider>{children}</UserProvider>
			</div>
		</div>
	);
};

export default AuthLayout;
