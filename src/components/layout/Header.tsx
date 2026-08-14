import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, profile } from "@/data/content";

export function Header() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 16);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);

	return (
		<header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled || open ? "border-b border-paper-50/10 bg-ink-950/85 backdrop-blur-md" : "bg-transparent"}`}>
			<div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.5rem] sm:px-8">
				<a href="#top" className="font-mono text-xs tracking-[0.22em] text-paper-50">
					DC / {profile.lastName.toUpperCase()}
				</a>

				<nav className="hidden items-center gap-8 md:flex">
					{navItems.map((item) => (
						<a key={item.href} href={item.href} className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper-400 transition-colors hover:text-paper-50">
							{item.label}
						</a>
					))}
					<a href="#contact" className="border border-copper-500/70 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-copper-300 transition-colors hover:bg-copper-500 hover:text-ink-950">
						Let’s talk
					</a>
				</nav>

				<button type="button" className="p-2 text-paper-50 md:hidden" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((v) => !v)}>
					{open ? <X size={22} /> : <Menu size={22} />}
				</button>
			</div>

			{open ? (
				<div className="border-t border-paper-50/10 bg-ink-950 px-5 py-8 md:hidden">
					<nav className="flex flex-col gap-5">
						{navItems.map((item) => (
							<a key={item.href} href={item.href} className="font-mono text-sm uppercase tracking-[0.2em] text-paper-100" onClick={() => setOpen(false)}>
								{item.label}
							</a>
						))}
						<a href="#contact" className="mt-2 inline-flex w-fit border border-copper-500 px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-copper-300" onClick={() => setOpen(false)}>
							Let’s talk
						</a>
					</nav>
				</div>
			) : null}
		</header>
	);
}
