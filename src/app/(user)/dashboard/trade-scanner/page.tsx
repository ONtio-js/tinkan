import { Button } from "@/components/ui/button";
import Link from "next/link";
import TradingView2 from "../_components/TradingView/TradingView2";
import Tradeview1 from "../_components/TradingView/Tradeview1";

const TradeScanner =  () => {
	
    return (
		<>
			<div
				className={`fixed top-0 left-0 z-50 flex flex-col items-center justify-center h-screen w-screen bg-black/80 `}
			>
				<div className='flex flex-col items-center justify-center gap-4 max-w-md bg-white p-4 rounded-md'>
					<h2 className='text-2xl font-bold'>scan and trade live</h2>
					<p className='text-sm text-gray-800 text-center'>
						 You are not eligible to view livestream
						of ongoing trades. You need to have the Coporate Plan of
						$200,000 enabled on your account to proceed. Kindly
						contact support for more details
					</p>
					<div className='flex w-full items-center justify-center gap-10'>
						<Link href='/dashboard/deposit'>
							<Button className='bg-[var(--myGreen)] text-white'>
								Upgrade
							</Button>
						</Link>
						<Link href='/dashboard'>
							<Button variant='outline' className="bg-red-500 text-white">Cancel</Button>
						</Link>
					</div>
				</div>
			</div>
			<div className='w-full h-[500px]'>
				<Tradeview1 />
			</div>
			<div className='w-full h-[500px]'>
				<TradingView2 />
			</div>
		</>
	);
}

export default TradeScanner;