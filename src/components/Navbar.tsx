"use client";

import { useState } from "react";
import { Link } from "@heroui/react";
import { NavMenu } from "@/components/NavMenu";
import { siteConfig } from "@/config/site";
import { Logo, PhoneIcon } from "@/components/Icons";
import { TelegramLink } from "@/components/social/TelegramLink";
import { ViberLink } from "@/components/social/ViberLink";

export const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className="sticky top-0 z-40 w-full bg-background">
			<header className="container mx-auto flex items-center justify-between gap-4 py-5 px-7">
				<Link href="/" className="flex items-center gap-1 hidden 2xl:flex">
					<Logo />
				</Link>

				<div className="hidden 2xl:flex items-center gap-4">
					<NavMenu className="hidden 2xl:flex gap-5" />
				</div>

				<div className="hidden 2xl:flex items-center gap-4">
					<a href="tel:+380962202020" className="flex items-center gap-2">
						<PhoneIcon />
						<span>{siteConfig.phone}</span>
					</a>

					<TelegramLink />

					<ViberLink />
				</div>

				<div className="w-full flex 2xl:hidden items-center justify-between gap-2">
					<div className=" flex  items-center gap-4">
						<a href="tel:+380962202020" className="flex items-center gap-2">
							<PhoneIcon />
							<span>{siteConfig.phone}</span>
						</a>

						<TelegramLink />

						<ViberLink />
					</div>

					<button
						aria-expanded={isMenuOpen}
						aria-label="Toggle menu"
						className="p-2"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						<svg
							className="h-6 w-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							{isMenuOpen ? (
								<path
									d="M6 18L18 6M6 6l12 12"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
								/>
							) : (
								<path
									d="M4 6h16M4 12h16M4 18h16"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
								/>
							)}
						</svg>
					</button>
				</div>
			</header>

			<div
				className={`overflow-hidden border-t border-separator 2xl:hidden transition-all duration-300 ease-in-out 
					${
						isMenuOpen
							? "max-h-96 opacity-100 translate-y-0"
							: "max-h-0 opacity-0 -translate-y-2 border-t-0"
					}`}
			>
				<NavMenu className="flex flex-col gap-4 px-4 py-5 items-center" />
			</div>
		</nav>
	);
};
