import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AppHomePage() {
	return (
		<div className="container mx-auto space-y-6 text-foreground">
			<div className="flex items-center justify-between"></div>

			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
						<div className="text-2xl font-bold text-green-600">+12.5%</div>
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">$1,250.00</div>
						<p className="text-xs text-muted-foreground">Trending up this month</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">New Customers</CardTitle>
						<div className="text-2xl font-bold text-red-600">-20%</div>
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">1,234</div>
						<p className="text-xs text-muted-foreground">Down 20% this period</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Active Accounts</CardTitle>
						<div className="text-2xl font-bold text-green-600">+12.5%</div>
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">45,678</div>
						<p className="text-xs text-muted-foreground">Strong user retention</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Growth Rate</CardTitle>
						<div className="text-2xl font-bold text-green-600">+4.5%</div>
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">4.5%</div>
						<p className="text-xs text-muted-foreground">Steady performance</p>
					</CardContent>
				</Card>
			</div>

			<Card>
				<CardHeader>
					<CardTitle>Visitor Analytics</CardTitle>
					<CardDescription>Total visitors for the last 3 months</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="h-[200px] flex items-center justify-center border border-dashed rounded-lg">
						<p className="text-muted-foreground">Chart placeholder</p>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
