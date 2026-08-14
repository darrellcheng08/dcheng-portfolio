import { ArrowDownRight, MapPin } from "lucide-react";
import { marqueeSkills, profile } from "@/data/content";

export function Hero() {
	const loop = [...marqueeSkills, ...marqueeSkills];

	return (
		<section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
			<div className="pointer-events-none absolute inset-0 bg-grid bg-grid opacity-100" />
			<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-ink-950/40 to-ink-950" />
			<div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-copper-500/15 blur-3xl" />

			<div className="relative mx-auto max-w-6xl px-5 sm:px-8">
				<p className="mb-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-copper-300">
					<span className="h-1.5 w-1.5 rounded-full bg-copper-400" />
					{profile.title}
				</p>

				<h1 className="font-display text-[18vw] leading-[0.85] tracking-tight text-paper-50 sm:text-[9.5rem]">
					{profile.firstName}
					<br />
					<span className="italic text-copper-300">{profile.lastName}</span>
				</h1>

				<div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
					<p className="max-w-xl text-lg leading-relaxed text-paper-200 sm:text-xl">{profile.tagline}</p>
					<div className="flex flex-col gap-4 sm:flex-row sm:items-center lg:justify-end">
						<a href="#work" className="inline-flex items-center justify-center gap-2 bg-paper-50 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-950 transition-colors hover:bg-copper-300">
							Selected work
							<ArrowDownRight size={16} />
						</a>
						<a href="#contact" className="inline-flex items-center justify-center border border-paper-50/20 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-paper-50 transition-colors hover:border-copper-400 hover:text-copper-300">
							Contact
						</a>
					</div>
				</div>

				<div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-paper-50/10 py-6 font-mono text-[11px] uppercase tracking-[0.16em] text-paper-400">
					<span className="inline-flex items-center gap-2">
						<MapPin size={12} />
						{profile.location}
					</span>
					<span>{profile.availability}</span>
				</div>
			</div>

			<div className="relative mt-4 border-y border-paper-50/10 bg-ink-900/60">
				<div className="flex overflow-hidden py-3">
					<div className="flex min-w-full shrink-0 animate-marquee gap-10 pr-10">
						{loop.map((skill, i) => (
							<span key={`${skill}-${i}`} className="font-mono text-[11px] uppercase tracking-[0.28em] text-paper-400">
								{skill}
							</span>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
