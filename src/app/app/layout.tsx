import { AppSidebar } from "@/components/app/app-sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { headers } from "next/headers";
import { ReactNode } from "react";

interface AppLayoutProps {
	children: ReactNode;
}

const ROUTES_NAMES = {
	["/"]: "Inicio",
	["/about"]: "About",
	["/contact"]: "Contact",
	["/app"]: "App",
};

export default async function AppLayout({ children }: AppLayoutProps) {
	const headersList = await headers();
	const pathname = (headersList.get("x-pathname") as keyof typeof ROUTES_NAMES) || "/";

	return (
		<ThemeProvider>
			<SidebarProvider>
				<AppSidebar />
				<SidebarInset>
					<header className="flex h-16 shrink-0 items-center gap-2 border-b border-b-sidebar px-4 text-foreground">
						<SidebarTrigger className="-ml-1" />
						<span className="font-medium">{ROUTES_NAMES[pathname] || "Unknown"}</span>
						<div className="ml-auto">
							<ThemeToggle />
						</div>
					</header>
					<div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
				</SidebarInset>
			</SidebarProvider>
		</ThemeProvider>
	);
}
