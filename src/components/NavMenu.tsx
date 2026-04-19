"use client";

import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { siteConfig } from "@/config/site";

type NavMenuProps = {
	className?: string;
};

export const NavMenu = ({ className }: NavMenuProps) => {
	return (
		<ul className={clsx(className)}>
			{siteConfig.navItems.map((item) => (
				<li key={item.href}>
					<NavLink
						to={item.href}
						end={item.href === "/"}
						className={({ isActive }) =>
							clsx(
								"text-lg ",
								isActive ? "text-accent font-bold" : "text-foreground",
							)
						}
					>
						{item.label}
					</NavLink>
				</li>
			))}
		</ul>
	);
};
