
import { getSession } from '@/lib/session';
import { redirect } from 'next/navigation';
import { db } from '@/lib/db';
import DashboardClient from './_components/DashboardClient';

const DashboardPage = async () => {
	const session = await getSession();
	if (!session) {
		redirect('/auth/login');
	}
	const user = await db.user.findUnique({
		where: {
			id: session.userId,
		},
	});
	if (!user) {
		redirect('/auth/login');
	}

	return <DashboardClient user={user} />;
};

export default DashboardPage;
