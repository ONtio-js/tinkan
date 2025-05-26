import { Button } from "@/components/ui/button";

const Plans = () => {
    const plans = [ 
        {
            id: 1,
            name: 'Basic',
            description: 'Basic plan',
            minPrice: 100,
            maxPrice: 200,
            features: ['Feature 1', 'Feature 2', 'Feature 3'],
            duration: '1 month',
            interestRate: 10
        },
        {
            id: 2,
            name: 'Pro',
            description: 'Pro plan',
            minPrice: 200,
            maxPrice: 300,
            features: ['Feature 1', 'Feature 2', 'Feature 3'],
            duration: '1 month',
            interestRate: 10
        },
        {
            id: 3,
            name: 'Enterprise',
            description: 'Enterprise plan',
            minPrice: 300,
            maxPrice: 400,
            features: ['Feature 1', 'Feature 2', 'Feature 3'],
            duration: '1 month',
            interestRate: 10
        },
        {
            id: 4,
            name: 'VIP',
            description: 'VIP plan',
            minPrice: 400,
            maxPrice: 500,
            features: ['Feature 1', 'Feature 2', 'Feature 3'],
            duration: '1 month',
            interestRate: 10
        }
    ];
    return (
        <div>
            <h1 className="text-2xl font-bold text-center mb-5">Copy Trading Plans</h1>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
                {plans.map((plan) => (
                    <div key={plan.id} className="bg-black   ">
                        <div className="h-[50px]  bg-[#003300] px-4 flex items-center justify-between">
                            <p className="text-white text-sm font-bold">{plan.name} Plan</p>
                            <p className="text-white text-sm font-bold">Duration: {plan.duration}</p>
                        </div>
                        <div className="p-4">
                            <p className="text-white">{plan.description}</p>
                            <div className="flex items-center justify-between">
                                <p>Minimum Price:</p>
                                <p className="text-white font-semibold">${plan.minPrice}</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p>Maximum Price:</p>
                                <p className="text-white font-semibold">${plan.maxPrice}</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p>Interest Rate:</p>
                                <p className="text-white font-semibold">{plan.interestRate}%</p>
                            </div>
                            <div className="">
                               
                                <ul className=" list-inside mt-4 space-y-2">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="text-white font-medium border-b border-gray-300 ">{feature}</li>
                                    ))}
                                </ul>
                            </div>
                            <Button className="w-full mt-4 h-10 bg-green-500 text-white hover:bg-green-600  ">Subscribe</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Plans;