"use client"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail, SidebarTrigger } from "../ui/sidebar";
import { SidebarHeaderMenu } from "./sidebar-header-menu";
import { SidebarGroupNavMenu } from "./nav-group";
import {
    AudioWaveform,
    BookOpen,
    Bot,
    Command,
    Frame,
    GalleryVerticalEnd,
    Map,
    PieChart,
    Settings2,
    SquareTerminal,
} from "lucide-react"

const groupMenuData = {
    groupName: "My Views",
    items: [
        {
            title: "Playground",
            url: "#",
            icon: SquareTerminal,
            isActive: true,
            items: [
                {
                    title: "Writing",
                    url: "#",
                },
                {
                    title: "Feeds",
                    url: "#",
                },
                {
                    title: "Tutorials",
                    url: "#",
                },
            ],
        },
        // {
        //     title: "Models",
        //     url: "#",
        //     icon: Bot,
        //     items: [
        //         {
        //             title: "Genesis",
        //             url: "#",
        //         },
        //         {
        //             title: "Explorer",
        //             url: "#",
        //         },
        //         {
        //             title: "Quantum",
        //             url: "#",
        //         },
        //     ],
        // },
        // {
        //     title: "Documentation",
        //     url: "#",
        //     icon: BookOpen,
        //     items: [
        //         {
        //             title: "Introduction",
        //             url: "#",
        //         },
        //         {
        //             title: "Get Started",
        //             url: "#",
        //         },
        //         {
        //             title: "Tutorials",
        //             url: "#",
        //         },
        //         {
        //             title: "Changelog",
        //             url: "#",
        //         },
        //     ],
        // },
        // {
        //     title: "Settings",
        //     url: "#",
        //     icon: Settings2,
        //     items: [
        //         {
        //             title: "General",
        //             url: "#",
        //         },
        //         {
        //             title: "Team",
        //             url: "#",
        //         },
        //         {
        //             title: "Billing",
        //             url: "#",
        //         },
        //         {
        //             title: "Limits",
        //             url: "#",
        //         },
        //     ],
        // },
    ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const sidebarMenuGroupData = groupMenuData
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>

                <SidebarHeaderMenu />
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroupNavMenu {...sidebarMenuGroupData} />
            </SidebarContent>
            <SidebarFooter>

            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
