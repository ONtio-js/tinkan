import Image from "next/image";
import Link from "next/link";

const AdminAuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
		<div className='flex h-screen'>
			<div
				className='hidden md:block md:w-1/2 bg-gray-100 h-screen bg-cover bg-center'
				style={{ backgroundImage: "url('/bg-1.jpg')" }}
			>
				
					<Link
						href='/'
						className='p-20 block'
					>
						<Image
							src='/logo.png'
							alt='logo'
							width={200}
							height={100}
						/>
					</Link>
			
			</div>
			<div className='w-full md:w-1/2 flex items-center justify-center'>
				{children}
			</div>
		</div>
  );
};

export default AdminAuthLayout;
