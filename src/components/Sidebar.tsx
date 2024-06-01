'use client';

import { Bell, Cog, Cookie, CreditCard, Mail, MessageSquare, User, icons } from "lucide-react";
import UserItem from "./UserItem";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "./ui/command";

export default function Sidebar() {

    const menuList = [
        {
            group: "General",
            items: [
                {
                    link: "/",
                    icons: <User />,
                    text: "Profile"
                },
                {
                    link: "/",
                    icons: <Mail />,
                    text: "Inbox"
                },
                {
                    link: "/",
                    icons: <CreditCard />,
                    text: "Billing"
                },
                {
                    link: "/",
                    icons: <Bell />,
                    text: "Notification"
                }
            ]
        },
        {
            group: "Settings",
            items: [
                {
                    link: "/",
                    icons: <Cog />,
                    text: "General Settings"
                },
                {
                    link: "/",
                    icons: <Cookie />,
                    text: "Privacy"
                },
                {
                    link: "/",
                    icons: <MessageSquare />,
                    text: "Logs"
                }
            ]
        },
    ]

    return <div className="flex flex-col w-[300px] min-w[300px] border-r min-h-screen p-4">
        <div>
            <UserItem />
        </div>
        <div className="grow">
            <Command style={{ overflow: 'visible' }}>
                <CommandList style={{ overflow: 'visible' }}>
                    {menuList.map((menu: any, key: number) => (
                        <CommandGroup key={key} heading={menu.group}>
                            {menu.items.map((option: any, optionKey: number) => 
                                <CommandItem key={optionKey} className="flex gap-2 cursor-pointer">
                                    {option.icons}
                                    {option.text}
                                </CommandItem>
                            )}
                        </CommandGroup>
                    ))}
                </CommandList>
            </Command>
        </div>
        <div>Settings / Notification</div>
    </div>
};

