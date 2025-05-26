'use client'
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { dashboardSettingSchema } from "../../../../../../schema/dashboardSettingSchema";
import { Input } from "@/components/ui/input";
const Settings = () => {
    const form = useForm<z.infer<typeof dashboardSettingSchema>>({
        resolver: zodResolver(dashboardSettingSchema),
        defaultValues: {
            siteName: "",
        },
    });
    const onSubmit = (values: z.infer<typeof dashboardSettingSchema>) => {
        console.log(values);
    }
  return (
		<div>
			<h1 className='text-2xl font-bold mb-5 bg-gray-100/50 py-5 pl-5 '>
				Settings
			</h1>
			<form action=''>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='space-y-8'
					>
						<div className='grid grid-cols-1 gap-4'>
							<FormField
								control={form.control}
								name='siteName'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Site Name</FormLabel>
										<FormControl>
											<Input
												{...field}
												type='text'
												placeholder="My Site"
											/>
										</FormControl>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='siteDescription'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Site Description</FormLabel>
										<FormControl>
											<Input {...field} placeholder="This is a description of the site" />
										</FormControl>
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name='siteEmail'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Site Email</FormLabel>
										<FormControl>
											<Input {...field} placeholder="example@gmail.com" />
										</FormControl>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='sitePhone'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Site Phone</FormLabel>
										<FormControl>
											<Input {...field} placeholder="+1234567890" />
										</FormControl>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='siteAddress'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Site Address</FormLabel>
										<FormControl>
											<Input {...field} placeholder="123 Main St, Anytown, USA" />
										</FormControl>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='copyrightYear'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Copyright Year</FormLabel>
										<FormControl>
											<Input {...field} placeholder="2025" />
										</FormControl>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='siteLogo'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Site Logo</FormLabel>
										<FormControl>
											<Input
												{...field}
												type='file'
												className='file:mr-2 file:py-2 file:h-16 file:my-auto file:rounded-md file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:cursor-pointer hover:file:bg-blue-600 h-20'
											/>
										</FormControl>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='siteFavicon'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Site Favicon</FormLabel>
										<FormControl>
											<Input
												{...field}
												type='file'
                                                className='file:mr-2 file:py-2 file:h-16 file:my-auto file:rounded-md file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:cursor-pointer hover:file:bg-blue-600 h-20'
											/>
										</FormControl>
									</FormItem>
								)}
							/>
						</div>
					</form>
				</Form>
			</form>
		</div>
  );
};

export default Settings;