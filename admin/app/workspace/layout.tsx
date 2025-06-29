'use client';

import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import {ReactNode} from "react";
import {
    SidebarProvider,
    SidebarTrigger,
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    // SidebarHeader,
    SidebarGroupLabel,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
} from "@/components/ui/sidebar"

const items = [
    {
        title: "Home",
        url: "#",
        icon: Home,
    },
    {
        title: "Inbox",
        url: "#",
        icon: Inbox,
    },
    {
        title: "Calendar",
        url: "#",
        icon: Calendar,
    },
    {
        title: "Search",
        url: "#",
        icon: Search,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
]

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <div className="w-full h-full flex flex-col overflow-hidden bg-[#f2f4f7]">
            <div className="w-full h-[60px]">
                顶部header 区域
                <div>
                    1
                </div>
            </div>
            <SidebarProvider className="min-w-0 flex-[1] overflow-hidden border-t border-[#c8ceda24] box-border bg-[#f2f4f7]">
                <Sidebar>
                    <SidebarContent>
                        <SidebarGroup>
                            <SidebarGroupLabel>组织架构</SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    {items.map((item) => (
                                        <SidebarMenuItem key={item.title}>
                                            <SidebarMenuButton asChild>
                                                <a href={item.url}>
                                                    <item.icon />
                                                    <span>{item.title}</span>
                                                </a>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    ))}
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    </SidebarContent>
                </Sidebar>
                <div className="min-w-0 h-full flex-[1] overflow-y-auto">
                    {children}
                </div>
            </SidebarProvider>
        </div>
    );
}