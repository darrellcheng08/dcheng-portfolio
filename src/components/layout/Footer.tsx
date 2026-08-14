import { profile } from "@/data/content";

export function Footer() {
	return (
		<footer className="border-t border-paper-50/10">
			<div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
				<p className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper-400">
					© {new Date().getFullYear()} {profile.name}
				</p>
				<p className="font-mono text-[11px] tracking-[0.12em] text-paper-500">{profile.location}</p>
			</div>
		</footer>
	);
}
