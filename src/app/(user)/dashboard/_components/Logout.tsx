'use client'
import { logout } from "@/actions/auth/login";
import { LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";
export const Logout = () => {
	const router = useRouter();
    const handleLogout = async () => {
        await logout();
        router.push('/auth/login');
    }
	return (
		<div
			onClick={handleLogout}
		    className='flex items-center gap-2'
		>
			<LogOutIcon className='text-blue-500' />
			Logout
		</div>
	);
};
