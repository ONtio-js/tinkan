import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';
import ChatwootWidget from '@/components/chatwootWidget';

const inter = Inter({ subsets: ['latin'] });



export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	
	return (
		<html lang='en'>
		
			<body className={inter.className}>
				{children}
				<Toaster />
				<ChatwootWidget />
			</body>
		</html>
	);
}
