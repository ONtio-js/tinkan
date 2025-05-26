import { BellDotIcon } from "lucide-react";

const TradeSignals = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[calc(100vh-100px)]">
            <div className="flex flex-col items-center justify-center gap-2">
                <BellDotIcon className="w-20 h-20 animate-pulse" color="orange"/>
                <h1 className="text-xl font-bold">Trading Signals</h1>
                <p className="text-sm text-gray-500">
                    Get notified when a trade is triggered.
                </p>
            </div>
         
        </div>
    )
}

export default TradeSignals;