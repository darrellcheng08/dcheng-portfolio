import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, profile } from "@/data/content";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Header() {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [active, setActive] = useState("#top");

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		const ids = ["work", "experience", "skills", "about", "contact"];
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActive(`#${entry.target.id}`);
					}
				});
			},
			{ rootMargin: "-45% 0px -50% 0px" },
		);

		ids.forEach((id) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);

	return (
		<header className={`fixed inset-x-0 top-0 z-50 transition-colors ${scrolled || open ? "border-b border-line bg-navy/80 backdrop-blur-xl" : "bg-transparent"}`}>
			<div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-[4.25rem] md:px-8">
				<a href="#top" className="flex items-center gap-2.5 font-semibold text-ink">
					<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-accent/60 bg-accent/10 font-mono text-xs text-accent">DC</span>
					<span className="hidden sm:inline">{profile.name}</span>
				</a>

				<nav className="hidden items-center gap-7 text-sm md:flex">
					{navItems.map((item) => (
						<a key={item.href} href={item.href} className={`transition-colors ${active === item.href ? "text-accent" : "text-mute hover:text-ink"}`}>
							{item.label}
						</a>
					))}
					<SocialLinks />
				</nav>

				<button type="button" className="p-1 text-ink md:hidden" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((v) => !v)}>
					{open ? <X size={22} /> : <Menu size={22} />}
				</button>
			</div>

			{open ? (
				<nav className="border-t border-line bg-navy/95 px-5 py-5 md:hidden">
					<div className="flex flex-col gap-4">
						{navItems.map((item) => (
							<a key={item.href} href={item.href} className="text-ink" onClick={() => setOpen(false)}>
								{item.label}
							</a>
						))}
						<a href={profile.github} target="_blank" rel="noreferrer" className="text-mute" onClick={() => setOpen(false)}>
							GitHub
						</a>
						<a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-mute" onClick={() => setOpen(false)}>
							LinkedIn
						</a>
					</div>
				</nav>
			) : null}
		</header>
	);
}
