"use client";

import type { LucideIcon } from "lucide-react";
import { BarChart3, Briefcase, HelpCircle, PieChart, Search, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarSeparator,
} from "@/components/ui/sidebar";

const userData = {
	user: {
		name: "shadow",
		email: "s@example.com",
		avatar: "/avatars/shadcn.jpg",
	},
};

type NavItem = { title: string; icon: LucideIcon; href: string };

const navPrimaryLinks: NavItem[] = [
	{ title: "Inicio", icon: BarChart3, href: "/" },
	{ title: "Sanes", icon: PieChart, href: "/sanes" },
	{ title: "Clientes", icon: BarChart3, href: "/clients" },
	{ title: "Plantillas de mensajes", icon: Briefcase, href: "/messages" },
];

const settingsData: NavItem[] = [
	{ title: "Settings", icon: Settings, href: "/settings" },
	{ title: "Get Help", icon: HelpCircle, href: "/help" },
	{ title: "Search", icon: Search, href: "/search" },
];

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
	const pathname = usePathname();

	const isActivePath = (href: string) => {
		if (href === "/") return pathname === "/";
		return pathname === href || pathname.startsWith(href + "/");
	};

	return (
		<Sidebar variant="inset" {...props}>
			<SidebarHeader>
				<div className="flex items-center gap-2 px-2 py-2">
					<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
						<span className="text-sm font-bold">SD</span>
					</div>
					<div className="flex flex-col">
						<span className="text-sm font-semibold">SAN DIGITAL</span>
					</div>
				</div>
			</SidebarHeader>

			<SidebarContent>
				{/* Main Navigation */}
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu>
							{navPrimaryLinks.map(item => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton
										asChild
										isActive={isActivePath(item.href)}
										tooltip={item.title}
										size="lg"
									>
										<Link
											href={item.href}
											className="flex items-center gap-2 w-full"
										>
											<item.icon className="h-4 w-4" />
											<span>{item.title}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>

			<SidebarFooter>
				{/* Settings Section */}
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu>
							{settingsData.map(item => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton
										asChild
										isActive={isActivePath(item.href)}
										tooltip={item.title}
										size="lg"
									>
										<Link
											href={item.href}
											className="flex items-center gap-2 w-full"
										>
											<item.icon className="h-4 w-4" />
											<span>{item.title}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>

				<SidebarSeparator />

				{/* User Section */}
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton tooltip={userData.user.name}>
									<div className="flex h-6 w-6 items-center justify-center rounded-full bg-muted">
										<span className="text-xs font-medium">
											{userData.user.name.slice(0, 2).toUpperCase()}
										</span>
									</div>
									<div className="flex flex-col gap-0.5 leading-none">
										<span className="text-xs font-medium">
											{userData.user.name}
										</span>
										<span className="text-xs text-muted-foreground">
											{userData.user.email}
										</span>
									</div>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarFooter>
		</Sidebar>
	);
}
