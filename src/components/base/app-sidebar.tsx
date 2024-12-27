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
import { group } from "console";

const groupMenuData = {
    groupName: "Thoughts",
    items: [
        {
            title: "Opnions",
            url: "#",
            icon: SquareTerminal,
            isActive: true,
            items: [
                {
                    title: "Writing",
                    url: "/writing",
                },
                {
                    title: "Feeds",
                    url: "/feeds",
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

const tutorialsMenuData = {
    groupName: "教程",
    items: []
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
