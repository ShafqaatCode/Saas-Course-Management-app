'use client';
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

// This component renders a navigation bar with links to different pages.

const navItems = [
    { name: "Home", path: "/" },
    { name: "Companions", path: "/companions" },
    { name: "My Journey", path: "/my-journey" },
    // { name: "Subscription", path: "/subscription" },
    // { name: "Sign In", path: "/sign-in" },
]

const Navitems = () => {
    const pathname = usePathname();
    return (
       <nav className="flex items-center gap-4">
        {
            navItems.map( ({ name, path }) => (
            <Link 
            key={name} 
            href={path}
            className={cn(pathname === path && 'text-primary font-bold')}
            >
                {name}
            </Link>
            ))
        }
       </nav>
    )
}
export default Navitems;