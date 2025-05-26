import { Table, TableRow, TableHeader, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { CheckIcon, XIcon } from "lucide-react";
const Kyc = () => {
  return (
		<div>
			<h1 className='text-2xl font-bold mb-5 bg-gray-100/50 py-5 pl-5 '>Manage KYC</h1>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Name</TableHead>
						<TableHead>Email</TableHead>
						<TableHead>Phone</TableHead>
						<TableHead>KYC Status</TableHead>
						<TableHead>KYC Type</TableHead>
						<TableHead> File</TableHead>
						<TableHead>Action</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow>
						<TableCell>John Doe</TableCell>
						<TableCell>john.doe@example.com</TableCell>
						<TableCell>1234567890</TableCell>
						<TableCell>Pending</TableCell>
						<TableCell>International Passport</TableCell>
						<TableCell>File</TableCell>
						<TableCell>
              <Button variant='outline' className='bg-green-500 text-white h-7 w-12 text-sm '>
                <CheckIcon className='w-4 h-4' />
              </Button>
							<Button
								variant='outline'
								className='bg-red-500 text-white h-7 w-12 text-sm '
							>
								<XIcon className='w-4 h-4' />
							</Button>
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</div>
	);
};

export default Kyc;
